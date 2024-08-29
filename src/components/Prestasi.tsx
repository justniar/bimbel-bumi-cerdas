import React from "react";
import satu from  "../assets/prestasi/1.jpeg"

const galleryData = [
  {
    url: "../assets/prestasi/1.jpeg",
    caption: "Level 5 ABAMA"
  },
  {
    url: "../assets/prestasi/1.jpeg",
    caption: "Level 5 ABAMA"
  },
  {
    url: "../assets/prestasi/1.jpeg",
    caption: "Level 5 ABAMA"
  },
];

const Prestasi = () => {
  return (
    <div className="py-20 px-5 flex flex-col justify-center items-center space-y-10">
      <div className="text-center md:w-1/2 space-y-5">
        <p className="text-green-400">Prestasi Terbaru Bimble Bumi Cerdas</p>
        <h1 className="text-4xl font-semibold">
          Prestasi Terbaru Bimble Bumi Cerdas
        </h1>
        <p className="text-gray-300">
          Berikut adalah beberapa pencapaian terbaru dari Bimble Bumi Cerdas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={item.url} 
              alt={item.caption} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-gray-300 mt-3">{item.caption}</p>
          </div>
        ))}
      </div>
      
      <button className="mt-10 px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
        Learn More
      </button>
    </div>
  );
};

export default Prestasi;
