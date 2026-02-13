import React from 'react';

const DiscountBadge = ({ discount }) => {
  return (
    <div className="px-3 py-1 bg-white border border-yellow-300 rounded-md">
      <span className="text-xs text-yellow-300 font-medium">{discount}</span>
    </div>
  );
};

export default DiscountBadge;