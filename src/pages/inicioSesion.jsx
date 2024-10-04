import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeLink, setActiveLink] = useState("/inicio");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Redirigir al usuario a la página de login de OAuth
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=189821881491-h7jn2420lf2tsuu3u5794pnbvc8p3jk7.apps.googleusercontent.com&redirect_uri=http://localhost:5173/dashboard&response_type=token&scope=email`;
  };

  // Manejar el redireccionamiento después de la autenticación
  const handleRedirect = () => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.split("&")[0].split("=")[1];
      // Guardar el token en el almacenamiento local o en el estado
      localStorage.setItem("token", token);
      navigate("/dashboard"); // Redirigir a la página de destino
    }
  };

  React.useEffect(() => {
    handleRedirect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirigir al usuario basado en la URL proporcionada por el backend
        setTimeout(() => {
          localStorage.setItem("username", data.username);
          localStorage.setItem("id", data.id);
          localStorage.setItem("rol", data.rol);
          navigate(data.redirectUrl);
        }, 1500);
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorData.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo conectar con el servidor",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="font-principal w-full grid grid-cols-1 px-5 h-screen content-center md:grid-cols-2 max-w-[1840px] mx-auto">
      <div className="hidden md:block m-auto">
        <img
          src="/src/assets/images/login_img.jpg"
          alt=""
          className="w-full max-w-[700px]"
        />
      </div>
      <div className="w-[80%] mx-auto">
        <Link
          to="/inicio"
          className={activeLink === "/inicio"}
          onClick={() => handleLinkClick("/inicio")}
        >
          <img
            src="/src/assets/images/logo_inicio.png"
            alt=""
            width={150}
            className="mx-auto"
          />
        </Link>
        <h3 className="text-2xl font-bold text-center my-6">INICIO SESIÓN</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 pb-5">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 pb-5">
              Contraseña
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-3 text-gray-500"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <p onClick={handleLogin}>Iniciar sesión con Google</p>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>

        <a href="" className="flex justify-end py-2 my-5">
          <Link
            to="/registro"
            className={activeLink === "/registro"}
            onClick={() => handleLinkClick("/registro")}
          >
            ¿Aún no tienes una cuenta?{" "}
            <span className="font-bold pl-5 text-red-700">Registrate</span>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Login;