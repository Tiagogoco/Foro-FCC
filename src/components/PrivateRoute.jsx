// components/RutaPrivada.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" replace />;
};
