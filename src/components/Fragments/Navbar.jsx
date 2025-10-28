import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import Button from "../Elements/Button/Button";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Fungsi scroll ke section di halaman Home
  const scrollToSection = (section) => {
    if (location.pathname !== "/") {
      // Kalau belum di halaman home, arahkan dulu ke home
      window.location.href = `/#${section}`;
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-gradient-to-b from-black to-transparent backdrop-blur-sm shadow-lg"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo & Judul */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="/images/puskesmas.png"
              alt="Logo BCB TOWING"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-white">BCB TOWING</h1>
          </div>

          {/* Nomor Telepon */}
          <div className="hidden md:flex items-center space-x-3 text-white">
            <FaPhoneAlt className="text-orange-500 text-xl" />
            <span className="font-semibold text-lg">0811721700</span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 text-white text-lg relative">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-teal-400 transition"
            >
              HOME
            </button>

            <Link to="/pemesanan" className="hover:text-teal-400 transition">
              PEMESANAN
            </Link>

            <Link to="/bengkel" className="hover:text-teal-400 transition">
              BENGKEL
            </Link>

            {/* Dropdown PERUSAHAAN */}
            <div className="relative group">
              <button className="hover:text-orange-400 flex items-center transition">
                PERUSAHAAN
                <svg
                  className="ml-1 w-4 h-4 text-orange-400 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-200">
                <Link
                  to="/tentang-kami"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-t-md"
                >
                  Tentang Kami
                </Link>
                <Link
                  to="/legalitas"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-b-md"
                >
                  Legalitas
                </Link>
              </div>
            </div>

            {/* Tombol Scroll ke Section */}
            <button
              onClick={() => scrollToSection("galeri")}
              className="hover:text-teal-400 transition"
            >
              GALERI
            </button>

            <button
              onClick={() => scrollToSection("kontak")}
              className="hover:text-teal-400 transition"
            >
              KONTAK
            </button>
          </nav>

          {/* Tombol Login */}
          <div className="hidden md:flex space-x-3">
            <Link to="/login">
              <Button variant="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full font-semibold text-base">
                Login
              </Button>
            </Link>
          </div>

          {/* Tombol Sidebar (Mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Sidebar Mobile */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
