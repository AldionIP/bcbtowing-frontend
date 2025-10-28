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
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from './pages/DashboardPage.jsx';
import PemesananPage from './pages/PemesananPage.jsx';
import BengkelPage from './pages/BengkelPage.jsx'; 
import About from "./pages/About.jsx";
import Legalitas from "./pages/Legalitas.jsx";

// Inisialisasi AOS
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-in-out",
  offset: 100,
});

// Daftarkan semua rute (halaman) Anda di sini
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pemesanan",
    element: <PemesananPage />,
    errorElement: <ErrorPage />,
  },
  { // <-- INI YANG LUPA DITAMBAHKAN
    path: "/bengkel",
    element: <BengkelPage />,
    errorElement: <ErrorPage />,
  },
  {
  path: "/tentang-kami",
  element: <About />,
  errorElement: <ErrorPage />,
},
{
  path: "/legalitas",
  element: <Legalitas />,
  errorElement: <ErrorPage />,
},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);