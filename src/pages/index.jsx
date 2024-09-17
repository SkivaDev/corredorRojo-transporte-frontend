import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header"
import ServiceSection from "../components/ServiceSection";
import FeaturesSection from "../components/FeaturesSection";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";

const Inicio = () => {
    return (
        <div className="flex flex-col min-h-screen">
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