import {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { TOKEN_KEY } from "./util";

let isRedirecting = false;

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
    (error: AxiosError) => Promise.reject(error),
  );

  // Response
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401 && !isRedirecting) {
        isRedirecting = true;

        sessionStorage.removeItem(TOKEN_KEY);

        if (globalThis.location.pathname !== "/login") {
          globalThis.location.href = "/login";
        }
      }

      return Promise.reject(error);
    },
  );
};

export default setupInterceptors;
