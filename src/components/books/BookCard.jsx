import React from 'react';
import BookImage from './BookImage';
import BookInfo from './BookInfo';
import DiscountBadge from './DiscountBadge';
import PriceSection from './PriceSection';
import ActionButtons from './ActionButtons';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book , img }) => {
  
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/books/${book.bookId}`)} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
      <BookImage image={img} title={book.bookName} />
      
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 flex-wrap gap-2">
          <BookInfo 
            title={book.bookName}
            description={book.description}
            author={book.author}
            year={book.publicationYear}
            rating={book.rate || 4}
            reviews={book.countReview}
          />
          <DiscountBadge discount={book.discount+'% Discount code: Ne212'} />
        </div>
        
        <div className="mt-auto flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between">
          <PriceSection price={book.final_price} finalPrice={book.price} />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default BookCard;