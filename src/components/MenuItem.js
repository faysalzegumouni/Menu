import React from 'react';

const MenuItem = ({ name, description, price, imageUrl }) => {
  return (
    <div className="bg-white p-4 m-4 shadow-lg rounded-lg w-72 transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out border border-gray-200">
      <img src={imageUrl} alt={name} className="h-40 w-full object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2 text-orange-600">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <span className="text-lg font-bold text-red-600">{price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
