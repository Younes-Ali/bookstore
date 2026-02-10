import React from 'react';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import CategoryTabs from './CategoryTabs';

const Header = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <SearchBar />
        <SortDropdown />
      </div>
      <CategoryTabs 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default Header;