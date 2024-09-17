import { links } from "./Constantes";
import LinkItem from "./LinkItem";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SileBarDashboard = ({ isSidebarOpen }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Sesión culminada",
      text: "Has cerrado sesión exitosamente",
      icon: "success",
    }).then(() => {
      navigate("/inicioSesion"); // Redirige a la página de inicio de sesión
    });
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li className="text-black dark:text-white">
            <button onClick={handleLogout}>Cerrar Sesion</button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SileBarDashboard;
