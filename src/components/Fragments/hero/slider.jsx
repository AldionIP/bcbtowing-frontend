import React, { useEffect } from "react";
import MotionWrapper from "../MotionWrapper";

// Gambar untuk slider hero
const slides = [
  "http://www.ljs-towing.com/images/photogallery/ljs-towing-surabaya.jpg",
  "https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2020/07/07223624/ZW-Jakarta-Towing_01.jpg",
  "https://www.sepedamotor.com/wp-content/uploads/2022/01/Atlas-Indonesia-agt1.jpg",
];

// Gambar untuk galeri
const galleryImages = [
  "https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2020/07/07223624/ZW-Jakarta-Towing_01.jpg",
  "https://www.sepedamotor.com/wp-content/uploads/2022/01/Atlas-Indonesia-agt1.jpg",
  "https://cdn.otomotifnet.com/images/2021/12/15/towing-mobil-1639543732.jpg",
  "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/09/15/towing-mobil-20210915-113442.jpg",
  "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/layanan-towing-mobil.jpg",
  "https://asset.kompas.com/crops/5eVvV1cF2x4XxZfKd4J1qZf1j6Q=/0x0:780x520/780x520/data/photo/2021/03/15/604ef8c7e8e5f.jpg",
];

const Slider = () => {
  // Smooth scroll saat navbar diklik
  useEffect(() => {
    const handleScrollEvent = (e) => {
      const targetId = e.detail;
      if (targetId === 1) {
        document.getElementById("galeri")?.scrollIntoView({ behavior: "smooth" });
      } else if (targetId === 2) {
        document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("changeSection", handleScrollEvent);
    return () => window.removeEventListener("changeSection", handleScrollEvent);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* === HERO SECTION === */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Gambar Slider */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-black/50 absolute z-10"></div>
          <img
            src={slides[0]}
            alt="BCB Hero"
            className="w-full h-full object-cover object-center animate-pulse"
          />
        </div>

        {/* Overlay text */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <MotionWrapper delay={0.2} direction="up">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-4">
              BCB TOWING
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.4} direction="up">
            <p className="text-lg md:text-2xl italic font-medium text-white/90 max-w-2xl">
              “Layanan Derek Towing Kendaraan Terbaik se-Indonesia — cepat, aman, dan profesional.”
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* === GALERI SECTION === */}
      <section id="galeri" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <MotionWrapper delay={0.1} direction="up">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Galeri Kegiatan</h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              Dokumentasi momen terbaik dari pelayanan kami di seluruh Indonesia.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <MotionWrapper key={index} delay={0.1 * (index + 1)} direction="up">
                <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
                  <img
                    src={img}
                    alt={`Galeri ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">BCB Towing</span>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* === KONTAK SECTION === */}
      <section
        id="kontak"
        className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MotionWrapper delay={0.2} direction="up">
            <h2 className="text-4xl font-extrabold mb-4">Hubungi Kami</h2>
            <p className="text-blue-100 mb-12">
              Siap membantu Anda 24 jam di seluruh wilayah Indonesia.  
              Hubungi kami untuk layanan towing cepat & terpercaya!
            </p>
          </MotionWrapper>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@bcbtowing.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold text-lg shadow-md transition"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
