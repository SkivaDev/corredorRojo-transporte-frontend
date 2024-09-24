import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Ecommerce/ProductCard";
import CartPanel from "../Ecommerce/CartPanel";

const productsData = [
  { id: 1, title: "Producto 1", price: 20, image: "/src/assets/user01.png" },
  { id: 2, title: "Producto 2", price: 35, image: "/src/assets/user02.png" },
  { id: 3, title: "Producto 2", price: 35, image: "/src/assets/user02.png" },
  // Agrega más productos si lo deseas
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="p-4 mt-16 sm:ml-64">
      <header className="flex justify-start items-center mb-4 bg-transparent">
        <h1 className="text-2xl font-bold">Mi Tienda</h1>
        <button
          onClick={toggleCart}
          className="relative p-2 bg-blue-500 text-white rounded-full"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <CartPanel isOpen={isCartOpen} cart={cart} toggleCart={toggleCart} />
    </div>
  );
};

export default App;
