import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import axios from 'axios';
import img1 from '../../assets/images/book1.png';
import img2 from '../../assets/images/book2.png';
import img3 from '../../assets/images/book3.png';
import { useSearchStore, useSortStore } from '../../store'; // ✅

const imgs = [img1, img2, img3];

const BookList = ({ filters, selectedCategory }) => {
  const [booksData, setBookData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { searchText } = useSearchStore();
  const { sortBy } = useSortStore(); // ✅

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.get('https://bookstore.eraasoft.pro/api/book?populate=*', config)
      .then((res) => setBookData(res.data.data.books))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let result = [...booksData];

    // فلترة الكاتيجوري من Tabs
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(book =>
        book.catId === selectedCategory ||
        book.category_name === selectedCategory
      );
    }

    // فلترة الكاتيجوري من Sidebar
    if (filters.categories && filters.categories.length > 0) {
      result = result.filter(book =>
        filters.categories.includes(book.category_name)
      );
    }

    // فلترة السيرش
    if (searchText) {
      result = result.filter(book =>
        book.bookName?.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // ✅ الـ Sort
    switch (sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.publishYear - a.publishYear);
        break;
      case 'rating_desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    setFilteredBooks(result);
  }, [booksData, filters, selectedCategory, searchText, sortBy]); // ✅ sortBy في الـ deps

  return (
    <div className="space-y-6 my-8">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <BookCard key={book.bookId} book={book} img={imgs[book.bookId - 1]} />
        ))
      ) : (
        <p className="text-center text-gray-400 mt-10">No books found</p>
      )}
    </div>
  );
};

export default BookList;
