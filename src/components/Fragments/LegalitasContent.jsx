// src/components/Fragments/LegalitasContent.jsx
import React from "react";

function LegalitasContent() {
  const legalDocuments = [
    {
      id: 1,
      title: "Surat Izin Usaha Perdagangan (SIUP)",
      description:
        "Dikeluarkan oleh Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kota Bandar Lampung.",
      image: "/images/legalitas/siup.jpg",
      validUntil: "Berlaku hingga: 2028",
    },
    {
      id: 2,
      title: "Nomor Pokok Wajib Pajak (NPWP)",
      description:
        "Nomor identitas wajib pajak resmi dari Direktorat Jenderal Pajak Republik Indonesia.",
      image: "/images/legalitas/npwp.jpg",
      validUntil: "Berlaku seumur hidup",
    },
    {
      id: 3,
      title: "Akta Pendirian Perusahaan",
      description:
        "Akta notaris resmi yang menyatakan berdirinya PT Indo Towing Sejahtera.",
      image: "/images/legalitas/akta.jpg",
      validUntil: "Berlaku seumur hidup",
    },
    {
      id: 4,
      title: "Izin Operasional Jasa Towing",
      description:
        "Izin resmi dari Kementerian Perhubungan Republik Indonesia untuk operasional jasa derek kendaraan.",
      image: "/images/legalitas/izin-operasional.jpg",
      validUntil: "Berlaku hingga: 2027",
    },
    {
      id: 5,
      title: "Sertifikat Keamanan Armada",
      description:
        "Sertifikasi berkala dari Balai Pengujian Laik Jalan untuk seluruh armada towing.",
      image: "/images/legalitas/sertifikat-armada.jpg",
      validUntil: "Berlaku hingga: 2026",
    },
    {
      id: 6,
      title: "Tanda Daftar Perusahaan (TDP)",
      description:
        "Pendaftaran resmi di Kementerian Hukum dan HAM Republik Indonesia.",
      image: "/images/legalitas/tdp.jpg",
      validUntil: "Berlaku seumur hidup",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6 sm:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Legalitas Perusahaan
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Indo Towing adalah perusahaan jasa derek kendaraan yang telah
          terdaftar secara resmi dan memenuhi seluruh persyaratan hukum di
          Indonesia. Berikut dokumen legalitas kami yang dapat diverifikasi
          secara publik.
        </p>
      </div>

      {/* Daftar Dokumen */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Gambar Dokumen */}
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={doc.image}
                  alt={doc.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Dokumen+Legalitas";
                  }}
                />
              </div>

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {doc.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                <p className="text-xs font-medium text-green-600">
                  {doc.validUntil}
                </p>

                <button
                  onClick={() => alert("Fitur unduh belum aktif.")}
                  className="mt-4 w-full py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                >
                  Lihat / Unduh Dokumen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Tambahan */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Butuh Verifikasi Resmi?
          </h3>
          <p className="text-gray-700 mb-4">
            Anda dapat menghubungi kami langsung untuk verifikasi dokumen
            legalitas atau mengajukan permohonan kerja sama resmi.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Hubungi Tim Legal
          </button>
        </div>
      </div>
    </div>
  );
}

export default LegalitasContent;
