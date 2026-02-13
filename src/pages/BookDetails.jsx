import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import img from '../assets/images/book1.png'
import FlashSale from '../components/home/FlashSale';
import facebook from '../assets/logo/f.svg'
import instagram from '../assets/logo/i.svg'
import x from '../assets/logo/x.svg'
import whats from '../assets/logo/w.svg'
import { StarRating } from '../book-details/StarRating';
import { ReviewCard } from '../book-details/ReviewCard';


// ======= Main Page =======

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('reviews'); // 'details' | 'reviews' | 'recommended'
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [isWishlisted , setIsWishlisted] = useState(false)
  const loc = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };

    axios.get(`https://bookstore.eraasoft.pro/api/book/show/${id}?populate=*`, config)
      .then((res) => {
        setBook(res.data.data.book);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    axios.get(`https://bookstore.eraasoft.pro/api/book/show/${id}?populate=*`, config)
      .then((res) => {
        setRecommendedBooks(res.data.data.recommendedBooks);
      })
      .catch(console.log);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!book) {
    return <p className="text-center mt-20 text-gray-400 m-10">Book not found</p>;
  }

  const images = book.image || [img , img , img];

  return (
    <div className="max-w-5xl  mx-auto px-4 py-8">

    
      <div className="h-[50vh] flex flex-col md:flex-row gap-8 mb-8">

      
        <div className="flex flex-col gap-3">
          <img
            src={images[selectedImg] || img }
            alt={book.bookName}
            className="w-48  object-cover rounded-xl shadow"
          />
          <div className="flex gap-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImg(i)}
                className={`w-14 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImg === i ? 'border-pink-500' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h1 className="text-2xl font-bold text-black">{book.bookName}</h1>
            {/* Social Icons */}
            <div className="flex gap-2">
              {[facebook, instagram, x, whats].map((s) => (
                <button key={s} className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                  <img className='w-5' src={s} alt="logo" />
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-2 leading-relaxed">{book.description}</p>

          <div className="grid grid-cols-5 gap-4 mt-4 text-sm">
            {[
              { label: 'Author', value: book.author },
              { label: 'Publication Year', value: book.publicationYear },
              { label: 'Book', value: `1 Of 1` },
              { label: 'Pages', value: book.numberOfPages },
              { label: 'Language', value: book.lang || 'English' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-gray-400 text-xs">{label}</p>
                <p className="font-medium text-black">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-4">
            <StarRating rating={book.rate} />
            <span className="text-sm text-gray-500">({book.countReview} Review)</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Rate: <span className='text-black'>{book.rate || 66}</span></p>

          {/* Badges */}
          <div className="flex gap-2 mt-3">
            <span className="flex items-center gap-1 text-xs text-green-500 border border-green-200 rounded-full px-3 py-1">
              ✓ In Stock
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1">
              🚚 Free Shipping Today
            </span>
            {book.discount && (
              <span className="text-xs text-pink-500 border border-pink-200 rounded-full px-3 py-1">
                Discount code: {book.discountCode || 'younes111'}
              </span>
            )}
          </div>

          <div className="flex flex-col items-center gap-6 mt-5">
            <div className='w-full flex items-center justify-start'>
              <span className="text-2xl font-bold text-black">${book.final_price}</span>
              {book.price && (
                <span className="text-gray-400 line-through ml-2">${book.price}</span>
              )}
            </div>
            <div className='w-full flex justify-between items-center'>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="text-gray-500 hover:text-pink-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-6 text-center font-medium text-black">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="text-gray-500 hover:text-pink-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <button className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">
                Add To Cart 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <button onClick={()=>{
                setIsWishlisted(!isWishlisted)
              }} className="w-10 h-10 border border-pink-500 rounded-lg flex items-center justify-center hover:border-pink-300">
                <svg
                  className="w-6 h-6 "
                  fill={isWishlisted ? '#f6339a' : 'none'}
                  stroke="#f6339a"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
      </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Tabs ===== */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex gap-8">
          {[
            { key: 'details', label: 'Product Details' },
            { key: 'reviews', label: 'Customer Reviews' },
            { key: 'recommended', label: 'Recommended For You' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeTab === tab.key
                  ? 'border-pink-500 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Tab Content ===== */}

      {/* Product Details */}
      {activeTab === 'details' && (
        <div className="prose max-w-none text-gray-600 text-sm leading-relaxed">
          <p>{book.description}</p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            {[
              {label: 'Asin code', value: book.asinCode },
              { label: 'Author', value: book.author },
              { label: 'Publication Year', value: book.publicationYear },
              { label: 'Pages', value: book.numberOfPages },
              { label: 'Language', value: book.lang || 'English' },
              { label: 'Category', value: book.category_name || 'sport' },
            ].map(({ label, value }) => (
              <div key={label} className="flex  gap-2">
                <span className="text-gray-400 font-medium">{label}:</span>
                <span className='text-black' >{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Customer Reviews */}
      {activeTab === 'reviews' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {book.reviews_list?.length > 0 ? (
            book.reviews_list.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))
          ) : (
            // Dummy reviews لو الـ API مرجعش reviews
            Array(6).fill(null).map((_, i) => (
              <ReviewCard
                key={i}
                review={{
                  userName: 'John Smith',
                  rating: 5,
                  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,',
                  date: '28/07/2024',
                  title: 'Excellent Book',
                }}
              />
            ))
          )}
        </div>
      )}

      {/* Recommended For You */}
      {activeTab === 'recommended' && (
        <FlashSale />
      )}
    </div>
  );
};

export default BookDetails;