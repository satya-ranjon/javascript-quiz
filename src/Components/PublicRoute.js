import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PubliceRoute() {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}
