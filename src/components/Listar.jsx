import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Obtener la lista de usuarios desde el backend
    axios
      .get("http://localhost:8080/api/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los usuarios:", error);
      });
  }, []);

  // Función para eliminar un usuario
  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:8080/api/user/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId)); // Actualizar el estado
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario:", error);
      });
  };

  // Función para manejar la edición del usuario (redirigir a un formulario de edición
  const editUser = (userId) => {
    window.location.href = `/dashboard/edit/${userId}`; // Redirigir a la página de edición
  };

  return (
    <div className="p-8 min-h-screen flex items-center mt-16 sm:ml-64">
      <h2>Lista de Usuarios</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
            <th>Email</th>
            <th>Contraseña</th>
            <th>DNI</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.dni}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => editUser(user.id)}>Editar</button>
                  <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay usuarios registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;