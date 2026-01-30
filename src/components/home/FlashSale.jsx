import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import book1 from '../../assets/images/book7.png'; // استبدل بمسار الصورة الصحيح

export default function FlashSale() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 30,
    minutes: 0,
    seconds: 0
  });

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const books = [
    {
      id: 1,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosaki",
      rating: 4.2,
      reviews: 180,
      oldPrice: 45.00,
      price: 30.00,
      stock: 4,
      image: book1
    },
    {
      id: 2,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosaki",
      rating: 4.2,
      reviews: 180,
      oldPrice: 45.00,
      price: 30.00,
      stock: 4,
      image: book1
    },
    {
      id: 3,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosaki",
      rating: 4.2,
      reviews: 180,
      oldPrice: 45.00,
      price: 30.00,
      stock: 4,
      image: book1
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(books.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(books.length / 2)) % Math.ceil(books.length / 2));
  };

  const CircularProgress = ({ timeLeft }) => {
    const totalSeconds = 30 * 60 * 60; // 30 hours in seconds
    const remainingSeconds = timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
    const progress = (remainingSeconds / totalSeconds) * 100; // البوردر هيقل مع الوقت
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative w-40 h-40">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#D9176C"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#222222]">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#f5f5f5] py-12 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            Flash Sale
          </h2>
          <p className="text-[#222222]/60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>
        </div>
        <CircularProgress timeLeft={timeLeft} />
      </div>

      {/* Slider Section */}
      <div className="relative flex justify-center">
        <div className="overflow-hidden w-[80%]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(books.length / 2) }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {books.slice(slideIndex * 2, slideIndex * 2 + 2).map((book) => (
                  <div
                    key={book.id}
                    className="bg-[#3B2F4A] rounded-2xl p-6 flex flex-col sm:flex-row gap-6 shadow-xl"
                  >
                    {/* Book Image */}
                    <div className="sm:w-1/3 shrink-0">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    {/* Book Details */}
                    <div className="sm:w-2/3 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                        <p className="text-white/80 text-sm mb-3">
                          Author: <span className="font-medium">{book.author}</span>
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`${
                                  i < Math.floor(book.rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-400'
                                }`}
                                size={16}
                              />
                            ))}
                          </div>
                          <span className="text-white/70 text-sm">
                            ({book.reviews} Review)
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-white/60 text-sm">Rate:</span>
                          <span className="text-white font-semibold">{book.rating}</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-white/50 line-through text-lg">
                            ${book.oldPrice.toFixed(2)}
                          </span>
                          <span className="text-white text-3xl font-bold">
                            ${book.price.toFixed(2)}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-2">
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-linear-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                              style={{ width: '70%' }}
                            />
                          </div>
                        </div>
                        <p className="text-white/70 text-sm mb-4">
                          {book.stock} books left
                        </p>
                      </div>

                      {/* Add to Cart Button */}
                      <div className='w-full flex justify-end'>
                      <button className=" bg-[#D9176C] hover:bg-[#D9176C]/90 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 font-semibold transition-all w-fit">
                        <IoCartOutline size={24} />
                      </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-20 bg-white hover:bg-gray-100 rounded-full p-4 shadow-lg transition-all z-10"
        >
          <FaChevronLeft className="text-[#222222]" size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-white hover:bg-gray-100 rounded-full p-4 shadow-lg transition-all z-10"
        >
          <FaChevronRight className="text-[#222222]" size={20} />
        </button>
      </div>
    </div>
  );
}