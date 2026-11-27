import axios from "axios";
import setupInterceptors from "../interceptor.api";
import { TOKEN_KEY } from "./token";

export const createApi = (endpoint: string) => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/tangy/${endpoint}`,
    withCredentials: true,
  });
};

export const createTokenApi = (endpoint: string) => {
  const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/tangy/${endpoint}`,
    withCredentials: true,
  });

  setupInterceptors(api);

  return api;
};

// refresh 專用
export const refreshApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/tangy`,
  withCredentials: true,
});

let refreshPromise: Promise<string> | null = null;

// 全站共用同一個 refresh 請求，避免 StrictMode 或多個 API 同時刷新時
// 因 refresh token 輪替而讓其中一個請求失敗。
export const refreshAccessToken = () => {
  refreshPromise ??= refreshApi
    .post("/refresh")
    .then(({ data }) => {
      const accessToken = data.dataSet.accessToken as string;
      sessionStorage.setItem(TOKEN_KEY, accessToken);
      return accessToken;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
};
