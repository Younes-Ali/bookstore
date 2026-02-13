import React from 'react';

const BookImage = ({ image, title }) => {
  return (
    <div className="shrink-0">
      <img
        src={image}
        alt={title}
        className="w-52 object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default BookImage;