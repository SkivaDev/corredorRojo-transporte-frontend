import React from "react";
import Swal from "sweetalert2"

const Tarjeta = () => {

  const handleEnviar = () => {
    Swal.fire({
      title: 'Pago exitoso!',
      text: 'Su recarga se esta procesando',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="bg-gray-900 p-8 min-h-screen flex justify-center items-center">
      {/* Contenedor principal */}
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6 max-w-xl w-full">
        {/* Sección de Método de Pago */}
        <h2 className="text-2xl font-bold mb-4">MÉTODO DE PAGO</h2>
        <div className="mb-6">
          <label className="block mb-2 text-gray-300">Selecciona un método de pago:</label>
          <select className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600">
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Amex">Amex</option>
          </select>
        </div>

        {/* Información de la tarjeta */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block mb-1 text-gray-300">Número de tarjeta:</label>
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">Fecha de caducidad:</label>
              <div className="flex space-x-2">
                <select className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600">
                  <option value="">Mes</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  {/* Agrega más meses aquí */}
                </select>
                <select className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600">
                  <option value="">Año</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  {/* Agrega más años aquí */}
                </select>
              </div>
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">Código de seguridad:</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Información de facturación */}
        <h2 className="text-2xl font-bold mb-4">INFORMACIÓN DE FACTURACIÓN</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">Nombre:</label>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">Apellidos:</label>
              <input
                type="text"
                placeholder="Apellidos"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">Localidad:</label>
              <input
                type="text"
                placeholder="Localidad"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">Código postal o ZIP:</label>
              <input
                type="text"
                placeholder="Código postal"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Dirección de facturación:</label>
            <input
              type="text"
              placeholder="Dirección"
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">País:</label>
              <select className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600">
                <option value="Perú">Perú</option>
                {/* Agregar más países */}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-gray-300">Teléfono:</label>
              <input
                type="text"
                placeholder="Teléfono"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Guardar información */}
        <div className="mt-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox bg-gray-700 border border-gray-600 text-blue-600" />
            <span className="text-gray-300">Guardar mi información de pago para facilitar el proceso la próxima vez</span>
          </label>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded mt-6 hover:bg-blue-700" onClick={handleEnviar}
        >
          Realizar Pago
        </button>
      </div>
    </div>
  );
};

export default Tarjeta;