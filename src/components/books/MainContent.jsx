import React from 'react';
import Header from './Header';
import BookList from './BookList';
import Pagination from './Pagination';

const MainContent = ({ selectedCategory, setSelectedCategory, filters }) => {
  return (
    <main className="flex-1 p-6 bg-[#f2f2f2]">
      <Header 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <BookList filters={filters} selectedCategory={selectedCategory} />
      <Pagination />
    </main>
  );
};

export default MainContent;