import React from "react";
import math from "../assets/math.png"

import ProgramCard from "./ServicesCard";
const Program = () => {
  return (
    <div className="py-20 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProgramCard src={math} judul="Prisma" deskripsi="Deskripsi singkat tentang program Prisma." />
          <ProgramCard src={math} judul="Abama" deskripsi="Deskripsi singkat tentang program Abama."/>
          <ProgramCard src={math} judul="Qiro'ati" deskripsi="Deskripsi singkat tentang program Qiro'ati." />
          <ProgramCard src={math} judul="Sempoa" deskripsi="Deskripsi singkat tentang program Sempoa." />
          <ProgramCard src={math} judul="Cermat" deskripsi="Deskripsi singkat tentang program Cermat." />
          <ProgramCard src={math} judul="Tematik" deskripsi="Deskripsi singkat tentang program Tematik." />
          <ProgramCard src={math} judul="Pracalis" deskripsi="Deskripsi singkat tentang program Pracalis." />
          <ProgramCard src={math} judul="Bahas Inggris" deskripsi="Deskripsi singkat tentang program Bahas Inggris." />
          <ProgramCard src={math} judul="Coding" deskripsi="Deskripsi singkat tentang program Coding." />
        </div>
    </div>
    
  );
};

export default Program;
