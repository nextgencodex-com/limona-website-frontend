"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const LatestArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data - current price
  const latestProducts: Product[] = [
    {
      id: 9,
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract.png',
      category: 'Jackets',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
    {
      id: 10,
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract (1).png',
      category: 'Dresses',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
    {
      id: 11,
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract (2).png',
      category: 'Tops',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
    {
      id: 12,
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract (3).png',
      category: 'Bottoms',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
  ];

  // Navigation functions for mobile carousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === latestProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? latestProducts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="latest-arrivals py-12 bg-white font-geologica">
      <div className="container mx-auto px-4">
        {/* DESKTOP VIEW - Hidden on mobile */}
        <div className="hidden md:block">
          {/* Section Header */}
          <div className="flex flex-col mb-8">
            <div className="text-left mb-3">
              <h2 
                className="text-4xl font-bold tracking-tight font-geologica"
                style={{ color: '#FCC900', letterSpacing: '0.07em' }}
              >
                Latest Arrivals
              </h2>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p 
                  className="text-base text-black font-geologica font-bold"
                  style={{ letterSpacing: '0.07em' }}
                >
                  Fresh styles just dropped
                </p>
              </div>
              
              <Link 
                href="/Products"
                className="inline-flex items-center gap-2 transition-all duration-300 font-medium group font-geologica"
                style={{ color: '#FCC900', letterSpacing: '0.07em' }}
              >
                View All
                <svg 
                  className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#FCC900' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {latestProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[30px] overflow-hidden transition-all duration-300 font-geologica"
              >
                {/* Separate Image Container */}
                <div 
                  className="relative overflow-hidden bg-white-100 mb-3 rounded-[30px]"
                  style={{
                    width: '280px',
                    height: '380px'
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 280px, (max-width: 1200px) 280px, 280px"
                  />
                  
                  {/* Cart Icon */}
                  <button className="absolute top-3 left-3 text-white p-1 hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                      />
                    </svg>
                  </button>
                </div>

                {/* Separate Description Container */}
                <div className="px-2 py-3 font-geologica">
                  {/* Product Name with yellow color */}
                  <h3 
                    className="font-bold text-lg mb-1 font-geologica"
                    style={{ color: '#FCC900', letterSpacing: '0.07em' }}
                  >
                    {product.name}
                  </h3>
                  
                  {/* Product Description */}
                  <p 
                    className="text-gray-800 text-xs mb-2 leading-relaxed font-geologica"
                    style={{ letterSpacing: '0.07em' }}
                  >
                    {product.description}
                  </p>
                  
                  {/* Price and Black Button Row */}
                  <div className="flex items-center justify-between">
                    {/* Price */}
                    <span 
                      className="text-xl font-bold text-gray-900 font-geologica"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      LKR {product.price.toFixed(2)}
                    </span>
                    
                    {/* Black Rounded Button with Yellow Arrow */}
                    <Link href={`/Products-Details?id=${product.id}`}>
                      <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="#FCC900"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW - Carousel/Slider with Full Image Display */}
        <div className="block md:hidden">
          {/* Mobile Section Header */}
          <div className="flex flex-col mb-6">
            <div className="text-left mb-4">
              <h2 
                className="text-2xl font-bold tracking-tight font-geologica"
                style={{ color: '#FCC900', letterSpacing: '0.07em' }}
              >
                Latest Arrivals
              </h2>
              <p 
                className="text-sm text-black font-geologica font-bold mt-1"
                style={{ letterSpacing: '0.07em' }}
              >
                Fresh styles just dropped
              </p>
            </div>
            
            <div className="flex justify-end mb-4">
              <Link 
                href="/Products"
                className="inline-flex items-center gap-1 transition-all duration-300 font-medium group font-geologica text-sm"
                style={{ color: '#FCC900', letterSpacing: '0.07em' }}
              >
                View All
                <svg 
                  className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#FCC900' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Carousel Container */}
          <div className="relative">
            {/* Left Navigation Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 text-white p-3 rounded-full hover:bg-black transition-all duration-300 ml-2"
              aria-label="Previous product"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 text-white p-3 rounded-full hover:bg-black transition-all duration-300 mr-2"
              aria-label="Next product"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>

            {/* Carousel Slides */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {latestProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="w-full flex-shrink-0 px-1"
                  >
                    <div className="group bg-white rounded-[20px] overflow-hidden transition-all duration-300 font-geologica">
                      {/* Mobile Image Container - FULL IMAGE DISPLAY */}
                      <div className="relative overflow-hidden bg-white-100 rounded-t-[20px]">
                        {/* Full Image Display - No cropping */}
                        <div className="relative w-full" style={{ height: 'auto', minHeight: '350px' }}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={500}
                            className="w-full h-auto object-contain"
                            priority={index === currentIndex}
                          />
                        </div>
                        
                        {/* Cart Icon */}
                        <button className="absolute top-4 left-4 bg-black/60 text-white p-2 rounded-full hover:bg-black hover:scale-110 transition-all duration-300">
                          <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                            />
                          </svg>
                        </button>

                        {/* Slide Counter */}
                        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full">
                          {index + 1} / {latestProducts.length}
                        </div>
                      </div>

                      {/* Mobile Description Container */}
                      <div className="px-5 py-5 font-geologica">
                        {/* Product Name */}
                        <h3 
                          className="font-bold text-lg mb-2 font-geologica"
                          style={{ color: '#FCC900', letterSpacing: '0.07em' }}
                        >
                          {product.name}
                        </h3>
                        
                        {/* Product Description */}
                        <p 
                          className="text-gray-800 text-sm mb-4 leading-relaxed font-geologica"
                          style={{ letterSpacing: '0.07em' }}
                        >
                          {product.description}
                        </p>
                        
                        {/* Price and Black Button Row */}
                        <div className="flex items-center justify-between">
                          {/* Price */}
                          <span 
                            className="text-xl font-bold text-gray-900 font-geologica"
                            style={{ letterSpacing: '0.07em' }}
                          >
                            LKR {product.price.toFixed(2)}
                          </span>
                          
                          {/* Black Rounded Button */}
                          <Link href={`/Products-Details?id=${product.id}`}>
                            <button className="bg-black text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="#FCC900"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {latestProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-black scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Instructions */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 font-medium">
              Swipe or tap arrows to browse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArrivals;