import React, { useState } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [activeLink, setActiveLink] = useState("/inicio");

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Datos a enviar al backend
        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Petición al backend
        fetch("http://localhost:8080/api/usuarios/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar alerta con SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Usuario agregado',
                text: 'El usuario ha sido registrado con éxito',
                confirmButtonText: 'Aceptar'
            });

            // Limpiar el formulario
            setUsername("");
            setEmail("");
            setPassword("");
        })
        .catch(error => {
            console.error("Error al registrar usuario:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al registrar el usuario',
                confirmButtonText: 'Aceptar'
            });
        });
    };

    return (
        
        <div className="font-principal w-full grid grid-cols-1 px-5 h-screen content-center min-[900px]:grid-cols-2">
            <div className="hidden min-[900px]:block m-auto">
                <img src="/src/assets/images/login_img.jpg" alt="" width={600} className="" />
            </div>
            <div className="w-[90%] mx-auto">
                <img src="/src/assets/images/logo_inicio.png" alt="" width={100} className="mx-auto" />
                <h3 className="text-2xl font-bold text-center my-2">REGISTRO</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 pb-5">Usuario</label>
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
                    <div>
                        <label htmlFor="email" className="block text-gray-700 pb-5">Correo electrónico</label>
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
                    <div>
                        <label htmlFor="password" className="block text-gray-700 pb-5">Contraseña</label>
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
                    <a href="" className="flex justify-end py-2"><Link
                        to="/inicioSesion"
                        className={activeLink === "/inicioSesion"}
                        onClick={() => handleLinkClick("/inicioSesion")}
                    > ¿Ya tienes una cuenta? <span className="font-bold pl-5 text-red-700">Inicia Sesion</span>
                    </Link></a>
                    <button 
                        type="submit"
                        className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;