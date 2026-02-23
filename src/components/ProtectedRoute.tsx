import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const isEnrolled = (): boolean => {
  return (
    localStorage.getItem('cva_enrolled') === 'true' ||
    localStorage.getItem('isLoggedIn') === 'true'
  );
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isEnrolled()) {
    return <Navigate to="/certification" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
