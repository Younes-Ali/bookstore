import React, { useState } from 'react';
import { useCategoryStore } from '../../store'; // ✅ من Zustand

const CategoryFilter = ({ filters, setFilters }) => {
  const { categories, loading } = useCategoryStore(); // ✅ نفس الداتا
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const displayedCategories = showAll ? categories : categories.slice(0, 5);

  const handleCategoryChange = (categoryName) => {
    const newCategories = filters.categories.includes(categoryName)
      ? filters.categories.filter(c => c !== categoryName)
      : [...filters.categories, categoryName];

    setFilters({ ...filters, categories: newCategories });
  };

  return (
    <div className="lg:mb-6 bg-white p-3 rounded-xl">
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
          {loading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : (
            <>
              {displayedCategories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.categoryName)}
                      onChange={() => handleCategoryChange(category.categoryName)}
                      className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <span className="text-sm text-gray-700">{category.categoryName}</span>
                  </div>
                </label>
              ))}

              {!showAll && categories.length > 5 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-sm text-pink-500 hover:text-pink-600 font-medium mt-2"
                >
                  Load More
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
