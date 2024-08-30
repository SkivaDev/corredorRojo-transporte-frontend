const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-[1140px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">BOLETÍN</h3>
            <p className="text-sm mb-2">
              Suscríbete a nuestro boletín y entérate de nuestras promociones y
              nuestros últimos proyectos.
            </p>
            <form className="flex rounded-md overflow-hidden">
              <input
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 "
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600">
                →
              </button>
            </form>
          </div>
          <div>
            <h3 className="font-bold mb-2">ENLACES DE INTERÉS</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">NUESTROS SERVICIOS</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Transporte de carga pesada
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Transporte de carga ligera
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Transporte de carga refrigerada
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Transporte de carga express
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">CONTÁCTANOS</h3>
            <p className="text-sm">+51 946207353</p>
            <p className="text-sm">gerencia@roquetransport.com.pe</p>
            <div className="mt-2">
              <a href="#" className="text-2xl mr-2">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
