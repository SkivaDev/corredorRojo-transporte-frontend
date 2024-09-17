import React, { useState } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar 'Link'

const Header = () => {
  const [activeLink, setActiveLink] = useState("/inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false); // Cerrar el menú cuando se hace clic en un enlace
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="/src/assets/images/logo.png" alt="Logo" />
        </div>
        <div className="hamburguer" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-bar ${menuOpen ? "active" : ""}`}>
          <ul className="font-principal">
            <li>
              <Link
                to="/inicio"
                className={activeLink === "/inicio" ? "active" : ""}
                onClick={() => handleLinkClick("/inicio")}
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                className={activeLink === "/nosotros" ? "active" : ""}
                onClick={() => handleLinkClick("/nosotros")}
              >
                NOSOTROS
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={activeLink === "/contacto" ? "active" : ""}
                onClick={() => handleLinkClick("/contacto")}
              >
                CONTACTO
              </Link>
            </li>
            <li className="dropdown">
              <Link
                to="/blog"
                onClick={() => handleLinkClick("/blog")}
              >
                SERVICIO
              </Link>
            </li>
            <li>
              <Link
                to="/inicioSesion"
                className={activeLink === "/inicioSesion" ? "user active" : "user"}
                onClick={() => handleLinkClick("/inicioSesion")}
              >
                INICIO SESION
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

