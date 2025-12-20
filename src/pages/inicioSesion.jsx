import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../hooks/useAuth";

/**
 * Login - Página de inicio de sesión optimizada
 * 
 * Implementa validaciones de cliente y manejo de errores de servidor.
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  // Validación de formato de email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones de cliente
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos obligatorios.",
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Por favor, ingresa un correo electrónico con formato válido.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await login({ email, password });

      Swal.fire({
        icon: "success",
        title: "¡Bienvenido de nuevo!",
        text: response.message || "Inicio de sesión exitoso.",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });

      // Redirigir según el rol después de un breve delay para que vean el success
      setTimeout(() => {
        if (response.role === "ADMIN") {
          navigate("/inicio");
        } else {
          navigate("/dashboard");
        }
      }, 2000);

    } catch (error) {
      console.error("Error en login:", error);
      
      const errorMessage = error.response?.data?.message || "Credenciales incorrectas. Inténtalo de nuevo.";
      
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="font-principal w-full min-h-screen grid grid-cols-1 px-5 content-center md:grid-cols-2 max-w-[1840px] mx-auto bg-white">
      <div className="hidden md:flex justify-center items-center p-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/src/assets/images/login_img.jpg"
            alt="Corredor Rojo Login"
            className="relative rounded-2xl shadow-2xl w-full max-w-[650px] object-cover"
          />
        </div>
      </div>
      
      <div className="w-full md:max-w-md mx-auto flex flex-col justify-center py-12">
        <div className="text-center mb-10">
          <Link to="/inicio" className="inline-block transform hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/images/logo_inicio.png"
              alt="Corredor Rojo Logo"
              className="mx-auto h-20 w-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
            Bienvenido al Corredor Rojo
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Inicia sesión para gestionar tus tarjetas y beneficios
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="pl-10 block w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  className="pl-10 pr-10 block w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <Link to="#" className="font-medium text-red-600 hover:text-red-500">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 shadow-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-xl'}`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verificando...
              </span>
            ) : "Entrar a mi cuenta"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          ¿No eres miembro aún?{" "}
          <Link to="/registro" className="font-bold text-red-600 hover:text-red-500 underline decoration-2 underline-offset-4 decoration-red-200 hover:decoration-red-400 transition-all duration-300">
            Regístrate ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
