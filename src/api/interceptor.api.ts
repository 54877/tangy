import {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { TOKEN_KEY } from "./utils/token";
import { refreshApi } from "./utils/createApi";
import { jwtDecode } from "jwt-decode";

let isRedirecting = false;

interface RetryRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

type TokenPayload = {
  exp: number;
  iat: number;
  id: string;
  deviceId: string;
  email: string;
  role: string;
};

const setupInterceptors = (instance: AxiosInstance) => {
  let refreshPromise: Promise<string> | null = null;

  const refreshAccessToken = () => {
    refreshPromise ??= refreshApi
      .post("/refresh")
      .then(({ data }) => {
        sessionStorage.setItem(TOKEN_KEY, data.accessToken);
        return data.accessToken;
      })
      .finally(() => {
        refreshPromise = null;
      });

    return refreshPromise;
  };

  const shouldRefresh = (token: string) => {
    const { exp } = jwtDecode<TokenPayload>(token);
    return exp - Math.floor(Date.now() / 1000) < 300;
  };

  // Request
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      let token = sessionStorage.getItem(TOKEN_KEY);
      if (token) {
        if (shouldRefresh(token)) {
          token = await refreshAccessToken();
        }

        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError) => {
      throw error;
    },
  );

  // Response
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as RetryRequestConfig | undefined;

      if (
        error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        try {
          const token = await refreshAccessToken();
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${token}`;

          return instance(originalRequest);
        } catch {
          sessionStorage.removeItem(TOKEN_KEY);

          if (
            !isRedirecting &&
            globalThis.location.pathname !== "/tangy/login"
          ) {
            isRedirecting = true;
            globalThis.location.href = "/tangy/login";
          }

          throw error;
        }
      }

      throw error;
    },
  );
};

export default setupInterceptors;
