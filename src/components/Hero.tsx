import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-white pointer-events-none">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,224C672,256,768,256,864,224C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative py-12 md:py-20 flex flex-col md:flex-row justify-between items-center px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 py-8 md:py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Sebuah <span className="text-orange-500 font-bold">Tempat</span> Belajar
            yang <span className="text-orange-500 font-bold">menyenangkan</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam
            iste praesentium dolorum laudantium corrupti?
          </p>
          <button className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white font-semibold text-sm md:text-base">
            Ayo Cari tau
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={hero} alt="Learning" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
