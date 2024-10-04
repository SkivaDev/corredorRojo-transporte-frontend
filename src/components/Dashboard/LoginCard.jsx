import React from "react";
import { useNavigate } from "react-router-dom";
const ModalDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-7 w-[54rem] max-w-full mx-3 shadow-lg">
        {/* Imagen pequeña */}
        <div className="flex justify-center mb-4">
          <img
            src="/src/assets/images/Lima_Pass.jpg"
            alt="img"
            className="rounded-md w-[120px] h-[80px]"
          />
        </div>
        {/* Título de la página */}
        <h2 className="text-center text-xl font-semibold mb-4">
          Ingrese su Número de Tarjeta
        </h2>
        {/* Input para número de tarjeta */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Número de tarjeta"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">
            Confirmar
          </button>
          {/* Link para redirigir si no tiene tarjeta */}
          <button
            className="text-blue-500 underline mt-4"
            onClick={() => navigate("/dashboard/recarga")}
          >
            No tengo tarjeta
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalDashboard;