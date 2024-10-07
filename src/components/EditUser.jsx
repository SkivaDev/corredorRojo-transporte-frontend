import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { userId } = useParams(); // Obtener el userId desde la URL
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    dni: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener los detalles del usuario por ID
    axios
      .get(`http://localhost:8080/api/user/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos del usuario:", error);
      });
  }, [userId]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/user/${userId}`, user)
      .then(() => {
        // Redirigir de nuevo a la lista de usuarios o al dashboard
        navigate("/dashboard/listar");
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
      });
  };

  return (
    <div className="p-8 min-h-screen flex items-center mt-16 sm:ml-64">
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <label>DNI:</label>
        <input
          type="text"
          name="dni"
          value={user.dni}
          onChange={handleChange}
        />
        <br />
        <label>Dirección:</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
        />
        <br />
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditUser;