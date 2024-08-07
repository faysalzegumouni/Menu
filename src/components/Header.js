import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-300 to-red-600 text-white p-4 shadow-lg flex items-center justify-center relative">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-extrabold flex items-center text-center">
          <span className="bg-yellow-300 text-red-600 px-2 py-1 rounded-lg mr-2 text-2xl">🍴</span>
          La Gourmet
        </h1>
        <div className="mt-2 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
