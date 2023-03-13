import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { API_ENDPOINT } from "data";

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
});

export type { AxiosRequestConfig, AxiosError, AxiosResponse };

const isAxiosError = axios.isAxiosError;

export { isAxiosError };

export default axiosInstance;
