import React from 'react';

const BookDescription = ({ description }) => {
  return (
    <p className="w-[60%] text-sm text-gray-500 mb-3 line-clamp-2">
      {description}
    </p>
  );
};

export default BookDescription;