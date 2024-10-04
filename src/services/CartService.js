import axios from "axios";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const API_URL = "http://localhost:8080/api" + "/carts";

// export const listCartItems = async (id) => {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
// };

export const getCart = async (userId) => {
    const response = await axios.get(`${API_URL}`, { params: { userId } });
    // const response = await axios.get(`http://localhost:8080/api/carts?userId=2`);
    return response.data;
}

