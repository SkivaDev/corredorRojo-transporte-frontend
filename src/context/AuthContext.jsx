import React, { createContext, useState, useEffect } from 'react';
import { login as loginService, register as registerService } from '../api/AuthService';

/**
 * AuthContext - Contexto de autenticación
 * 
 * Provee el estado de autenticación a toda la aplicación:
 * - user: Datos del usuario autenticado
 * - token: Token JWT
 * - isAuthenticated: Boolean indicando si hay sesión activa
 * - isLoading: Boolean indicando si está cargando
 * - login: Función para iniciar sesión
 * - register: Función para registrarse
 * - logout: Función para cerrar sesión
 */
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Al montar el componente, verificar si hay sesión guardada
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }

    setIsLoading(false);
  }, []);

  /**
   * Login de usuario
   * 
   * @param {Object} credentials - { email, password }
   * @returns {Promise<Object>} - Datos del usuario
   */
  const login = async (credentials) => {
    try {
      const response = await loginService(credentials);
      
      // Guardar token y usuario
      const userData = {
        userId: response.userId,
        username: response.username,
        email: response.email,
        role: response.role
      };

      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(userData));

      setToken(response.token);
      setUser(userData);

      return response;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Registro de nuevo usuario
   * 
   * @param {Object} userData - { dni, username, email, password, phone, address }
   * @returns {Promise<Object>} - Datos del usuario
   */
  const register = async (userData) => {
    try {
      const response = await registerService(userData);
      
      // Guardar token y usuario
      const userDataToStore = {
        userId: response.userId,
        username: response.username,
        email: response.email,
        role: response.role
      };

      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(userDataToStore));

      setToken(response.token);
      setUser(userDataToStore);

      return response;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Logout - Cerrar sesión
   */
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    isLoading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
