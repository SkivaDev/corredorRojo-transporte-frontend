import axios from "axios";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const API_URL = "http://localhost:8080/api" + "/user";


export const getUser = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}