import axios from "axios";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const API_URL = "http://localhost:8080/api" + "/products";

export const listProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

export const getProduct = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
