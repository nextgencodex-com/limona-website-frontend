"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  name: string;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const WhatWeProvide = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // First set of services (page 1)
  const servicesPage1: Service[] = [
    {
      id: '1',
      name: 'T-Shirt',
      image: '/images/T-Shirts/Rectangle 40057.png',
    },
    {
      id: '2',
      name: 'Hoodies',
      image: '/images/Hoodies/Rectangle 40057 (1).png',
    },
    {
      id: '3',
      name: 'Shorts',
      image: '/images/Shorts/Rectangle 40057 (2).png',
    },
    {
      id: '4',
      name: 'Pants',
      image: '/images/Pants/Rectangle 40057 (3).png',
    },
    {
      id: '5',
      name: 'Oversized Fits',
      image: '/images/Oversized-Fits/Rectangle 40057 (4).png',
    },
    {
      id: '6',
      name: 'Accessories',
      image: '/images/Accessories/Rectangle 40057 (5).png',
    },
  ];

  // Second set of services (page 2)
  const servicesPage2: Service[] = [
    {
      id: '7',
      name: 'Summer Collection',
      image: '/images/T-Shirts/Rectangle 40057.png',
    },
    {
      id: '8',
      name: 'Winter Hoodies',
      image: '/images/Hoodies/Rectangle 40057 (1).png',
    },
    {
      id: '9',
      name: 'Sports Shorts',
      image: '/images/Shorts/Rectangle 40057 (2).png',
    },
    {
      id: '10',
      name: 'Denim Pants',
      image: '/images/Pants/Rectangle 40057 (3).png',
    },
    {
      id: '11',
      name: 'Oversized Tees',
      image: '/images/Oversized-Fits/Rectangle 40057 (4).png',
    },
    {
      id: '12',
      name: 'Premium Watches',
      image: '/images/Accessories/Rectangle 40057 (5).png',
    },
  ];

  // Third set of services (page 3)
  const servicesPage3: Service[] = [
    {
      id: '13',
      name: 'Limited Edition',
      image: '/images/T-Shirts/Rectangle 40057.png',
    },
    {
      id: '14',
      name: 'Zip Hoodies',
      image: '/images/Hoodies/Rectangle 40057 (1).png',
    },
    {
      id: '15',
      name: 'Casual Shorts',
      image: '/images/Shorts/Rectangle 40057 (2).png',
    },
    {
      id: '16',
      name: 'Cargo Pants',
      image: '/images/Pants/Rectangle 40057 (3).png',
    },
    {
      id: '17',
      name: 'Oversized Hoodies',
      image: '/images/Oversized-Fits/Rectangle 40057 (4).png',
    },
    {
      id: '18',
      name: 'Bags & Backpacks',
      image: '/images/Accessories/Rectangle 40057 (5).png',
    },
  ];

  // All slides with 6 images each
  const slides = [servicesPage1, servicesPage2, servicesPage3];

  // Get current page services
  const currentServices = slides[activeDot];
  
  // Calculate how many pairs we have (6 images = 3 pairs of 2)
  const totalPairs = Math.ceil(currentServices.length / 2);
  
  // Get current pair of images (2 images at a time)
  const startIndex = currentImageIndex * 2;
  const currentPair = currentServices.slice(startIndex, startIndex + 2);

  // Navigation functions for mobile image pairs
  const nextPair = () => {
    const nextIndex = currentImageIndex + 1;
    
    // If we're at the last pair of current page
    if (nextIndex >= totalPairs) {
      // Go to next page
      const nextPage = (activeDot + 1) % slides.length;
      setActiveDot(nextPage);
      setCurrentImageIndex(0); // Start from first pair of new page
    } else {
      // Go to next pair in current page
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevPair = () => {
    const prevIndex = currentImageIndex - 1;
    
    // If we're at the first pair of current page
    if (prevIndex < 0) {
      // Go to previous page
      const prevPage = activeDot === 0 ? slides.length - 1 : activeDot - 1;
      setActiveDot(prevPage);
      const prevPagePairs = Math.ceil(slides[prevPage].length / 2);
      setCurrentImageIndex(prevPagePairs - 1); // Go to last pair of previous page
    } else {
      // Go to previous pair in current page
      setCurrentImageIndex(prevIndex);
    }
  };

  // Go to specific page
  const goToPage = (pageIndex: number) => {
    setActiveDot(pageIndex);
    setCurrentImageIndex(0); // Always start from first pair when changing page
  };

  // FAQ data with questions
  const faqItems: FAQItem[] = [
    {
      question: 'Did you ship internationality?',
      answer: 'Yes, we ship worldwide. Delivery times vary by location.'
    },
    {
      question: 'How can I return or exchange an item?',
      answer: 'You can return or exchange items within 30 days of purchase. Please contact our customer service team for assistance with returns and exchanges.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers for your convenience.'
    },
    {
      question: 'How do I find my size?',
      answer: 'Check our detailed size guide available on each product page. You can also contact our support team for personalized size recommendations.'
    },
    {
      question: 'When will my order arrive?',
      answer: 'Orders typically arrive within 3-7 business days for domestic shipments and 7-14 business days for international orders, depending on your location.'
    },
  ];

  return (
    <section className="what-we-provide py-12 md:py-16 bg-white font-geologica">
      <div className="container mx-auto px-4">
        {/* DESKTOP VIEW - Hidden on mobile */}
        <div className="hidden md:block">
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 
              className="text-4xl font-bold mb-4"
              style={{ color: '#FCC900', letterSpacing: '0.07em' }}
            >
              What we can Provide
            </h2>
          </div>

          {/* Services Grid - Show 6 images for active slide */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {slides[activeDot]?.map((service) => (
              <div
                key={service.id}
                className="group"
              >
                {/* Service Container with name overlay inside */}
                <div 
                  className="relative mx-auto overflow-hidden bg-gray-100"
                  style={{
                    width: '360px',
                    height: '140px',
                    borderRadius: '80px'
                  }}
                >
                  {/* Service Image */}
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={360}
                    height={140}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Service Name - Transparent overlay */}
                  <div className="absolute bottom-0 left-0 right-0 py-3">
                    <h3 
                      className="font-semibold text-lg text-center text-white"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      {service.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeDot 
                      ? 'bg-black scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW - Visible only on mobile */}
        <div className="block md:hidden">
          {/* Mobile Section Header */}
          <div className="text-left mb-6">
            <h2 
              className="text-2xl font-bold mb-2"
              style={{ color: '#FCC900', letterSpacing: '0.07em' }}
            >
              What we can Provide
            </h2>
          </div>

          {/* Mobile Services - 2 Images with Navigation */}
          <div className="mb-8">
            {/* Navigation Header */}
            <div className="flex justify-between items-center mb-3">
              <button
                onClick={prevPair}
                className="flex items-center text-gray-600 hover:text-black transition-colors p-2"
                aria-label="Previous pair"
              >
                <svg 
                  className="w-4 h-4" 
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
              
              <div className="text-center">
                <span className="text-xs font-medium text-gray-700">
                  {activeDot + 1}/{slides.length} • {currentImageIndex + 1}/{totalPairs}
                </span>
              </div>
              
              <button
                onClick={nextPair}
                className="flex items-center text-gray-600 hover:text-black transition-colors p-2"
                aria-label="Next pair"
              >
                <svg 
                  className="w-4 h-4" 
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
            </div>

            {/* Current Pair of Images */}
            <div className="space-y-3 mb-4">
              {currentPair.map((service) => (
                <div
                  key={service.id}
                  className="group"
                >
                  {/* Mobile Service Container */}
                  <div className="relative overflow-hidden bg-gray-100 rounded-[30px] h-24">
                    {/* Service Image */}
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={96}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Service Name */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 
                        className="font-semibold text-sm text-center text-white px-3"
                        style={{ letterSpacing: '0.07em', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                      >
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Page Navigation Dots */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeDot 
                        ? 'bg-black scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Any Question Part - CLEANED UP MOBILE VERSION */}
        <div className="bg-black rounded-3xl md:rounded-4xl p-4 md:p-2 mt-8 md:mt-0">
          <h3 
            className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12"
            style={{ color: '#FCC900', letterSpacing: '0.07em' }}
          >
            Any Questions?
          </h3>
          
          {/* Mobile: Vertical Layout, Desktop: Two Columns */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start">
            {/* Left Column - Questions & Answers with Accordion */}
            <div className="space-y-4 md:space-y-6">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  className="pb-3 md:pb-4 border-b border-gray-800 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left focus:outline-none py-2"
                  >
                    <h4 
                      className="font-medium md:font-semibold text-sm md:text-lg text-white flex-1 pr-3 md:pr-4"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      {faq.question}
                    </h4>
                    <svg
                      className={`w-4 h-4 md:w-5 md:h-5 text-yellow-400 transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-32 md:max-h-40 opacity-100 mt-2 md:mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p 
                      className="text-gray-300 text-xs md:text-sm leading-relaxed"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column - Clean Image Layout */}
            <div className="relative w-full">
              {/* Desktop Image Layout */}
              <div className="hidden lg:flex items-center justify-center h-full">
                {/* Group 72 Image - LARGE and BEHIND */}
                <div 
                  className="absolute overflow-hidden"
                  style={{
                    width: '500px',
                    height: '500px',
                    borderRadius: '25px',
                    top: '-120px',
                    right: '-133px',
                    zIndex: 10
                  }}
                >
                  <Image
                    src="/images/Any-Question/Group 72.png"
                    alt="Any-Question Overlay"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                
                {/* Fashion (2) Image - SMALLER and IN FRONT */}
                <div 
                  className="relative overflow-hidden"
                  style={{
                    width: '400px',
                    height: '400px',
                    borderRadius: '25px',
                    top: '-60px',
                    right: '-150px',
                    zIndex: 20
                  }}
                >
                  <Image
                    src="/images/Any-Question/Fashion (2).png"
                    alt="Any-Question"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Mobile Image Layout - CLEAN VERSION */}
              <div className="block lg:hidden">
                {/* Container for overlapping images */}
                <div className="relative w-full mx-auto" style={{ height: '280px' }}>
                  {/* Group 72 Image - LARGE and BEHIND */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    <div className="relative w-full h-full overflow-hidden rounded-[20px]">
                      <Image
                        src="/images/Any-Question/Group 72.png"
                        alt="Any-Question Overlay"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Fashion (2) Image - SMALLER and IN FRONT */}
                  <div 
                    className="absolute w-70 h-70 z-10"
                    style={{
                      top: '10px',
                      right: '50px',
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[18px] shadow-xl">
                      <Image
                        src="/images/Any-Question/Fashion (2).png"
                        alt="Any-Question"
                        fill
                        className="object-cover"
                        sizes="192px"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;