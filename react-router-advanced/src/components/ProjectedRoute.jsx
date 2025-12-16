import { Navigate } from "react-router-dom";

const isAuthenticated = false; // simulate auth state

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
