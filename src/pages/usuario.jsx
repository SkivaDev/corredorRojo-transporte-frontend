import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Usuario = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Sesión culminada",
      text: "Has cerrado sesión exitosamente",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then(() => {
      navigate("/inicioSesion"); // Redirige a la página de inicio de sesión
    });
  };

  const [monto, setMonto] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [selectedSection, setSelectedSection] = useState("recargarTarjeta");

  const handleProcesarCompra = () => {
    if (metodoPago) {
      switch (metodoPago) {
        case "tarjeta":
          navigate("/tarjeta");
          break;
        case "codigo":
          navigate("/codigo");
          break;
        case "agentes":
          navigate("/agente");
          break;
        default:
          break;
      }
    } else {
      alert("Por favor, selecciona un método de pago.");
    }
  };

  return (
    <div className="h-screen flex">
      {/* Panel lateral izquierdo */}
      <div className="w-[20%] bg-gray-800 text-white p-6">
        {/* Foto y nombre del usuario */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="/src/assets/images/usuario.png"
            alt="Foto del usuario"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold">Usuario</h2>
        </div>

        {/* Botones de acción */}
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left bg-gray-700 hover:bg-gray-600 p-2 rounded"
              onClick={() => setSelectedSection("recargarTarjeta")}
            >
              Recargar Tarjeta
            </button>
          </li>
          <li>
            <button
              className="w-full text-left bg-gray-700 hover:bg-gray-600 p-2 rounded"
              onClick={() => setSelectedSection("comprarPasaje")}
            >
              Comprar Pasaje
            </button>
          </li>
          <li>
            <button
              className="w-full text-left bg-gray-700 hover:bg-gray-600 p-2 rounded"
              onClick={() => setSelectedSection("verRutas")}
            >
              Ver Paraderos
            </button>
          </li>
          <li>
            <button
              className="w-full text-left bg-gray-700 hover:bg-gray-600 p-2 rounded"
              onClick={() => setSelectedSection("historialCompra")}
            >
              Historial de compra
            </button>
          </li>
          <li>
            <button
              className="w-full text-left bg-gray-700 hover:bg-gray-600 p-2 rounded"
              onClick={() => setSelectedSection("canjearPuntos")}
            >
              Canjear Puntos
            </button>
          </li>
        </ul>

        {/* Botón de cerrar sesión */}
        <div className="mt-10">
          <button
            className="w-full bg-red-600 hover:bg-red-700 p-2 rounded text-center"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="w-3/4 p-6">
        {selectedSection === "recargarTarjeta" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Recargar Tarjeta</h2>
            <div className="mb-4">
              <label className="block mb-2">Monto a recargar:</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                placeholder="Ingrese el monto"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Número de tarjeta:</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={numeroTarjeta}
                onChange={(e) => setNumeroTarjeta(e.target.value)}
                placeholder="Ingrese el número de tarjeta"
              />
            </div>

            <h3 className="text-xl font-bold mb-4">Seleccione un método de pago:</h3>
            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
              >
                <option value="">Seleccionar</option>
                <option value="tarjeta">Tarjeta de crédito/débito</option>
                <option value="codigo">Monedero digital (QR)</option>
                <option value="agentes">Agentes bancarios</option>
              </select>
            </div>

            <button
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
              onClick={handleProcesarCompra}
            >
              Procesar Compra
            </button>
          </div>
        )}

        {selectedSection === "comprarPasaje" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Comprar Pasaje</h2>
            <p>Contenido para comprar pasaje...</p>
          </div>
        )}

        {selectedSection === "verRutas" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Ver Paraderos</h2>
            <p>Podras ver todas los paraderos del corredor rojo...</p>
          </div>
        )}

        {selectedSection === "historialCompra" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Historial de compras</h2>
            <p>Historial de compras...</p>
          </div>
        )}

        {selectedSection === "canjearPuntos" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Canjear Puntos</h2>
            <p>Contenido para canjear puntos...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Usuario;