import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "error-page";
import Root from "routers/root";
import Home from "routers/Home";
import DashBoard from "routers/DashBoard";
import User from "components/dashboard/User/User";
import Skills from "components/dashboard/Skills/Skills";
import Works from "components/dashboard/works/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
          { path: "/dashboard/user", element: <User /> },
          { path: "/dashboard/skills", element: <Skills /> },
          { path: "/dashboard/works", element: <Works /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
