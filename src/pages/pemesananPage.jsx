import React from 'react';
import Navbar from '../components/Fragments/Navbar';
import Footer from '../components/Fragments/Footer';
import PemesananContent from '../components/Fragments/pemesananContent'; // ✅ huruf besar

function PemesananPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <PemesananContent /> {/* ✅ huruf besar */}
      <Footer />
    </div>
  );
}

export default PemesananPage;
