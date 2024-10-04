import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import { createUser } from "../api/UserService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState(""); // Nuevo estado para DNI
  const [address, setAddress] = useState(""); // Nuevo estado para dirección
  const [phone, setPhone] = useState(""); // Nuevo estado para teléfono
  const [showPassword, setShowPassword] = useState(false);
  const [activeLink, setActiveLink] = useState("/inicio");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        dni,
        username,
        password,
        email,
        address,
        phone,
        role: "CUSTOMER", // En realidad no deberia poder elegir el rol desde el front
      };

      const data = await createUser(user);

      Swal.fire({
        title: "Usuario Registrado!",
        text: `El usuario ${data.username} ha sido registrado exitosamente!`,
        icon: "success",
        confirmButtonText: "OK",
      });

      // Limpiar los inputs
      setUsername("");
      setEmail("");
      setPassword("");
      setDni("");
      setAddress("");
      setPhone("");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Se ha producido un error al registrar al usuario!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="font-principal w-full grid grid-cols-1 px-5 h-screen content-center md:grid-cols-2 gap-5 max-w-[1840px] mx-auto">
      {/* Imagen de la izquierda, oculta en pantallas pequeñas */}
      <div className="hidden md:block m-auto ">
        <img
          src="/src/assets/images/login_img.jpg"
          alt=""
          className="w-full max-w-[700px]"
        />
      </div>

      {/* Formulario de registro */}
      <div className="w-full mx-auto flex flex-col justify-center">
        <img
          src="/src/assets/images/logo_inicio.png"
          alt=""
          className="mx-auto w-20"
        />
        <h3 className="text-2xl font-bold text-center my-4">REGISTRO</h3>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {/* DNI */}
          <div>
            <label htmlFor="dni" className="block text-gray-700 my-3">
              DNI
            </label>
            <input
              type="text"
              id="dni"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu DNI"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />
          </div>

          {/* Usuario */}
          <div>
            <label htmlFor="username" className="block text-gray-700 my-3">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 my-3">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Dirección */}
          <div>
            <label htmlFor="address" className="block text-gray-700 my-3">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 my-3">
              Teléfono
            </label>
            <input
              type="text"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="md:col-span-1">
            <label htmlFor="password" className="block text-gray-700 my-3">
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
                required
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

          {/* Botón de registro */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 my-5 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
            >
              Registrarse
            </button>
          </div>
        </form>

        <div className="text-end mt-5">
          <Link
            to="/inicioSesion"
            className=""
            onClick={() => handleLinkClick("/inicioSesion")}
          >
            ¿Ya tienes una cuenta?{" "}
            <span className="font-bold pl-5 text-red-700">Inicia Sesión</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;