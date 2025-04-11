import React from "react";
import heroImage from "../assets/pexels.jpg"; // Removed the trailing slash

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content on top */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <p className="text-sm tracking-widest font-semibold mb-2 text-rose-200">WELCOME</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">I’m Dianna Adams</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Food Critic / Influencer / Blogger
        </h2>
        <p className="mb-6 leading-relaxed">
          Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing
          sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
        </p>
        <button className="border-2 border-white text-white hover:bg-white hover:text-rose-500 transition font-semibold py-2 px-6 rounded">
          JOIN INSIDER
        </button>
      </div>
    </section>
  );
};

export default HeroSection;