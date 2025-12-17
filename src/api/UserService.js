import axios from "axios";
import axiosClient from "./axiosClient";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const url = "/user";


export const getUser = async (id) => {
    return await axiosClient.get(`${url}/${id}`);
}

export const updateUser = async (id, data) => {
    return await axiosClient.put(`${url}/${id}`, data);
}

export const createUser = async (data) => {
    return await axiosClient.post(`${url}`, data);
}