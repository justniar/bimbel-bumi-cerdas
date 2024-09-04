import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import math from "../assets/math.png";
import pracalis from "../assets/pracalis.png";
import qiro from "../assets/qiro.png";
import english from "../assets/english.png";

import ProgramCard from "./ProgramCard";

const Program = (id: any) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div id="program" className="py-10 px-4 sm:px-10 relative">
      <div className="max-w-7xl mx-auto overflow-hidden" ref={scrollContainerRef}>
        <div className="inline-flex p-5 space-x-4 sm:space-x-5">
          <ProgramCard src={math} judul="Prisma" deskripsi="Deskripsi singkat tentang program Prisma." />
          <ProgramCard src={pracalis} judul="Abama" deskripsi="Deskripsi singkat tentang program Abama." />
          <ProgramCard src={qiro} judul="Qiro'ati" deskripsi="Deskripsi singkat tentang program Qiro'ati." />
          <ProgramCard src={math} judul="Sempoa" deskripsi="Deskripsi singkat tentang program Sempoa." />
          <ProgramCard src={math} judul="Cermat" deskripsi="Deskripsi singkat tentang program Cermat." />
          <ProgramCard src={math} judul="Tematik" deskripsi="Deskripsi singkat tentang program Tematik." />
          <ProgramCard src={pracalis} judul="Pracalis" deskripsi="Deskripsi singkat tentang program Pracalis." />
          <ProgramCard src={english} judul="Bahasa Inggris" deskripsi="Deskripsi singkat tentang program Bahasa Inggris." />
          <ProgramCard src={math} judul="Coding" deskripsi="Deskripsi singkat tentang program Coding." />
        </div>
      </div>

      {/* Scroll buttons */}
      <button
        onClick={scrollLeft}
        className="hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        onClick={scrollRight}
        className="hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default Program;
