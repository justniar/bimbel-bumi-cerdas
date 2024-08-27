import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="w-full bg-white">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-white pointer-events-none">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,224C672,256,768,256,864,224C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative py-20 flex flex-col md:flex-row justify-between items-center px-5 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-5 py-20">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Sebuah <span className="text-green-500 font-bold">Tempat</span> Belajar
            yang <span className="text-green-500 font-bold">menyenangkan</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam
            iste praesentium dolorum laudantium corrupti?
          </p>
          <button className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white font-semibold">
            Ayo Cari tau
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={hero} alt="Learning" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
