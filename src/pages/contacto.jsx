import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from "../components/Footer";
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contacto = () => {
  const slide = {
    image: "/src/assets/images/contact.jpeg",
    title: "CONTACTO",
    subtitle: "Estamos para ayudarte a resolver todas tus dudas"
  };

  return (
    <>
      <Header />
      <section className="relative h-[400px] font-principal">
        {/* Static slide */}
        <div className="absolute inset-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4 md:text-6xl">{slide.title}</h1>
              <p className="text-1xl mx-9 font-bold mb-4 md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f4f4] py-12 font-principal">
        <div className="mx-auto p-8 max-w-screen-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <form className="grid gap-4 p-6 bg-white rounded-xl shadow-md area md:area-md">
              <input type="text" placeholder="NOMBRE" className="p-3 border border-gray-300 bg-[#eff1f2] rounded-md [grid-area:nombre]" />
              <input type="email" placeholder="CORREO" className="p-3 border border-gray-300 rounded-md bg-[#eff1f2] w-full [grid-area:correo]" />
              <input type="text" placeholder="CELULAR" className="p-3 border border-gray-300 rounded-md bg-[#eff1f2] w-full [grid-area:celular]" />
              <textarea placeholder="MENSAJE" className="p-3 border border-gray-300 rounded-md bg-[#eff1f2] w-full h-32 [grid-area:mensaje]"></textarea>
              <button type="submit" className="bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 [grid-area:enviar]">
                ENVIAR
              </button>
            </form>

            <div className="flex items-center justify-center text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-700">LLÁMANOS AL</h2>
                <div className="block border-t-4 border-red-500 my-5"></div>
                <p className="mt-4 text-gray-600">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl mr-4" />
                  (01) 436-9494
                </p>
                <p className="mt-4 text-gray-600">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl mr-4" />
                  (01) 436-9495
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16 font-principal">
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-8 text-center w-[90%] mx-auto max-w-screen-2xl">
          <div className="bg-white rounded-xl shadow-xl border-red-600 border-2 p-12 w-full">
            <FontAwesomeIcon icon={faClock} style={{ color: "#f50505", }} className="text-3xl" />
            <p className="text-2xl py-4">Horario</p>
            <p>Lunes a Viernes</p>
            <p>8:00AM - 6:00PM</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl border-red-600 border-2 p-12 w-full">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f50505", }} className="text-3xl" />
            <p className="text-2xl py-4">Correo</p>
            <p>corredorrojo@atu.pe</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl border-red-600 border-2 p-12 w-full">
            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f50505", }} className="text-3xl" />
            <p className="text-2xl py-4">Dirección</p>
            <p>Florida 1 Mz.1 Lte 1 Fundo Barbadillo - Ate</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f4f4] py-12 font-principal">
        <div className="mx-auto p-8 max-w-screen-2xl">
          <div className="grid grid-flow-row-dense md:grid-cols-2 gap-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.997588691624!2d-76.93536150321044!3d-12.043686499999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c70e4cb994f9%3A0x2232bfff2439656f!2sParadero%20corredor%20rojo%20ruta%20201%20%2C%20209%2C%20202!5e0!3m2!1ses-419!2spe!4v1725727908964!5m2!1ses-419!2spe"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[20rem] max-w-lg rounded-lg shadow-lg mx-auto order-2"
            ></iframe>

            <div className="w-[70%] flex items-center justify-center text-center md:text-left md:order-3 mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-gray-700">SÍGUENOS EN NUESTRAS REDES SOCIALES</h2>
                <div className="block border-t-4 border-red-500 my-5"></div>
                <p className="mt-4 text-gray-600">
                  <FontAwesomeIcon icon={faFacebook} style={{ color: "#118eee", }} className="text-2xl mr-4" />
                  <a href="https://www.facebook.com/corredorrojope" target="_blank" rel="noopener noreferrer">Facebook</a>
                </p>
                <p className="mt-4 text-gray-600">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: "#74C0FC", }} className="text-2xl mr-4" />
                  <a href="https://x.com/corredor_rojo?lang=es" target="_blank" rel="noopener noreferrer">Twitter</a>
                </p>
                <p className="mt-4 text-gray-600">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: "#dd2a7b", }} className="text-2xl mr-4" />
                  <a href="https://www.instagram.com/corredorrojo_pe/?hl=es-la" target="_blank" rel="noopener noreferrer">Instagram</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacto;