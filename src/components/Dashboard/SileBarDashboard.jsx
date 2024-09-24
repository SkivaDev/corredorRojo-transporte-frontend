import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCreditCard,
  faMap,
  faBagShopping,
  faClockRotateLeft,
  faRightToBracket,
  faHouse,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const SileBarDashboard = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Desea cerrar sesión?",
      text: "Le redirijirá a la página de inicio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión Culminada",
          text: "Ha cerrado la sesión exitosamente",
          icon: "success",
        }).then(() => {
          navigate("/inicioSesion"); // Redirige a la página de inicio de sesión
        });
      }
    });
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-8 font-medium">
          <li className="text-black dark:text-white hover:bg-red-500 hover:text-white  hover:rounded-md pl-5 py-1">
            <FontAwesomeIcon icon={faHouse} className="pr-5" />
            <button
              onClick={() => {
                toggleSidebar();
                navigate("/dashboard");
              }}
            >
              Principal
            </button>
          </li>

          <li className="text-black dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-slate-500 hover:rounded-md pl-5 py-1">
            <FontAwesomeIcon icon={faAddressCard} className="pr-5" />
            <button>Solicitar tarjeta</button>
          </li>

          <li className="text-black dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-slate-500 hover:rounded-md pl-5 py-1">
            <FontAwesomeIcon icon={faCreditCard} className="pr-5" />
            <button
              onClick={() => {
                toggleSidebar();
                navigate("/dashboard/recarga");
              }}
            >
              Recargar tarjeta
            </button>
          </li>

          <li className="text-black dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-slate-500 hover:rounded-md pl-5 py-1">
            <FontAwesomeIcon icon={faMap} className="pr-5" />
            <button
              onClick={() => {
                toggleSidebar();
                navigate("/dashboard/tarjeta");
              }}
            >
              Ver Paraderos
            </button>
          </li>

          <li className="text-black dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-slate-500 hover:rounded-md pl-5 py-1">
            <FontAwesomeIcon icon={faBagShopping} className="pr-5" />
            <button
              onClick={() => {
                toggleSidebar();
                navigate("/dashboard/ecommerce");
              }}
            >
              Canjear puntos
            </button>
          </li>

          <li className="text-black dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-slate-500 hover:rounded-md pl-5 py-1">
            <FontAwesomeIcon icon={faClockRotateLeft} className="pr-5" />
            <button>Historial de compras</button>
          </li>

          <li className="text-black dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-slate-500 hover:rounded-md pl-5 py-1">
            <FontAwesomeIcon icon={faGear} className="pr-5" />
            <button>Configuración</button>
          </li>

          <li className="text-white absolute bottom-8 rounded-md hover:rounded-md bg-red-500 dark:bg-slate-500 pl-5 py-1 w-[90%]">
            <FontAwesomeIcon
              icon={faRightToBracket}
              rotation={180}
              className="pl-5"
            />
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SileBarDashboard;
