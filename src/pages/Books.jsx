import React, { useState } from 'react';
import Sidebar from '../components/books/Sidebar';
import MainContent from '../components/books/MainContent';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Books() {

const navigate = useNavigate();

useEffect(() => {
  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  if (!token) {
    navigate("/auth/signin");
  }
}, []);

  const [selectedCategory, setSelectedCategory] = useState('Business');
  const [filters, setFilters] = useState({
    categories: [],
    publisher: '',
    year: ''
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