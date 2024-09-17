import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FeaturesSection = () => {
  return (
    <>
      <section className="w-full px-4 py-12 font-principal bg-[#f5f4f4]">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-8 justify-between max-w-screen-2xl">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold">¡PAGA TU PASAJE SIN SALIR DE CASA CON NUESTRA APLICACIÓN!</h2>
            <p className="text-gray-blue mb-4 py-5">
              ¡Olvídate de las filas! Con nuestra nueva aplicación, compra tus pasajes y recarga tus tarjetas desde la comodidad de tu hogar. Rápido, seguro y siempre disponible.
            </p>
            <div className="text-gray-600 space-y-5">
              <p>
                <FontAwesomeIcon icon={faBus} className="text-3xl mr-4" />
                Amplia flota de buses
              </p>
              <p>
                <FontAwesomeIcon icon={faMoneyBill} className="text-3xl mr-4" />
                Usa el medio de pago que prefieras
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="text-3xl mr-4" />
                Tenemos más de 50 puntos de recarga
              </p>
            </div>
          </div>
          <div className="">
            <img
              src="/src/assets/images/moovit.png"
              alt="COVID-19 Prevention"
              width={300}
              height={300}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 font-principal">
        <div className="w-[90%] grid mx-auto md:grid-cols-2 lg:grid-cols-3 bg-[#b52d2c] gap-8 md:w-[80%] p-10 rounded-3xl max-w-screen-2xl">
          <div>
            <h2 className="font-extrabold text-2xl text-white mb-5 text-center">DISFRUTA DE LA APP</h2>
            <div className="text-gray-600 space-y-5 bg-white p-4 rounded-xl">
              <p>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#36b176", }} className='text-2xl mr-4' />
                Elige tu medio de pago preferido
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#36b176", }} className='text-2xl mr-4' />
                Aprovecha descuentos increibles
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#36b176", }} className='text-2xl mr-4' />
                Mira en tiempo real el recorrido de cada viaje
              </p>

              <div className='flex flex-col gap-5 sm:flex-row sm:justify-around'>
                <div>
                  <p className='font-bold'>4.5 <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></p>
                  <p>10M + descargas</p>
                  <p className='font-bold'>Play Store</p>
                </div>
                <div className="hidden  h-16 border-l-2 border-black sm:block"></div>
                <div>
                  <p className='font-bold'>4.6 <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></p>
                  <p>10M + descargas</p>
                  <p className='font-bold'>App Store</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-7">
            <h2 className="font-extrabold text-lg text-white">DESCARGA LA APP en</h2>
            <div className="text-gray-600 space-y-5">
              <img src="/src/assets/images/store.png" alt="store" width={200} className="rounded-3xl mx-auto" />
            </div>
          </div>

          <div>
            <div className="text-gray-600 space-y-5">
              <img src="/src/assets/images/moovitLogo.png" alt="store" width={200} className="rounded-3xl mx-auto" />
              <img src="/src/assets/images/screen.png" alt="store" width={200} className="rounded-3xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 font-principal bg-[#f5f4f4]">
        <div className="flex flex-col w-[90%] mx-auto md:flex-row items-center gap-8 justify-between md:w-[70%] max-w-screen-lg">
          <div className="md:w-full">
            <h2 className="text-3xl font-extrabold">OPCIONES DE PAGO</h2>
            <p className="text-gray-blue mb-4 py-5">
              Pagos 100% seguros y protegidos
            </p>
            <div className='flex flex-wrap gap-6'>
              <img src="/src/assets/images/visa.png" alt="COVID-19 Prevention" width={60} className="rounded-3xl" />
              <img src="/src/assets/images/american.png" alt="COVID-19 Prevention" width={60} className="rounded-3xl" />
              <img src="/src/assets/images/mastercard.png" alt="COVID-19 Prevention" width={60} className="rounded-3xl" />
              <img src="/src/assets/images/pagoefectivo.png" alt="COVID-19 Prevention" width={60} className="rounded-3xl" />
              <img src="/src/assets/images/yape.jfif" alt="COVID-19 Prevention" width={60} className="rounded-3xl" />
            </div>
          </div>
          <div className="">
            <img
              src="/src/assets/images/list-mock.png"
              alt="COVID-19 Prevention"
              width={300}
              height={300}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-800 px-4 py-12 font-principal text-center md:text-left">
        <div className="flex flex-col w-[90%] mx-auto md:flex-row items-center gap-8 justify-between md:w-[80%] max-w-screen-2xl">
          <div className="md:w-full">
            <h3 className="text-2xl font-extrabold text-white">RECARGA</h3>
            <h2 className="text-3xl font-extrabold text-[#db0e0f]">TU TARJETA ONLINE</h2>
            <h3 className="text-2xl font-extrabold text-white">RÁPIDO Y SEGURO</h3>
            <p className="text-gray-blue mb-4 py-5 md:w-[70%]">
              Una recarga de tarjeta online permite agregar saldo a tu tarjeta de manera rápida y segura. Solo ingresa el número de tu tarjeta, elige el monto a recargar, selecciona tu método de pago, y listo. ¡Tu saldo se actualizará al instante!
            </p>
            <button className='bg-[#d8b024] p-2 rounded-lg font-bold'>¡Recargar ahora!</button>
          </div>
          <div className="">
            <img
              src="/src/assets/images/Celular.webp"
              alt="COVID-19 Prevention"
              width={300}
              height={300}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
