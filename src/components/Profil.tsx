import React from "react";
import aboutSvg from "../assets/about.svg"; // Update this path to the SVG file

const Profil = () => {
  return (
    <div 
      className="py-20 px-5 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 bg-gradient-to-r from-green-400 to-sky-400 relative"
      style={{
        backgroundImage: `url(${aboutSvg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-md md:w-1/2 space-y-5">
        <p className="text-green-400">Profil Terbaru Bimble Bumi Cerdas</p>
        <h1 className="text-6xl font-semibold text-white">
          Tentang Bimble Bumi Cerdas
        </h1>
        <p className="text-gray-300">
          Bimble Bumi Cerdas adalah sebuah lembaga edukasi yang menyediakan layanan bimbingan belajar (bimbel) 
          dengan pendekatan yang interaktif dan menyenangkan. Bimble ini dirancang untuk membantu siswa dalam
          memahami materi pelajaran secara lebih mendalam, serta meningkatkan prestasi akademik mereka melalui 
          metode pembelajaran yang efektif. Dengan memanfaatkan teknologi terkini, Bimble Bumi Cerdas menyediakan
          berbagai materi pelajaran, latihan soal, dan simulasi ujian yang disesuaikan dengan kurikulum terbaru. 
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          Pelajari
        </button>
      </div>
    </div>
  );
};

export default Profil;
