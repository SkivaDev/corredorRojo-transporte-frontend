import axiosClient from "./axiosClient";

const url = "/cart-items";

export const listCartItems = async (cartId) => {
    // const response = await axios.get(`${API_URL}`, { params: { cartId } });
    // return response.data;
    return await axiosClient.get(url, { params: { cartId } });
};

export const createCartItem = async (cartId, productId) => {
    return await axiosClient.post(url, null, { params: {cartId, productId} });
};

export const updateCartItem = async (id, cartItem) => { // id es el id del cartItem
    // const response = await axios.put(`${API_URL}/${id}`, cartItem);
    // return response.data;
    return await axiosClient.put(`${url}/${id}`, cartItem);
};

export const deleteCartItem = async (id) => {
    return await axiosClient.delete(`${url}/${id}`);
};