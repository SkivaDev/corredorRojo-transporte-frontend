import axios from "axios";
import axiosClient from "./axiosClient";

const url =  "/carts";

export const getCart = async (userId) => {
    return await axiosClient.get(`${url}`, { params: { userId } });
}

