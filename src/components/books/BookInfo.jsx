import React from 'react';
import BookTitle from './BookTitle';
import BookDescription from './BookDescription';
import RatingStars from './RatingStars';
import BookMeta from './BookMeta';

const BookInfo = ({ title, description, author, year, rating, reviews }) => {
  return (
    <div className="flex-1">
      <BookTitle title={title} />
      <BookDescription description={description} />
      <RatingStars rating={rating} reviews={reviews} />
      <BookMeta author={author} year={year} />
    </div>
  );
};

export default BookInfo;