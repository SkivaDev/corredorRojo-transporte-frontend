import React from "react";
import { useNavigate } from "react-router-dom";

const PriceDetails = ({ cart, handleMethod }) => {
  const total = cart.reduce(
    (acc, item) => acc + item.quantity * item.product.pointsNeeded,
    0
  );


  return (
    <div className="max-w-[400px] w-full h-min p-[20px] bg-white mr-6 rounded-lg shadow-md">
      <h2 className="uppercase mb-[15px] font-bold">Detalles del Pedido</h2>
      <div className="w-full h-[1px] bg-slate-200"></div>

      {cart.length === 0 ? (
        <div className="h-[225px] w-full flex items-center justify-center">
          <p>Tu carrito está vacío</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 py-7">
            <div className="flex justify-between ">
              <p>
                Subtotal ({cart.length}{" "}
                {cart.length > 1 ? "productos" : "producto"})
              </p>
              <span className="text-orange-500 font-bold">{total} puntos</span>
            </div>
            <div className="flex justify-between">
              <p>Costo de Envio</p>
              <span className="text-orange-500 font-bold">Envio Gratis</span>
            </div>

            <div className="w-full h-[1px] bg-slate-200"></div>
            <div className="flex justify-between">
              <p>Total</p>
              <span className="text-orange-500 font-bold">{total} puntos</span>
            </div>
          </div>
          <button className="w-full rounded-lg bg-red-500 text-white hover:bg-red-800 py-3" onClick={handleMethod}>
            Realizar Canje
          </button>
        </>
      )}
    </div>
  );
};

export default PriceDetails;
