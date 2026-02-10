import React from 'react';

const BookMeta = ({ author, year }) => {
  return (
    <div className="flex items-center gap-8 text-sm">
      <div>
        <span className="text-gray-400">Author</span>
        <p className="text-gray-700 font-medium">{author}</p>
      </div>
      <div>
        <span className="text-gray-400">Year</span>
        <p className="text-gray-700 font-medium">{year}</p>
      </div>
    </div>
  );
};

export default BookMeta;