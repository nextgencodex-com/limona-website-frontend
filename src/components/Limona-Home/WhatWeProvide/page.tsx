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
    <section className="what-we-provide py-16 bg-white font-geologica">
      <div className="container mx-auto px-4">
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
                onClick={() => setActiveDot(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeDot 
                    ? 'bg-black scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Any Question Part - Two Column Layout */}
        <div className="bg-black rounded-4xl p-2">
          <h3 
            className="text-3xl font-bold text-center mb-12"
            style={{ color: '#FCC900', letterSpacing: '0.07em' }}
          >
            Any Questions?
          </h3>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Left Column - Questions & Answers with Accordion */}
            <div className="space-y-8">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  className="pb-6"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                  >
                    <h4 
                      className="font-semibold text-lg text-white flex-1"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      {faq.question}
                    </h4>
                    <svg
                      className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${
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
                      openFAQ === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p 
                      className="text-gray-300 text-sm"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column - Overlapping Images */}
            <div className="relative flex items-center justify-center h-full">
              {/* First Image */}
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
              
              {/* Second Image */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;