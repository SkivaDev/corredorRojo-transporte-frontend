import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header";
import Footer from "../components/Footer"

const Nosotros = () => {

  const slide = {
    image: "/src/assets/images/nosotros.jpg",
    title: "QUIÉNES SOMOS",
    subtitle: "Conoce más acerca de nuestra empresa"
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

      <section className="px-4 py-12 font-principal text-center md:text-left">
        <div className="flex flex-col w-[90%] mx-auto md:flex-row items-center gap-8 justify-between md:w-[80%] max-w-screen-2xl text-center">
          <div className="">
            <img
              src="/src/assets/images/nosotros_img.png"
              alt="COVID-19 Prevention"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="md:w-[60%] lg:px-11">
            <h2 className="text-3xl font-extrabold py-5 text-[#db0e0f]">NOSOTROS</h2>
            <p className="text-gray-blue mb-4 text-justify">
              Somos una empresa que opera la Concesión del Corredor Javier Prado, regulado por la Municipalidad Metropolitana de Lima; que brinda servicios de transporte urbano de pasajeros con responsabilidad social para mejorar la calidad de vida de los usuarios, con rapidez y seguridad; con buses modernos de alta capacidad.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16 font-principal">
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-4 gap-8 text-center w-[90%] mx-auto max-w-screen-2xl">
          <div>
            <FontAwesomeIcon icon={faHandshake} style={{ color: "#f50505", }} className="text-4xl" />
            <p className="text-2xl py-4">Respeto</p>
            <p>entre colaboradores y usuarios.</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#f50505", }} className="text-4xl" />
            <p className="text-2xl py-4">Amabilidad</p>
            <p>en todos los servicios ofrecidos.</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUsers} style={{ color: "#f50505", }} className="text-4xl" />
            <p className="text-2xl py-4">Disciplina</p>
            <p>trabajo eficiente todos los días</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#f50505", }} className="text-4xl" />
            <p className="text-2xl py-4">Honestidad</p>
            <p>prioridad en nuestro día a día</p>
          </div>

        </div>
      </section>

      <section className="flex flex-col p-5 items-center mx-auto font-principal justify-center text-center md:text-left md:flex-row max-w-screen-2xl">
        <div className="md:w-[60%]">
          <img src="/src/assets/images/vision.jpg" alt="" width={1500} className="md:rounded-3xl"/>
        </div>
        <div className="px-5 py-7 md:w-[40%] md:px-10">
          <h2 className="text-3xl font-bold text-gray-700">VISIÓN</h2>
          <div className="block border-t-4 border-red-500 my-5 w-1/3 mx-auto md:mx-0"></div>
          <p className="mt-4 text-gray-blue text-justify">
            Consolidarnos como la mejor empresa peruana operadora de transporte de pasajeros con estandares internacionales , liderando el cambio en el transporte masivo en el Perú sustentado en la pasión de nuestra gente sobre la base del profesionalismo e innovación.
          </p>
        </div>
      </section>

      <section className="flex flex-col p-5 items-center mx-auto font-principal justify-center text-center md:text-left md:flex-row-reverse max-w-screen-2xl">
        <div className="md:w-[50%]">
          <img src="/src/assets/images/mision.jpeg" alt="" className="md:rounded-3xl"/>
        </div>
        <div className="px-5 py-7 md:w-[50%] md:px-10">
          <h2 className="text-3xl font-bold text-gray-700">MISIÓN</h2>
          <div className="block border-t-4 border-red-500 my-5 w-1/4 mx-auto md:mx-0"></div>
          <p className="mt-4 text-gray-blue text-justify">
            Somos una empresa que opera la Concesión del Corredor Javier Prado, regulado por la Municipalidad Metropolitana de Lima; que brinda servicios de transporte urbano de pasajeros con responsabilidad social para mejorar la calidad de vida de los usuarios, con rapidez y seguridad; con buses modernos de alta capacidad utilizando tecnologias limpias para minimizar el impacto, de nuestras operaciones, en el medio ambiente; con los mejores especialistas y sistemas; buscando incentivar la integración con otros sistemas de transporte y satisfaciendo las necesidades de nuestros usuarios y colaboradores; con generación de valor para los stakeholders.
          </p>
        </div>
      </section>

      <section className="bg-[#ec1c24] my-16 py-16 font-principal text-white">
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-4 gap-8 text-center w-[90%] mx-auto max-w-screen-2xl">
          <div>
            <FontAwesomeIcon icon={faCar} style={{ color: "#fff", }} className="text-4xl" />
            <p className="text-6xl py-4 font-bold">257</p>
            <p>Buses modernos</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faFlag} style={{ color: "#fff", }} className="text-4xl" />
            <p className="text-6xl py-4 font-bold">5</p>
            <p>Rutas</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#fff", }} className="text-4xl" />
            <p className="text-6xl py-4 font-bold">774</p>
            <p>Colaboradores</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUsers} style={{ color: "#fff", }} className="text-4xl" />
            <p className="text-6xl py-4 font-bold">165,000</p>
            <p>Pasajeros por días</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Nosotros;