import React from 'react';

const DiscountBadge = ({ discount }) => {
  return (
    <div className="px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-md">
      <span className="text-xs text-yellow-700 font-medium">{discount}</span>
    </div>
  );
};

export default DiscountBadge;