import React from 'react';

const FilterHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
      <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
    </div>
  );
};

export default FilterHeader;