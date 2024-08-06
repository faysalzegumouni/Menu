import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full md:w-1/4 p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-orange-700 border-b-4 pb-2 md:pb-3 border-orange-500">
        Catégories
      </h3>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 md:py-3 px-3 md:px-4 rounded-lg flex items-center transition-transform duration-300 ease-in-out transform ${
              selectedCategory === category
                ? 'bg-orange-600 text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105'
            }`}
            onClick={() => onSelectCategory(category)}
            role="button"
            aria-selected={selectedCategory === category}
          >
            <span className="font-medium text-sm md:text-base">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
