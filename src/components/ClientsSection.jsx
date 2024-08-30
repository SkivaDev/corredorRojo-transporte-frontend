const ClientsSection = () => {

    const clients = [
    {
        name: "Tottus",
        logo: "/src/assets/images/tottus.png",
    }, {
        name: "ONPE",
        logo: "/src/assets/images/onpe.png",
    }, {
        name: "Sodimac",
        logo: "/src/assets/images/sodimac.png",
    }, {
        name: "Minedu",
        logo: "/src/assets/images/minedu.png",
    } , {
        name: "Saga Falabella",
        logo: "/src/assets/images/saga.png",
    }
    ]

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-[1140px] w-full mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Ellos confían en nosotros
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
