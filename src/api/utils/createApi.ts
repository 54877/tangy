import axios from "axios";
import setupInterceptors from "../interceptor";

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
