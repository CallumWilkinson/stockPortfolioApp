import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5265",
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return;
  }

  delete apiClient.defaults.headers.common["Authorization"];
};

apiClient.interceptors.request.use((config) => {
  //every request will re-read the latest token
  const token = localStorage.getItem("token");

  if (token) {
    config.headers = config.headers ?? {};
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  }

  if (config.headers && "Authorization" in config.headers) {
    delete (config.headers as any)["Authorzation"];
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.assign("/login");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
