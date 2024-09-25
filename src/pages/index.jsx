import React, { useState } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import FeaturesSection from "../components/FeaturesSection";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";
import ModalComponent from "../components/ModalComponent";

const Inicio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} /> {}
      <main className="flex-grow">
        <Header />
        <Hero />
        <ServiceSection />
        <FeaturesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Inicio;
