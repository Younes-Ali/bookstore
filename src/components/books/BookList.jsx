import React from 'react';
import BookCard from './BookCard';

const booksData = [
  {
    id: 1,
    title: 'Rich Dad And Poor Dad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.',
    author: 'Robert T. Kiyosaki',
    year: 1997,
    price: 40.00,
    rating: 4.2,
    reviews: 210,
    discount: '25% Discount code: Ne212',
    image: '/api/placeholder/120/180'
  },
  {
    id: 2,
    title: 'Rich Dad And Poor Dad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.',
    author: 'Robert T. Kiyosaki',
    year: 1997,
    price: 40.00,
    rating: 4.2,
    reviews: 210,
    discount: '25% Discount code: Ne212',
    image: '/api/placeholder/120/180'
  },
  {
    id: 3,
    title: 'Rich Dad And Poor Dad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.',
    author: 'Robert T. Kiyosaki',
    year: 1997,
    price: 40.00,
    rating: 4.2,
    reviews: 210,
    discount: '25% Discount code: Ne212',
    image: '/api/placeholder/120/180'
  }
];

const BookList = ({ filters, selectedCategory }) => {
  return (
    <div className="space-y-6 my-8">
      {booksData.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;