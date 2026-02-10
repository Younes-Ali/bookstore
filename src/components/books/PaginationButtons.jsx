import React, { useState } from 'react';
import { useRef, useEffect } from "react";




const PaginationButtons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const buttonsRef = useRef([]);

  useEffect(() => {
  const currentBtn = buttonsRef.current[currentPage - 1];
  if (currentBtn) {
    currentBtn.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
}, [currentPage]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 text-gray-600 hover:text-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 text-sm text-pink-500 hover:underline disabled:opacity-50"
      >
        Previous
      </button>

      <div className="flex overflow-x-auto w-13 md:w-33 gap-1">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              ref={(el) => (buttonsRef.current[index] = el)}
              key={page}
              onClick={() => handlePageChange(page)}
              className={`shrink-0 w-10 h-10 rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
      
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-sm text-pink-500 hover:underline disabled:opacity-50"
      >
        Next
      </button>

      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-gray-600 hover:text-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PaginationButtons;