import React from "react";
import QRCode from "react-qr-code";
import Swal from "sweetalert2"

const QR = () => {

  const handleEnviar = () => {
    Swal.fire({
      title: 'Mensaje enviado!',
      text: 'Su ha enviado una notificación a su celular',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };
  
  return (
    <div className="p-6">
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          {/* Header de PagoEfectivo */}
          <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
            <h2 className="text-center font-bold text-xl">
              ¡Información de tu pago!
            </h2>
          </div>

          {/* Información de pago */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Empresa: PagoEfectivo</p>
            <p className="text-sm text-gray-500">Servicio: PagoEfectivo Soles</p>

            <div className="bg-yellow-100 p-4 mt-4 rounded-lg">
              <p className="font-bold text-gray-800 text-lg">
                Código de pago (CIP)
              </p>
              <p className="text-3xl font-bold text-black my-2"></p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded">
                Copiar
              </button>
            </div>

            <div className="bg-yellow-100 p-4 mt-4 rounded-lg">
              <p className="font-bold text-gray-800 text-lg">Monto a pagar</p>
              <p className="text-3xl font-bold text-black my-2">S/. ....</p>
            </div>

            {/* Fecha límite de pago */}
            <p className="text-sm text-gray-500 mt-4">
              Págalo antes del Martes 17/09/2024 - 11:34 AM
            </p>
          </div>

          {/* Código QR */}
          <div className="mt-6 text-center">
            <h3 className="font-bold mb-2">Escanea el QR y pága desde tu billetera favorita</h3>
            <QRCode value="https://www.facebook.com/corredorrojope" className="mx-auto" />
          </div>

          {/* Compartir código CIP */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">Compartir código CIP por SMS</p>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Ingresar celular"
                className="w-full px-4 py-2 border rounded-l-lg"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-lg" onClick={handleEnviar}>
                Enviar
              </button>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>*Recuerda habilitar tu tarjeta para compras por internet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QR;