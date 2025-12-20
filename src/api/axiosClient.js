import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

/**
 * axiosClient - Cliente HTTP configurado con interceptores
 * 
 * INTERCEPTOR DE REQUEST:
 * - Agrega automáticamente el token JWT en el header Authorization
 * - Lee el token de localStorage
 * 
 * INTERCEPTOR DE RESPONSE:
 * - Extrae automáticamente response.data
 * - Maneja errores 401 (token inválido/expirado)
 */
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// ===== INTERCEPTOR DE REQUEST =====
// Se ejecuta ANTES de enviar cada request
axiosClient.interceptors.request.use(
  async (config) => {
    // Obtener el token de localStorage
    const token = localStorage.getItem('token');
    
    // Si existe token, agregarlo al header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ===== INTERCEPTOR DE RESPONSE =====
// Se ejecuta DESPUÉS de recibir cada response
axiosClient.interceptors.response.use(
  (response) => {
    // Extraer automáticamente response.data
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Manejar errores de autenticación
    if (error.response?.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirigir al login si no estamos ya ahí
      if (!window.location.pathname.includes('/inicioSesion')) {
        window.location.href = '/inicioSesion';
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosClient;