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
  email: string;
  role: string;
};

const setupInterceptors = (instance: AxiosInstance) => {
  let refreshPromise: Promise<string> | null = null;

  const refreshAccessToken = () => {
    if (!refreshPromise) {
      refreshPromise = refreshApi
        .post("/refresh")
        .then(({ data }) => {
          sessionStorage.setItem(TOKEN_KEY, data.accessToken);
          console.log("Access token refreshed:", data.accessToken);
          return data.accessToken;
        })
        .finally(() => {
          refreshPromise = null;
        });
    }

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
          console.log("快過期了 提前跟換accessToken");
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
      const originalRequest = error.config as RetryRequestConfig;
      if (
        error.response?.status === 401 &&
        !isRedirecting &&
        !originalRequest._retry
      ) {
        isRedirecting = true; // 避免重複觸發API
        originalRequest._retry = true;
        try {
          const data = await refreshAccessToken();
          console.log("過期了 跟換accessToken");
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${data}`; // 在Header寫入新accessToken

          return instance(originalRequest); //重新執行API
        } catch {
          sessionStorage.removeItem(TOKEN_KEY);

          if (globalThis.location.pathname !== "/tangy/login") {
            globalThis.location.href = "/tangy/login";
          }
          throw error;
        } finally {
          isRedirecting = false;
        }
      }
      throw error;
    },
  );
};

export default setupInterceptors;
