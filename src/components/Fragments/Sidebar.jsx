// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaUser,
  FaQrcode,
  FaBullhorn,
  FaInfoCircle,
  FaHeart,
  FaHospital,
  FaImage,
} from "react-icons/fa";
import Button from "../Elements/Button/Button";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="font-bold text-lg">Menu Navigasi</h2>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-red-500"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Isi Navigasi Sidebar */}
        <nav className="flex flex-col p-4 space-y-5 text-gray-700 overflow-y-auto h-[calc(100%-120px)]">
          <a
            href="#sambutan"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-teal-600"
          >
            <FaBullhorn /> Kata Sambutan
          </a>
          <a
            href="#tentang-kami"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-teal-600"
          >
            <FaInfoCircle /> Tentang Kami
          </a>
          <a
            href="#visi-misi"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-teal-600"
          >
            <FaHeart /> Visi dan Misi
          </a>
          <a
            href="#pelayanan"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-teal-600"
          >
            <FaHospital /> Pelayanan
          </a>
          <a
            href="#galeri"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-teal-600"
          >
            <FaImage /> Galeri
          </a>

          <hr className="border-gray-300" />

          <Link to="/login" onClick={onClose}>
            <Button variant="bg-teal-500 hover:bg-teal-600 text-white w-full py-2 rounded shadow">
              <div className="flex justify-center items-center gap-2">
                <FaUser /> Login
              </div>
            </Button>
          </Link>

          <Link to="/qr" onClick={onClose}>
            <Button variant="bg-teal-500 hover:bg-teal-600 text-white w-full py-2 rounded shadow">
              <div className="flex justify-center items-center gap-2">
                <FaQrcode /> Kode QR
              </div>
            </Button>
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
