import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Dashboard/HeaderDashboard";
import SideBar from "../components/Dashboard/SileBarDashboard";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex">
        <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Contenedor dinámico */}
        <div className="flex-grow">
          <Outlet isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
