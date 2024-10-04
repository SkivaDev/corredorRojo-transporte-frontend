import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCartPanel";
import CartPanel from "../Ecommerce/CartPanel";
import { listProducts } from "../../services/ProductService";
import { getCart } from "../../services/CartService";
import { createCartItem, listCartItems, updateCartItem } from "../../services/CartItemService";
import ProductCartPanel from "./ProductCartPanel";

/*const productsData = [
  { id: 1, title: "Producto 1", price: 20, image: "/src/assets/user01.png" },
  { id: 2, title: "Producto 2", price: 35, image: "/src/assets/user02.png" },
  { id: 3, title: "Producto 2", price: 35, image: "/src/assets/user02.png" },
  // Agrega más productos si lo deseas
];*/

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedUserId = parseInt(localStorage.getItem("userId"), 10);
        
        const [productsData, cartData] = await Promise.all([
          listProducts(),
          getCart(savedUserId)
        ]);

        setProducts(productsData);
        setCart(cartData);

        const cartItemsData = await listCartItems(cartData.id);
        setCartItems(cartItemsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);



  // const addToCart = (product) => {
  //   const existingProduct = cart.find((item) => item.id === product.id);
  //   if (existingProduct) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };
  
  const addToCart = async (product) => {
    try {

      const existingItem = cartItems.find((item) => item.product.id === product.id);

      console.log("existingItem", existingItem);
      if (existingItem) {
        // Actualiza la cantidad del item en el carrito
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1, price: existingItem.price + product.price };
        console.log("updatedItem", updatedItem);
        await updateCartItem(existingItem.id, updatedItem);
        setCartItems(cartItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      } else {
        // Agrega un nuevo item al carrito
        const newCartItem = await createCartItem(cart.id, product.id);
        setCartItems([...cartItems, newCartItem]);
        console.log("xd");
      }
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  }

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
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCartPanel
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <CartPanel isOpen={isCartOpen} cart={cartItems} toggleCart={toggleCart} />
    </div>
  );
};

export default App;
