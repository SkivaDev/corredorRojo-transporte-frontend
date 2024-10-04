import axios from "axios";
import axiosClient from "./axiosClient";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const url = "/products";

export const listProducts = async () => {
    // const response = await axios.get(API_URL);
    // return response.data;
    return await axiosClient.get(url);
};

export const createProduct = async (product) => {
    return await axiosClient.post(url, product);
};

export const getProduct = async (id) => {
    return await axios.get(`${url}/${id}`);
};

export const updateProduct = async (id, product) => {
    return await axios.put(`${url}/${id}`, product);
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${url}/${id}`);
};
