import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";

const MapComponent = () => {
  // Lista inicial de coordenadas con nombres
  const initialMarkers = [
    { lat: -12.042658, lng: -76.930898, name: "Terminal - Punto 1" },
    { lat: -12.062929387678668, lng: -76.9388376470264, name: "Punto 2" },
    { lat: -12.070608991014122, lng: -76.95630419292482, name: "Punto 3" },
    { lat: -12.082904897166493, lng: -76.97183954761194, name: "Punto 4" },
    { lat: -12.085998766388022, lng: -76.98890404446986, name: "Punto 5" },
    { lat: -12.085956802284308, lng: -76.993066832978, name: "Punto 6" },
    { lat: -12.087971071926034, lng: -77.00748638851051, name: "Punto 7" },
    { lat: -12.089565691234716, lng: -77.01808647883536, name: "Punto 8" },
    { lat: -12.091934426514024, lng: -77.03354173161398, name: "Punto 9" },
    { lat: -12.09264779950488, lng: -77.05289655199445, name: "Punto 10" },
    { lat: -12.0827443344306, lng: -77.06761651488843, name: "Punto 11" },
    { lat: -12.073260164263605, lng: -77.10001759965917, name: "Punto 12" },
    { lat: -12.069399255503972, lng: -77.09808640911417, name: "Punto 13" },
    {
      lat: -12.061227979866233,
      lng: -77.07924613734393,
      name: "Terminal - Punto 14",
    },
  ];

  const [markers, setMarkers] = useState(initialMarkers);
  const [selectedMarker, setSelectedMarker] = useState(null); // Estado para el marcador seleccionado

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCm1JiNWW9Og1iPjIYPpvCRDArXeGsnUEI", // Asegúrate de tener la clave en .env
  });

  // Cargar coordenadas del localStorage al montar el componente
  useEffect(() => {
    const savedMarkers =
      JSON.parse(localStorage.getItem("markers")) || initialMarkers;
    setMarkers(savedMarkers);
  }, []);

  // Guardar coordenadas en el localStorage cuando se actualicen los marcadores
  useEffect(() => {
    localStorage.setItem("markers", JSON.stringify(markers));
  }, [markers]);

  // Manejar el clic en el marcador
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  // Definir la ruta utilizando las coordenadas de los marcadores
  const path = markers.map((marker) => ({ lat: marker.lat, lng: marker.lng }));

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={{ lat: -12.046374, lng: -77.042793 }} // Centro en Lima, Perú
      zoom={10}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker}
          onClick={() => handleMarkerClick(marker)} // Manejar clic en el marcador
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={() => setSelectedMarker(null)} // Cerrar InfoWindow
        >
          <div>
            <h2>{selectedMarker.name}</h2>
          </div>
        </InfoWindow>
      )}
      <Polyline
        path={path} // Definir la ruta
        options={{
          strokeColor: "#FF0000", // Color rojo
          strokeOpacity: 1,
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapComponent;
