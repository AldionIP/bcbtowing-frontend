// src/components/Fragments/TentangkamiContent.jsx
import React from 'react';

function TentangkamiContent() {
  return (
    <div id="tentangkami" className="min-h-screen bg-white py-12 px-6 scroll-mt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Gambar Perusahaan */}
        <div className="md:w-1/2 w-full">
          <img
            src="/images/tentang-kami-hero.jpg"
            alt="Tim BCB Towing sedang melayani pelanggan"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Teks Profil Perusahaan */}
        <div className="md:w-1/2 w-full space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Tentang <span className="text-orange-500">BCB Towing</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sejak tahun 2010, BCB Towing telah menjadi mitra terpercaya bagi ribuan pengguna kendaraan di seluruh Indonesia.
            Dengan armada modern, tim profesional, dan layanan 24 jam, kami siap membantu Anda kapan saja kendaraan mengalami masalah di jalan.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kami percaya bahwa layanan darurat bukan hanya soal cepat, tapi juga soal kepedulian.
            Setiap panggilan Anda adalah prioritas utama kami.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition">
              Lihat Layanan Kami
            </button>
            <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Visi & Misi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi penyedia jasa derek kendaraan tercepat, terbaik, dan paling terpercaya di seluruh Indonesia.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-800 mb-4">Misi</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>✅ Memberikan layanan 24 jam tanpa henti.</li>
              <li>✅ Menyediakan armada modern dan terawat.</li>
              <li>✅ Melatih tim teknis yang profesional dan ramah.</li>
              <li>✅ Menjamin keamanan dan kenyamanan pelanggan.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nilai Perusahaan */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nilai Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '⏱️', title: 'Cepat', desc: 'Respon dalam 15 menit setelah panggilan.' },
            { icon: '🤝', title: 'Profesional', desc: 'Tim berpengalaman dan bersertifikat.' },
            { icon: '💰', title: 'Terjangkau', desc: 'Harga transparan, tanpa biaya tersembunyi.' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistik Singkat */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Kami Telah Melayani</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10.000+", label: "Pelanggan Puas" },
            { number: "24/7", label: "Layanan Nonstop" },
            { number: "50+", label: "Kota Pelayanan" },
            { number: "99%", label: "Keberhasilan Penyelesaian" },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto text-center py-12 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Siap untuk Mendapatkan Layanan Terbaik?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Hubungi kami sekarang dan rasakan perbedaan layanan profesional dari BCB Towing.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition">
            Telepon Sekarang
          </button>
          <button className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition">
            Kirim Pesan
          </button>
        </div>
      </div>
    </div>
  );
}

export default TentangkamiContent;
