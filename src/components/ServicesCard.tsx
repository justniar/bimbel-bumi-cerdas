import React from "react";

interface ProgramCardProps {
  src: string;
  judul: string;
  deskripsi: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ src, judul, deskripsi }) => {
  return (
    <div className="md:w-[300px] p-10 dark:bg-gray-600/30 space-y-5 flex flex-col items-center text-center rounded-xl">
      <img src={src} alt="" />
      <h2 className="text-xl font-semibold">{judul}</h2>
      <p>
        {deskripsi}
      </p>
    </div>
  );
};

export default ProgramCard;
