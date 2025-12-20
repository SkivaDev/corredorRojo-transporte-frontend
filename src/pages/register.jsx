import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEye, 
  faEyeSlash, 
  faUser, 
  faEnvelope, 
  faLock, 
  faIdCard, 
  faPhone, 
  faMapMarkerAlt 
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Register - Componente de Registro Optimizado
 * 
 * Incluye validaciones específicas para el contexto local (Perú):
 * - DNI: 8 dígitos numéricos.
 * - Teléfono: 9 dígitos numéricos (celular).
 */
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dni: "",
    address: "",
    phone: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validaciones en tiempo real para campos numéricos
    if (name === "dni" || name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (name === "dni" && onlyNums.length > 8) return;
      if (name === "phone" && onlyNums.length > 9) return;
      setFormData({ ...formData, [name]: onlyNums });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validaciones de formato
  const validateForm = () => {
    const { username, email, password, dni, phone } = formData;

    if (!username || !email || !password || !dni || !phone) {
      Swal.fire("Atención", "Todos los campos con (*) son obligatorios", "warning");
      return false;
    }

    if (dni.length !== 8) {
      Swal.fire("DNI Inválido", "El DNI debe tener exactamente 8 números", "error");
      return false;
    }

    if (phone.length !== 9) {
      Swal.fire("Teléfono Inválido", "El teléfono debe tener exactamente 9 números", "error");
      return false;
    }

    if (password.length < 6) {
      Swal.fire("Seguridad", "La contraseña debe tener al menos 6 caracteres", "warning");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire("Correo Inválido", "Por favor ingresa un correo electrónico válido", "error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await register(formData);

      Swal.fire({
        title: "¡Bienvenido a bordo!",
        text: `Usuario ${response.username} registrado exitosamente.`,
        icon: "success",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);

    } catch (error) {
      console.error("Error en registro:", error);
      const errorMessage = error.response?.data?.message || "Ocurrió un error al procesar tu registro. Por favor, intenta de nuevo.";
      
      Swal.fire({
        title: "Registro fallido",
        text: errorMessage,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-principal w-full min-h-screen grid grid-cols-1 px-5 content-center md:grid-cols-2 gap-10 max-w-[1840px] mx-auto bg-white py-10">
      {/* Columna Visual */}
      <div className="hidden md:flex justify-center items-center">
        <div className="relative w-full max-w-[600px]">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <img
            src="/src/assets/images/login_img.jpg"
            alt="Corredor Rojo"
            className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
          />
          
          <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Viaja seguro, viaja rápido</h4>
            <p className="text-sm text-gray-600">Únete a la red de transporte masivo más grande de la ciudad y disfruta de beneficios exclusivos.</p>
          </div>
        </div>
      </div>

      {/* Columna Formulario */}
      <div className="w-full max-w-xl mx-auto flex flex-col justify-center">
        <div className="text-center mb-8">
          <Link to="/inicio" className="transition-transform hover:scale-110 inline-block">
            <img
              src="/src/assets/images/logo_inicio.png"
              alt="Corredor Rojo Logo"
              className="mx-auto h-20 w-auto"
            />
          </Link>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-4">Crea tu cuenta</h3>
          <p className="text-gray-500 mt-1">Completa tus datos para empezar el viaje</p>
        </div>

        <form className="space-y-4 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* DNI */}
            <div className="space-y-1">
              <label htmlFor="dni" className="text-sm font-semibold text-gray-700 ml-1">
                DNI*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faIdCard} className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  name="dni"
                  id="dni"
                  className="pl-9 w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="8 dígitos"
                  value={formData.dni}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Usuario */}
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm font-semibold text-gray-700 ml-1">
                Nombre de usuario*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faUser} className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="pl-9 w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Ej: jorge22"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1 md:col-span-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">
                Correo electrónico*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-sm" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="pl-9 w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="ejemplo@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Teléfono */}
            <div className="space-y-1">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">
                Teléfono*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faPhone} className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="pl-9 w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="9XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Dirección */}
            <div className="space-y-1">
              <label htmlFor="address" className="text-sm font-semibold text-gray-700 ml-1">
                Dirección
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="pl-9 w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Av. Las Camelias 123"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Contraseña */}
            <div className="space-y-1 md:col-span-2">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700 ml-1">
                Contraseña*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-400 text-sm" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="pl-9 pr-10 w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-red-500 transition-colors"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-6 py-3 px-4 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transform transition-all duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:-translate-y-1 hover:shadow-xl active:scale-95'}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando datos...
              </span>
            ) : "Registrarme ahora"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 font-medium">
          ¿Ya eres parte de nosotros?{" "}
          <Link to="/inicioSesion" className="text-red-600 hover:text-red-700 font-bold underline decoration-2 underline-offset-4 decoration-red-200 hover:decoration-red-400 transition-all">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
