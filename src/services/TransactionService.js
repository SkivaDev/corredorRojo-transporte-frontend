import axios from "axios";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const API_URL = "http://localhost:8080/api" + "/transactions";

export const listTransactions = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};