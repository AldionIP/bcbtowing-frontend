import React from "react";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import Hero from "../components/Fragments/Hero";

function LandingPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default LandingPage;
