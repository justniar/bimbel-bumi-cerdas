import React from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex p-5 fixed top-0 left-0 bg-white shadow-md z-50 justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Bimbel Bumi Cerdas" className="h-12 w-12 object-contain" />
        <h1 className="text-xl font-semibold text-gray-800">Bimbel Bumi Cerdas</h1>
      </div>
      <div className="flex items-center space-x-8">
        <ul className="hidden md:flex items-center space-x-6 text-gray-700">
          <li className="hover:text-green-500 transition-colors duration-200 cursor-pointer">Beranda</li>
          <li className="hover:text-green-500 transition-colors duration-200 cursor-pointer">Program</li>
          <li className="hover:text-green-500 transition-colors duration-200 cursor-pointer">Prestasi</li>
          <li className="hover:text-green-500 transition-colors duration-200 cursor-pointer">Pengajar</li>
          <li className="hover:text-green-500 transition-colors duration-200 cursor-pointer">Testimoni</li>
          <li className="hover:text-green-500 transition-colors duration-200 cursor-pointer">Tentang</li>
        </ul>
        <button className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
          <IoSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
