import {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { TOKEN_KEY } from "./utils/token";
import { refreshApi } from "./utils/createApi";

let isRedirecting = false;

interface RetryRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const setupInterceptors = (instance: AxiosInstance) => {
  // Request
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = sessionStorage.getItem(TOKEN_KEY);

      if (token) {
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
          const { data } = await refreshApi.post("/refresh"); //透過API 重新取得accessToken

          sessionStorage.setItem(TOKEN_KEY, data.accessToken); // 重新寫入accessToken

          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`; // 在Header寫入新accessToken
          console.log("從新取得accessToken", data);
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
