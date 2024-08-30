const FeaturesSection = () => {
  return (
    <section className="max-w-[1140px] w-full mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        PORQUE NOS IMPORTA TU SALUD
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <p className="text-gray-600 mb-4">
            En Roque Transport implementamos el protocolo sanitario para
            prevenir el COVID-19 y así velar por la seguridad y salud de
            nuestros colaboradores y clientes.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Uso de mascarilla obligatorio</li>
            <li>
              Constante lavado y desinfección de manos usando jabón y
              desinfectante en gel por no menos de 20 segundos
            </li>
            <li>Distanciamiento mínimo de 1 metro con las demás personas</li>
            <li>
              Desinfección de vehículos (limpieza diaria del chasis interior y
              exterior, llantas y superficies como volante, palanca de cambios,
              tablero, etc) por cada viaje
            </li>
            <li>Desinfección de objetos de uso común y áreas superficies</li>
            <li>Ventilación adecuada en las unidades</li>
            <li>Control de temperatura a todos nuestro personal</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="/src/assets/images/covid-picture.jpg"
            alt="COVID-19 Prevention"
            width={400}
            height={300}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
