import React, { useState } from 'react';

const WishlistButton = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <button
      onClick={handleToggleWishlist}
      className={`p-3 border rounded-lg transition-colors ${
        isWishlisted
          ? 'bg-pink-50 border-pink-500 text-pink-500'
          : 'border-gray-200 text-gray-400 hover:border-pink-300 hover:text-pink-400'
      }`}
    >
      <svg
        className="w-6 h-6"
        fill={isWishlisted ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default WishlistButton;