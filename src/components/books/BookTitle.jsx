import React from 'react';

const BookTitle = ({ title }) => {
  return (
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {title}
    </h3>
  );
};

export default BookTitle;