// src/pages/BengkelPage.jsx
import React from 'react';
import Navbar from '../components/Fragments/Navbar';
import Footer from '../components/Fragments/Footer';
import BengkelContent from '../components/Fragments/BengkelContent';

function BengkelPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <BengkelContent />
      <Footer />
    </div>
  );
}

// 👇 TAMBAHKAN BARIS INI DI AKHIR 👇
export default BengkelPage;