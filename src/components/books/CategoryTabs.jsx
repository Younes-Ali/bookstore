import React from 'react';

const categories = [
  'Business',
  'Self Help',
  'History',
  'Romance',
  'Fantasy',
  'Art',
  'Kids',
  'Music',
  'Cooking'
];

const CategoryTabs = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedCategory === category
              ? 'bg-pink-500 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;