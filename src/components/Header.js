import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-300 to-red-600 text-white p-4 shadow-lg flex items-center justify-center relative">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-extrabold flex items-center text-center">
          <span className="bg-yellow-300 text-red-600 px-2 py-1 rounded-lg mr-2 text-2xl">🍴</span>
          La Gourmet
        </h1>
      </div>
    </header>
  );
};

export default Header;
