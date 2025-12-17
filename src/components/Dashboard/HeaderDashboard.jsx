import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCoins } from "@fortawesome/free-solid-svg-icons";

const HeaderDashboard = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <img src="/src/assets/images/logo.png" width={150} />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm font-medium dark:text-white">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>

            {/* Enlace para los puntos */}
            <a href="#" className="text-sm font-medium dark:text-white">
              <FontAwesomeIcon icon={faCoins} />
            </a>

            {/* Botón para cambiar el modo oscuro */}
            <button
              className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDashboard;
