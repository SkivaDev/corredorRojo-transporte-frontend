import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/index";
import Nosotros from "./pages/nosotros";
import Recarga from "./pages/recarga";
import Blog from "./pages/blog";
import Contacto from "./pages/contacto";
import InicioSesion from "./pages/inicioSesion";
import Registro from "./pages/register";
import Usuario from "./pages/usuario";
import Tarjeta from "./pages/Usuario/tarjeta";
import Codigo from "./pages/Usuario/codigo";
import Agente  from "./pages/Usuario/agente";
import ModalComponent from "./components/ModalComponent"; 
import "./App.css";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true); 

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Router>
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} /> {}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/recarga" element={<Recarga />} />
        <Route path="/tarjeta" element={<Tarjeta />} />
        <Route path="/agente" element={<Agente />} />
        <Route path="/codigo" element={<Codigo />} />
      </Routes>
    </Router>
  );
};

export default App;