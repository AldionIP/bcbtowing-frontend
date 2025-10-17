import React, { useEffect, useState } from "react";
import MotionWrapper from "../MotionWrapper";

const slides = [
  "http://www.ljs-towing.com/images/photogallery/ljs-towing-surabaya.jpg",
  "https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2020/07/07223624/ZW-Jakarta-Towing_01.jpg",
  "https://www.sepedamotor.com/wp-content/uploads/2022/01/Atlas-Indonesia-agt1.jpg",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[80px] relative w-full h-[calc(100vh-80px)] overflow-hidden">
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-[1200ms] ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center text-white text-center px-4 z-20">
        <MotionWrapper delay={0.2} direction="up">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-4 leading-tight">
          BCB TOWING
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.4} direction="up">
          <p className="text-xl md:text-2xl italic font-medium">
            "Layanan Derek Towing Kendaraan Terbaik se-Indonesia"
          </p>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Slider;
