import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoutes() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="login" />;
}
