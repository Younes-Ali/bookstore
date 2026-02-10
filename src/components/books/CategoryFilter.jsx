import React, { useState } from 'react';

const categories = [
  { name: 'All Categories', count: 1450 },
  { name: 'Business', count: 140 },
  { name: 'Kids', count: 309 },
  { name: 'Art', count: 102 },
  { name: 'History', count: 204 },
  { name: 'Romance', count: 89 },
  { name: 'Fantasy', count: 47 },
  { name: 'Self Help', count: 163 },
  { name: 'Cooking', count: 211 },
  { name: 'Sports', count: 92 }
];

const CategoryFilter = ({ filters, setFilters }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const displayedCategories = showAll ? categories : categories.slice(0, 10);

  const handleCategoryChange = (categoryName) => {
    const newCategories = filters.categories.includes(categoryName)
      ? filters.categories.filter(c => c !== categoryName)
      : [...filters.categories, categoryName];
    
    setFilters({ ...filters, categories: newCategories });
  };

  return (
    <div className="lg:mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full mb-3"
      >
        <h3 className="text-sm font-medium text-pink-400">Categories</h3>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="space-y-2">
          {displayedCategories.map((category) => (
            <label
              key={category.name}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                />
                <span className="text-sm text-gray-700">{category.name}</span>
              </div>
              <span className="text-xs text-gray-400">({category.count})</span>
            </label>
          ))}
          
          {!showAll && categories.length > 10 && (
            <button
              onClick={() => setShowAll(true)}
              className="text-sm text-pink-500 hover:text-pink-600 font-medium mt-2"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;