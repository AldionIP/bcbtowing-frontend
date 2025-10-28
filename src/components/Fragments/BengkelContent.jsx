// src/components/Bengkel/BengkelContent.jsx
import React from 'react';

function BengkelContent() {
  // Data bengkel (contoh)
  const bengkelList = [
    {
      id: 1,
      title: "Rekomendasi Bengkel Body Repair",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/bengkel-body-repair.jpg", // Ganti dengan path gambar Anda
      buttonLabel: "Selengkapnya",
    },
    {
      id: 2,
      title: "Rekomendasi Bengkel Mobil Di Bandar Lampung",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/bengkel-lampung.jpg",
      buttonLabel: "Selengkapnya",
    },
    {
      id: 3,
      title: "Dealer Mercy Mercedes Benz Lampung Jual Mobil Serta Service",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: "/images/mercedes-logo.png",
      buttonLabel: "Selengkapnya",
    },
    {
      id: 4,
      title: "Dealer Mitsubishi Budi Berlian Motor Yos Sudarso Jual Mobil Serta Service",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      image: "/images/mitsubishi-logo.png",
      buttonLabel: "Selengkapnya",
    },
    {
      id: 5,
      title: "Dealer Tata Motor Bandar Jaya Jual Mobil Serta Service",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      image: "/images/tata-logo.png",
      buttonLabel: "Selengkapnya",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Konten bengkel */}
      <div className="space-y-8">
        {bengkelList.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start gap-6 p-6 border border-gray-200 rounded-xl hover:shadow-md transition"
          >
            {/* Kolom Kiri: Judul + Deskripsi + Tombol */}
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm">
                {item.buttonLabel}
              </button>
            </div>

            {/* Kolom Kanan: Gambar/Logo */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[160px] h-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tombol "Lebih Banyak" di akhir */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition text-sm">
          Lebih Banyak
        </button>
      </div>
    </div>
  );
}

export default BengkelContent;