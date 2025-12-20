import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

/**
 * useAuth - Hook personalizado para acceder al contexto de autenticación
 * 
 * Uso:
 * const { user, isAuthenticated, login, logout } = useAuth();
 * 
 * @returns {Object} - Contexto de autenticación
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }

  return context;
};

export default useAuth;
