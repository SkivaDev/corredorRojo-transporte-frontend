import axios from "axios";

// const API_URL = (process.env.BASE_API_URL || "http://localhost:8080/api") + "/products";
const API_URL = "http://localhost:8080/api" + "/cart-items";

export const listCartItems = async (cartId) => {
    const response = await axios.get(`${API_URL}`, { params: { cartId } });
    return response.data;
};

export const createCartItem = async (cartId, productId) => {
    const response = await axios.post(`${API_URL}`, null, { params: {cartId, productId} });
    return response.data;
};

export const updateCartItem = async (id, cartItem) => { // id es el id del cartItem
    const response = await axios.put(`${API_URL}/${id}`, cartItem);
    return response.data;
};

export const deleteCartItem = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};