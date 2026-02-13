import React, { useState, useEffect } from 'react';
import Sidebar from '../components/books/Sidebar';
import MainContent from '../components/books/MainContent';
import { useNavigate } from 'react-router-dom';
import { useCategoryStore } from '../store';

function Books() {
  const navigate = useNavigate();
  const { fetchCategories } = useCategoryStore();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) navigate("/auth/signin");
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filters, setFilters] = useState({
    categories: [],
    minPrice: null,
    maxPrice: null,
  });

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 container mx-auto">
      <Sidebar filters={filters} setFilters={setFilters} />
      <MainContent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filters={filters}
      />
    </div>
  );
}

export default Books;