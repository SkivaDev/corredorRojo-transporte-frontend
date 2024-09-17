import React from "react";

const Agentes = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Agentes Bancarios Cercanos</h2>
      <p>Consulta los agentes bancarios más cercanos de:</p>
      <ul className="list-disc ml-6">
        <li>BCP</li>
        <li>Scotiabank</li>
      </ul>
      <p>Encuentra la ubicación más cercana en la página web de tu banco.</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7804.238061984079!2d-76.92544307563672!3d-12.035325578105637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stodos%20los%20bancos!5e0!3m2!1ses-419!2spe!4v1726525598845!5m2!1ses-419!2spe"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-screen"
      ></iframe>
    </div>
  );
};

export default Agentes;
