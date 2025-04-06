import { ReactNode } from "react";
import { Navigate } from "react-router";

export default function RequireAuth({ children }: { children: ReactNode }) {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    return <Navigate to={"/auth/login"} replace />;
  } else {
    
    return children;
  }
}
