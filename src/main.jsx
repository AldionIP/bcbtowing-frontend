import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import ErrorPage from "./pages/404erorpage.jsx";
import LandingPage from "./pages/landingpage.jsx";

// Inisialisasi AOS
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-in-out",
  offset: 100,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
