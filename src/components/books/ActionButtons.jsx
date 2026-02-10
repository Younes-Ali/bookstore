import React from 'react';
import AddToCartButton from './AddToCartButton';
import WishlistButton from './WishlistButton';

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <AddToCartButton />
      <WishlistButton />
    </div>
  );
};

export default ActionButtons;