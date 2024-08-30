const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1140px] w-full mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="/src/assets/images/logo.png"
          alt="Metropolitano Logo"
          width={200}
          height={50}
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                INICIO
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                NOSOTROS
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-green-500 hover:bg-green-600 text-white px-[16px] py-[10px] rounded-md">
          COTIZAR
        </button>
      </div>
    </header>
  );
};

export default Header;
