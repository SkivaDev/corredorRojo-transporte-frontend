
const ServiceSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1140px] w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          NUESTROS SERVICIOS
        </h2>
        <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 gap-8">
          <img src="/src/assets/images/201.png" alt="Service 1" width={300} height={300} className="rounded-3xl" />
          <img src="/src/assets/images/204.png" alt="Service 4" width={300} height={300} className="rounded-3xl" />
          <img src="/src/assets/images/206.png" alt="Service 2" width={300} height={300} className="rounded-3xl" />
          <img src="/src/assets/images/209.png" alt="Service 3" width={300} height={300} className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
