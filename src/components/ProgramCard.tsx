import React from "react";

interface ProgramCardProps {
  src: string;
  judul: string;
  deskripsi: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ src, judul, deskripsi }) => {
  return (
    <div className="md:w-[300px] p-8 bg-white shadow-lg cursor-pointer hover:bg-orange-50 hover:shadow-xl transition-shadow duration-300 rounded-xl flex flex-col items-center text-center space-y-5">
      <img src={src} alt={judul} className="w-24 h-24 object-contain" />
      <h2 className="text-xl font-semibold text-gray-800">{judul}</h2>
      <p className="text-gray-600">
        {deskripsi ? deskripsi : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      </p>
    </div>
  );
};

export default ProgramCard;
