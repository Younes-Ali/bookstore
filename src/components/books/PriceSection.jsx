import React from 'react';

const PriceSection = ({ price , finalPrice }) => {
  return (
    <div className='flex gap-2 items-center'>
    <div className="text-2xl font-bold text-gray-800">
      ${price.toFixed(2)}
    </div>
    <div className="text-lg text-gray-400 line-through">
      ${finalPrice.toFixed(2)}
    </div>
    </div>
  );
};

export default PriceSection;