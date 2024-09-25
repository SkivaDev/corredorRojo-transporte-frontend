import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import stores from "../stores"; // Asegúrate de que la ruta sea correcta

const MapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -12.0464, // Coordenadas centrales de Lima
    lng: -77.0428,
  };

  return (
    <LoadScript googleMapsApiKey="TU_CLAVE_DE_API">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {stores.map((store) => (
          <Marker
            key={store.id}
            position={{ lat: store.lat, lng: store.lng }}
            label={store.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
