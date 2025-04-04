import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Info from "../pages/Info.tsx";
import Layout from "../../widgets/layout/Layout.tsx";
import Tasks from "../pages/Tasks.tsx";
import ErrorElement from "../pages/ErrorElement.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import LayoutRegister from "../../widgets/layout/LayoutRegister.tsx";
import Admin from "../pages/Admin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Info />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LayoutRegister />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorElement />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
