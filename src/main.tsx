import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Info from "./app/pages/Info.tsx";

import Tasks from "./app/pages/Tasks.tsx";
import ErrorElement from "./app/pages/ErrorElement.tsx";
import Login from "./app/pages/Login.tsx";
import Register from "./app/pages/Register.tsx";

import Admin from "./app/pages/Admin.tsx";
import Layout from "./widgets/layout/Layout.tsx";
import LayoutRegister from "./widgets/layout/LayoutRegister.tsx";
import JournalAudit from "./app/pages/JournalAudit.tsx";
import RequireAuth from "./helpers/RequireAuth.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
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
      {
        path: "/audit",
        element: <JournalAudit />,
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
