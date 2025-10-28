// src/components/Fragments/pemesanan/Step1_Rute.jsx
import React from "react";

function Step1_Rute({ formData, handleChange }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-2xl shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-xs uppercase font-semibold text-gray-500">Langkah 1</h3>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Rute Pengiriman</h2>
          <div className="w-12 h-1 bg-orange-500 rounded"></div>
        </div>
        <div className="hidden md:block">
          <img
            src="/images/map-pin-icon.png"
            alt="Map Pin"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daerah Asal */}
        <div>
          <label
            htmlFor="daerah_asal"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Daerah Asal (Penjemputan)
          </label>
          <select
            id="daerah_asal"
            value={formData.daerah_asal}
            onChange={handleChange("daerah_asal")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          >
            <option value="">Pilih daerah penjemputan kendaraan...</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Surabaya">Surabaya</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Daerah Tujuan */}
        <div>
          <label
            htmlFor="daerah_tujuan"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Daerah Tujuan (Pengantaran)
          </label>
          <select
            id="daerah_tujuan"
            value={formData.daerah_tujuan}
            onChange={handleChange("daerah_tujuan")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          >
            <option value="">Pilih daerah tujuan kendaraan diantar...</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Surabaya">Surabaya</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Step1_Rute;
