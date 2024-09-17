import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const [activeLink, setActiveLink] = useState("/inicio");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-[1140px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h3 className="font-bold mb-2">INFORMACIÓN</h3>
            <p className="text-sm mb-2">
              Entérate de nuestras promociones y
              nuestros últimos proyectos.
            </p>
            <form className="flex rounded-md overflow-hidden">
              <input
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 "
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600">
                →
              </button>
            </form>
          </div>
          <div>
            <h3 className="font-bold mb-2">ENLACES DE INTERÉS</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  <Link to="/"
                    className={activeLink === "/"}
                    onClick={() => {
                      handleLinkClick("/");
                      window.scrollTo(0, 0); 
                    }}>
                    Inicio
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  <Link to="/nosotros"
                    className={activeLink === "/nosotros"}
                    onClick={() => {
                      handleLinkClick("/nosotros");
                      window.scrollTo(0, 0);
                    }}>
                    Nosotros
                  </Link>
                </a>
              </li>
              <li>
              <a href="#" className="text-sm hover:underline">
                  <Link to="/blog"
                    className={activeLink === "/blog"}
                    onClick={() => {
                      handleLinkClick("/blog");
                      window.scrollTo(0, 0);
                    }}>
                    Blog
                  </Link>
                </a>
              </li>
              <li>
              <a href="#" className="text-sm hover:underline">
                  <Link to="/contacto"
                    className={activeLink === "/contacto"}
                    onClick={() => {
                      handleLinkClick("/contacto");
                      window.scrollTo(0, 0);
                    }}>
                    Contacto
                  </Link>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">CONTÁCTANOS</h3>
            <p className="text-sm">(01) 436-9495 <br />
              (01) 436-9494</p>
            <p className="text-sm">corredorrojo@atu.pe</p>
            <div className="mt-2">
              <a href="#" className="text-2xl mr-2">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
