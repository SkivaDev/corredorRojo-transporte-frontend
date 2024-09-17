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
    </div>
  );
};

export default Agentes;