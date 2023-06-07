import React from "react";
import HeroImg from "../assets/HeroImg.png";

function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 lg:flex-row py-20">
        {/* Left Part */}
        <div className="flex flex-col lg:w-1/2 justify-center gap-4">
          <h1 className="text-5xl text-center lg:text-left font-black text-purple-900">
            Welcome to OiC
          </h1>
          <p className="text-center font-medium lg:text-left text-gray-600 text-lg mb-4">
            We help you to seek the truth.
          </p>
        </div>
        {/* Right Part */}
        <div className="lg:w-1/2">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
