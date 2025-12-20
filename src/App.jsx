import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Páginas públicas
import Inicio from "./pages/index";
import Nosotros from "./pages/nosotros";
import Blog from "./pages/blog";
import Contacto from "./pages/contacto";
import InicioSesion from "./pages/inicioSesion";
import Registro from "./pages/register";

// Páginas privadas (requieren autenticación)
import Dashboard from "./pages/dashboard";
import Usuario from "./pages/usuario";
import Recarga from "./pages/recarga";
import Tarjeta from "./pages/Usuario/tarjeta";
import Codigo from "./pages/Usuario/codigo";
import Agente from "./pages/Usuario/agente";
import Map from "./pages/Usuario/map";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import Cart from "./components/Ecommerce/Cart";
import CheckOut from "./components/Ecommerce/CheckOut";
import Historial from "./pages/Historial/historial";
import ModalComponent from "./components/ModalComponent";
import EditarUser from "./components/EditUser";
import UserProfile from "./pages/Usuario/Userprofile";

/**
 * App - Componente principal
 * 
 * RUTAS PÚBLICAS (sin autenticación):
 * - /, /inicio, /nosotros, /blog, /contacto
 * - /inicioSesion, /registro
 * 
 * RUTAS PROTEGIDAS (requieren autenticación):
 * - /dashboard y todas sus subrutas
 */
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ===== RUTAS PÚBLICAS ===== */}
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/inicioSesion" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />

          {/* ===== RUTAS PROTEGIDAS ===== */}
          <Route path="/usuario" element={
            <ProtectedRoute>
              <Usuario />
            </ProtectedRoute>
          } />

          <Route path="/codigo" element={
            <ProtectedRoute>
              <Codigo />
            </ProtectedRoute>
          } />

          <Route path="/modal" element={
            <ProtectedRoute>
              <ModalComponent />
            </ProtectedRoute>
          } />

          {/* Dashboard y sus subrutas */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
            <Route index element={<Usuario />} />
            <Route path="recarga" element={<Recarga />} />
            <Route path="tarjeta" element={<Tarjeta />} />
            <Route path="agente" element={<Agente />} />
            <Route path="ecommerce" element={<Ecommerce />} />
            <Route path="ecommerce/cart" element={<Cart />} />
            <Route path="ecommerce/cart/checkout" element={<CheckOut />} />
            <Route path="historial" element={<Historial />} />
            <Route path="map" element={<Map />} />
            <Route path="edit/:userId" element={<EditarUser />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
