import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCard;
