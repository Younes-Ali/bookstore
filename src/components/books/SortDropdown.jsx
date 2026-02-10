import React, { useState } from 'react';

const SortDropdown = () => {
  const [sortBy, setSortBy] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low',
    'Newest First',
    'Highest Rated',
    'Most Popular'
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <span className="text-gray-600">Sort by</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSortBy(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm bg-gray-800 hover:bg-gray-200 hover:text-black first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;