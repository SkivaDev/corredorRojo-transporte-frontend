import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import PriceDetails from "./PriceDetails";
import { getCart } from "../../api/CartService";
import {
  deleteCartItem,
  listCartItems,
  updateCartItem,
} from "../../api/CartItemService";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  //   const [cartItems, setCartItems] = useState([
  //     { id: 1, name: "Product 1", price: 100, quantity: 1 },
  //     { id: 2, name: "Product 2", price: 200, quantity: 2 },
  //   ]);

  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedUserId = parseInt(localStorage.getItem("userId"), 10);

        const cartData = await getCart(savedUserId);
        setCart(cartData);

        const cartItemsData = await listCartItems(cartData.id);
        setCartItems(cartItemsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    navigate("checkout");
  };

  const handleReduceQuantity = async (id, cartItem) => {
    try {
      const updatedItem = {
        ...cartItem,
        quantity: cartItem.quantity - 1,
        price: cartItem.price - cartItem.product.price,
      };
      await updateCartItem(id, updatedItem);
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } catch (error) {
      console.error("Error reducing quantity of item: ", error);
    }
  };

  const handleIncreaseQuantity = async (id, cartItem) => {
    try {
      const updatedItem = {
        ...cartItem,
        quantity: cartItem.quantity + 1,
        price: cartItem.price + cartItem.product.price,
      };
      await updateCartItem(id, updatedItem);
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error("Error increasing quantity of item: ", error);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await deleteCartItem(id);
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  return (
    <div className="p-4 mt-16 sm:ml-64 bg-gray-100 min-h-screen">
      <div className="flex justify-start items-center mb-4 bg-transparent">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
      </div>

      <div className="w-full flex gap-8">
        <ul className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <ProductCart
              key={item.id}
              item={item}
              handleReduceQuantity={handleReduceQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>

        <PriceDetails cart={cartItems} handleMethod={handleRedirect}/>
      </div>
    </div>
  );
};

export default Cart;
