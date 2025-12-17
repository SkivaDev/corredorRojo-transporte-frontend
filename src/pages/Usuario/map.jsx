import React from "react";
import MapComponent from "../../components/MapComponent";

const map = () => {
  return (
    <div className="h-screen flex flex-col p-4 mt-16 sm:ml-64 dark:text-white dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl mb-3 font-semibold font-principal">
        Paraderos del corredor Rojo
      </h1>
      <MapComponent />
    </div>
  );
};

export default map;
