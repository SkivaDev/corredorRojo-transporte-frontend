import axios from "axios";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const BASE_URL = "http://localhost:8080/api";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;