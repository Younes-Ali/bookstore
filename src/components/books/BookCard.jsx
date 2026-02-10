import React from 'react';
import BookImage from './BookImage';
import BookInfo from './BookInfo';
import DiscountBadge from './DiscountBadge';
import PriceSection from './PriceSection';
import ActionButtons from './ActionButtons';

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <BookImage image={book.image} title={book.title} />
      
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 flex-wrap gap-2">
          <BookInfo 
            title={book.title}
            description={book.description}
            author={book.author}
            year={book.year}
            rating={book.rating}
            reviews={book.reviews}
          />
          <DiscountBadge discount={book.discount} />
        </div>
        
        <div className="mt-auto flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between">
          <PriceSection price={book.price} />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default BookCard;