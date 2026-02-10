import React from 'react';
import PaginationButtons from './PaginationButtons';
import ResultsCounter from './ResultsCounter';

const Pagination = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 mt-8">
      <PaginationButtons />
      <ResultsCounter />
    </div>
  );
};

export default Pagination;