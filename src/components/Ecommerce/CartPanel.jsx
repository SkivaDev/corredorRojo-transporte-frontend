import React from "react";
import { Link } from "react-router-dom";

const CartPanel = ({ isOpen, cart, toggleCart }) => {

  const total = cart.reduce((acc, item) => acc + (item.quantity * item.product.pointsNeeded), 0);

  return (
    <div
      className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-2 right-2 text-gray-600"
        onClick={toggleCart}
      >
        ✖
      </button>
      <h2 className="text-lg font-bold p-4 border-b">Carrito de Compras</h2>

      <div className="p-4 space-y-4">
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          cart.map(
            (item) =>
              item.quantity > 0 && ( // Solo mostramos si cantidad > 0
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm">Cantidad: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">{item.quantity * item.product.pointsNeeded}</p>
                </div>
              )
          )
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>{total}</span>
          </div>
          <Link
            to="/dashboard/ecommerce/cart"
            className="block bg-green-500 text-white text-center py-2 mt-4 rounded hover:bg-green-600"
            onClick={toggleCart}
          >
            Ir al Carrito
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPanel;
