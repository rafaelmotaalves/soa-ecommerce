import axios from "axios";
import { pegarToken } from "./auth";

const API_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(async config => {
  const token = pegarToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;