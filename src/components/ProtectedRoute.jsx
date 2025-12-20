import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * ProtectedRoute - Componente para proteger rutas privadas
 * 
 * Si el usuario NO está autenticado, redirige al login.
 * Si está autenticado, muestra el componente hijo.
 * 
 * Uso:
 * <Route path="/dashboard" element={
 *   <ProtectedRoute>
 *     <Dashboard />
 *   </ProtectedRoute>
 * } />
 * 
 * Con rol específico:
 * <Route path="/admin" element={
 *   <ProtectedRoute requiredRole="ADMIN">
 *     <AdminPanel />
 *   </ProtectedRoute>
 * } />
 */
const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Mostrar loading mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  // Si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return <Navigate to="/inicioSesion" replace />;
  }

  // Si requiere un rol específico, verificar
  if (requiredRole && user?.role !== requiredRole) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Acceso Denegado</h1>
          <p>No tienes permisos para acceder a esta página.</p>
        </div>
      </div>
    );
  }

  // Usuario autenticado y con permisos correctos
  return children;
};

export default ProtectedRoute;
