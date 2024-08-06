import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-300 to-red-600 text-white p-6 shadow-lg flex items-center justify-center relative">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-4xl font-extrabold flex items-center">
          <span className="bg-yellow-300 text-red-600 px-3 py-1 rounded-lg mr-3">🍴</span>
          La Gourmet
        </h1>
      </div>
    </header>
  );
};

export default Header;
