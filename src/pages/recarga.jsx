import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recarga = () => {
  const [monto, setMonto] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const navigate = useNavigate();

  const handleRecargarClick = () => {
    // Aquí puedes validar los datos antes de redirigir
    navigate("/recarga", { state: { monto, numeroTarjeta } });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Recargar Tarjeta</h2>
      <div className="mb-4">
        <label className="block mb-1">Monto a recargar:</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="Ingrese el monto"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Número de tarjeta:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
          placeholder="Ingrese el número de tarjeta"
        />
      </div>
      <button
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        onClick={handleRecargarClick}
      >
        Recargar
      </button>
    </div>
  );
};

export default Recarga;