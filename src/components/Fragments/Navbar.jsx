// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import Button from "../Elements/Button/Button";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-b from-black to-transparent backdrop-blur-sm shadow-lg"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo & Judul (dibesarkan) */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/puskesmas.png"
              alt="Logo BCB TOWING"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-white">
              BCB TOWING
            </h1>
          </div>

          {/* Ikon Telepon + Nomor HP (dibesarkan juga) */}
          <div className="hidden md:flex items-center space-x-3 text-white">
            <FaPhoneAlt className="text-orange-500 text-xl" />
            <span className="font-semibold text-lg">0811721700</span>
          </div>

          {/* Menu Desktop (font lebih besar, spacing lebih lega) */}
          <nav className="hidden md:flex space-x-8 text-white text-lg">
            <a href="#sambutan" className="hover:text-teal-400 transition">HOME</a>
            <a href="#tentang-kami" className="hover:text-teal-400 transition">PEMESANAN</a>
            <a href="#visi-misi" className="hover:text-teal-400 transition">BENGKEL</a>
            <a href="#pelayanan" className="hover:text-teal-400 transition">PERUSAHAAN</a>
            <a href="#galeri" className="hover:text-teal-400 transition">GALERI</a>
            <a href="#kontak" className="hover:text-teal-400 transition">KONTAK</a>
          </nav>

          {/* Tombol Aksi Desktop (dibesarkan) */}
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