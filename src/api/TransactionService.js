import axios from "axios";
import axiosClient from "./axiosClient";

const url = "/transactions";

export const listTransactions = async () => {
    return await axiosClient.get(url);
    
};