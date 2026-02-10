import React from 'react';

const PriceSection = ({ price }) => {
  return (
    <div className="text-2xl font-bold text-gray-800">
      ${price.toFixed(2)}
    </div>
  );
};

export default PriceSection;