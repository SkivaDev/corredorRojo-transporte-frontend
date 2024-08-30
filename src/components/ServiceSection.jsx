
const ServiceSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-[1140px] w-full mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Nuestros servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["CARGA LIGERA", "CARGA REFRIGERADA", "CARGA EXPRESS"].map(
            (service, index) => (
              <div key={index}>{/* Card component */}
                <div className="p-6"> {/* CardContent component */}
                  <img
                    src="/src/assets/images/metro-picture.jpg"
                    alt={service}
                    width={300}
                    height={200}
                    className="mb-4 rounded"
                  />
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
