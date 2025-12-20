import axiosClient from './axiosClient';

/**
 * AuthService - Servicio para autenticación
 * 
 * Maneja las llamadas al backend para:
 * - Login
 * - Registro
 * - Validación de token
 */

/**
 * Login de usuario
 * 
 * @param {Object} credentials - { email, password }
 * @returns {Promise<Object>} - { token, userId, username, email, role }
 */
export const login = async (credentials) => {
  const response = await axiosClient.post('/auth/login', credentials);
  return response;
};

/**
 * Registro de nuevo usuario
 * 
 * @param {Object} userData - { dni, username, email, password, phone, address }
 * @returns {Promise<Object>} - { token, userId, username, email, role }
 */
export const register = async (userData) => {
  const response = await axiosClient.post('/auth/register', userData);
  return response;
};

/**
 * Validar si el token actual es válido
 * 
 * @returns {Promise<boolean>}
 */
export const validateToken = async () => {
  try {
    await axiosClient.get('/auth/me');
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  login,
  register,
  validateToken
};
