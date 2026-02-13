import React, { useState } from 'react';
import { useSortStore } from '../../store'; // ✅

const SortDropdown = () => {
  const { sortBy, setSortBy } = useSortStore(); // ✅
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Newest First',       value: 'newest' },
    { label: 'Highest Rated',      value: 'rating_desc' },
    { label: 'Most Popular',       value: 'popular' },
  ];

  const selectedLabel = sortOptions.find(o => o.value === sortBy)?.label || 'Sort by';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <span className="text-gray-600">{selectedLabel}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSortBy(option.value); // ✅ بيكتب في Zustand
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-pink-50 hover:text-pink-500 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                sortBy === option.value ? 'text-pink-500 font-medium bg-pink-50' : 'text-gray-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;