// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import TentangkamiContent from "../components/Fragments/TentangkamiContent";


const About = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-24 bg-gray-50">
        <TentangkamiContent />
      </main>
      <Footer />
    </div>
  );
};

export default About;
