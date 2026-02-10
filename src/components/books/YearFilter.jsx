import React, { useState } from 'react';

const YearFilter = ({ filters, setFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="lg:mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full mb-3"
      >
        <h3 className="text-sm font-semibold text-gray-800">Year</h3>
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
          {/* Add year options here */}
          <p className="text-sm text-gray-500">Year options...</p>
        </div>
      )}
    </div>
  );
};

export default YearFilter;