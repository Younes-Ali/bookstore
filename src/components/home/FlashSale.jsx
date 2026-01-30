import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import book1 from '../../assets/images/book7.png';

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
    },
    {
      id: 4,
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

  const itemsPerSlide = {
    mobile: 1,
    tablet: 1,
    desktop: 2
  };

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return itemsPerSlide.desktop;
      if (window.innerWidth >= 768) return itemsPerSlide.tablet;
    }
    return itemsPerSlide.mobile;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerSlide());
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(books.length / itemsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const CircularProgress = ({ timeLeft }) => {
    const totalSeconds = 30 * 60 * 60;
    const remainingSeconds = timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
    const progress = (remainingSeconds / totalSeconds) * 100;
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative sm:w-40 sm:h-40">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
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
          <span className="text-xl sm:text-2xl font-bold text-[#222222] tabular-nums">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#f5f5f5] py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-350 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 gap-6 lg:gap-8">
          <div className="max-w-xl text-center lg:text-left w-full lg:w-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] mb-3 sm:mb-4">
              Flash Sale
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#222222]/60 leading-relaxed px-4 sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
            </p>
          </div>
          <div className="shrink-0">
            <CircularProgress timeLeft={timeLeft} />
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative flex flex-col items-center">
          <div className="overflow-hidden w-[80%]">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className={`min-w-full grid gap-4 sm:gap-5 md:gap-6 ${
                    itemsToShow === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {books.slice(slideIndex * itemsToShow, slideIndex * itemsToShow + itemsToShow).map((book) => (
                    <div
                      key={book.id}
                      className="bg-[#3B2F4A] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
                        {/* Book Image */}
                        <div className="w-full sm:w-2/5 md:w-1/3 shrink-0 flex justify-center items-center">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-40 h-52 sm:w-full sm:h-full max-w-[200px] sm:max-w-none object-contain rounded-lg"
                          />
                        </div>

                        {/* Book Details */}
                        <div className="w-full sm:w-3/5 md:w-2/3 flex flex-col justify-between text-white">
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                              {book.title}
                            </h3>
                            <p className="text-white/80 text-xs sm:text-sm md:text-base mb-3">
                              Author: <span className="font-medium">{book.author}</span>
                            </p>

                            {/* Rating */}
                            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                              <div className="flex gap-0.5 sm:gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={`${
                                      i < Math.floor(book.rating)
                                        ? 'text-yellow-400'
                                        : 'text-gray-400'
                                    }`}
                                    size={window.innerWidth < 640 ? 14 : 16}
                                  />
                                ))}
                              </div>
                              <span className="text-white/70 text-xs sm:text-sm">
                                ({book.reviews} Review)
                              </span>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-white/60 text-xs sm:text-sm">Rate:</span>
                              <span className="text-white text-sm sm:text-base font-semibold">{book.rating}</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <span className="text-white/50 line-through text-base sm:text-lg md:text-xl">
                                ${book.oldPrice.toFixed(2)}
                              </span>
                              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                                ${book.price.toFixed(2)}
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-2">
                              <div className="w-full bg-gray-600 rounded-full h-1.5 sm:h-2">
                                <div
                                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                                  style={{ width: '70%' }}
                                />
                              </div>
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm mb-4">
                              {book.stock} books left
                            </p>
                          </div>

                          {/* Add to Cart Button */}
                          <div className='w-full flex justify-center sm:justify-end mt-4 sm:mt-0'>
                            <button className="bg-[#D9176C] hover:bg-[#D9176C]/90 text-white rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2 font-semibold transition-all w-full sm:w-auto">
                              <span className="text-sm sm:text-base">Add to Cart</span>
                              <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop Only */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-4 xl:-left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 xl:p-4 shadow-lg transition-all z-10 items-center justify-center hover:scale-110 active:scale-95"
                aria-label="Previous"
              >
                <FaChevronLeft className="text-[#222222]" size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 xl:p-4 shadow-lg transition-all z-10 items-center justify-center hover:scale-110 active:scale-95"
                aria-label="Next"
              >
                <FaChevronRight className="text-[#222222]" size={20} />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-[#D9176C]'
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}