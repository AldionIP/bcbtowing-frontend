// src/pages/Legalitas.jsx
import React from "react";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import LegalitasContent from "../components/Fragments/LegalitasContent";

const Legalitas = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gray-50">
        <LegalitasContent />
      </main>
      <Footer />
    </>
  );
};

export default Legalitas;
