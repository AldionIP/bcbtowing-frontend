import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Kiri: Logo & Sosial Media */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <img src="/images/puskesmas.png" alt="Logo" className="w-6 h-6" />
            <h2 className="text-lg font-bold">BCB TOWING</h2>
          </div>
          <p className="text-sm text-gray-300 mb-4">
          BCB Towing adalah jasa derek kendaraan terbaik yang tersebar di seluruh Indonesia. 
          Kami cepat, murah dan profesional. Kami adalah layanan penarikan terbaik.
          </p>
          <div className="flex space-x-4 text-xl text-gray-300">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-bold mb-3  ">NAVIGASI</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#sambutan" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#tentang" className="hover:text-white">
                Pemesanan
              </a>
            </li>
            <li>
              <a href="#visi" className="hover:text-white">
                Cek Pemesanan
              </a>
            </li>
            <li>
              <a href="#pelayanan" className="hover:text-white">
                Bengkel
              </a>
            </li>
            <li>
              <a href="#galeri" className="hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-white">
                Legalitas
              </a>
            </li>
          </ul>
        </div>

        {/* Jam Operasional */}
        <div>
          <h3 className="font-bold mb-3">JAM OPERASIONAL</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <FaClock /> Senin - Sabtu
            </li>
            <li>08.00 - 14.00 WIB</li>
            <li className="flex items-center gap-2">❌ Minggu Libur</li>
            <li>Tutup</li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-bold mb-3">KONTAK</h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-3xl text-white" />
              PHP3+X7C, Sukabumi, Kec. Buay Bahuga, Kabupaten Way Kanan, Lampung
              32361
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg text-white" />
              (0266) 6253204
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg text-white" />
              info@bcbtowing.co.id
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-t border-teal-900" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-gray-400 mb-3" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2025 BCB TOWING - Jasa Mobil Derek Terbaik. All rights reserved.</p>
          <p>
            Developed by{" "}
            <span className="text-white font-semibold">
              Geels
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
