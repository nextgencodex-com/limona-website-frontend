"use client";

import React from "react";
import Image from "next/image";

interface Photo {
  id: string;
  name: string;
  image: string;
  category: string;
}

const PhotoWall = () => {
  const photos: Photo[] = [
    {
      id: '1',
      name: 'Aesthetic Collection',
      image: '/images/Photo-Wall/Frame.png',
      category: 'Aesthetic'
    },
    {
      id: '2',
      name: 'Freshish Style',
      image: '/images/Photo-Wall/Frame (1).png',
      category: 'Freshish'
    },
    {
      id: '3',
      name: 'Original Design',
      image: '/images/Photo-Wall/Frame (2).png',
      category: 'Original'
    },
    {
      id: '4',
      name: 'Authentic Look',
      image: '/images/Photo-Wall/Frame (3).png',
      category: 'Authentic'
    },
    {
      id: '5',
      name: 'Killing Outfit',
      image: '/images/Photo-Wall/Frame (4).png',
      category: 'Killing'
    },
    {
      id: '6',
      name: 'Treated Fashion',
      image: '/images/Photo-Wall/Frame (5).png',
      category: 'Treated'
    },
    {
      id: '7',
      name: 'Bloom Overpainted',
      image: '/images/Photo-Wall/Frame (6).png',
      category: 'Bloom'
    },
    {
      id: '8',
      name: 'Sugar Liquid',
      image: '/images/Photo-Wall/Frame (7).png',
      category: 'Sugar'
    },
    {
      id: '9',
      name: 'Quotits Style',
      image: '/images/Photo-Wall/Frame (8).png',
      category: 'Quotits'
    },
    {
      id: '10',
      name: 'Guidelines',
      image: '/images/Photo-Wall/Frame (9).png',
      category: 'Guidelines'
    },
  ];

  return (
    <section className="py-12 bg-white font-geologica">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-left mb-8">
          <h2 
            className="text-3xl font-bold mb-3"
            style={{ color: "#FCC900", letterSpacing: "0.07em" }}
          >
            Photo Wall
          </h2>
        </div>

        {/* BENTO PHOTO GRID */}
        <div className="grid grid-cols-12 gap-3">

          {/* ROW 1 (4 equal images) */}
          <div className="col-span-12 sm:col-span-3 h-32 rounded-2xl overflow-hidden relative group">
            <Image 
              src={photos[0].image} 
              alt={photos[0].name} 
              width={300} 
              height={300} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="col-span-12 sm:col-span-3 h-32 rounded-2xl overflow-hidden relative group">
            <Image 
              src={photos[1].image} 
              alt={photos[1].name} 
              width={300} 
              height={300} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="col-span-12 sm:col-span-3 h-32 rounded-2xl overflow-hidden relative group">
            <Image 
              src={photos[2].image} 
              alt={photos[2].name} 
              width={300} 
              height={300} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="col-span-12 sm:col-span-3 h-32 rounded-2xl overflow-hidden relative group">
            <Image 
              src={photos[3].image} 
              alt={photos[3].name} 
              width={300} 
              height={300} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* ROW 2 (vert + wide + vert) - BOTH EDGES ALIGNED */}
          <div className="col-span-12 flex gap-3 items-stretch justify-between">
            {/* Left Vertical Image - Aligned to left edge */}
            <div className="h-80 w-[80px] rounded-[20px] overflow-hidden relative group">
              <Image 
                src={photos[4].image} 
                alt={photos[4].name} 
                width={80} 
                height={320}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"  
              />
            </div>

            {/* Center Wide Image - Takes remaining space */}
            <div className="h-80 flex-1 mx-3 rounded-[20px] overflow-hidden relative group">
              <Image 
                src={photos[5].image} 
                alt={photos[5].name} 
                width={600} 
                height={320} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Vertical Image - Aligned to right edge */}
            <div className="h-80 w-[80px] rounded-[20px] overflow-hidden relative group">
              <Image 
                src={photos[6].image} 
                alt={photos[6].name} 
                width={80} 
                height={320} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* ROW 3 (3 equal images) */}
          <div className="col-span-12 sm:col-span-4 h-40 rounded-2xl overflow-hidden relative group">
            <Image 
              src={photos[7].image} 
              alt={photos[7].name} 
              width={400} 
              height={400} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="col-span-12 sm:col-span-4 h-40 rounded-2xl overflow-hidden relative group">
            <Image 
              src={photos[8].image} 
              alt={photos[8].name} 
              width={400} 
              height={400} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="col-span-12 sm:col-span-4 h-40 rounded-2xl overflow-hidden relative group">
            <Image 
              src={photos[9].image} 
              alt={photos[9].name} 
              width={400} 
              height={400} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* LIMITED EDITION SECTION - REDUCED IMAGE SIZES */}
        <div className="bg-black rounded-4xl p-2 mt-30">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8 flex flex-col justify-center pt-20">
              <div>
                <h3 
                  className="text-3xl font-bold mb-6"
                  style={{ color: '#FCC900', letterSpacing: '0.07em' }}
                >
                  Limited Edition Collection
                </h3>
                <p 
                  className="text-white text-lg mb-8"
                  style={{ letterSpacing: '0.07em' }}
                >
                  Exclusive designs available for a limited time.<br/>
                  Don't miss out!
                </p>
                <button
                  className="bg-yellow-400 text-black px-5 py-2.5 rounded-full font-semibold text-base hover:bg-yellow-300 transition flex items-center gap-2"
                  style={{ letterSpacing: '0.07em' }}
                >
                  Shop Edition Limited
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Column - Overlapping Images */}
            <div className="relative flex items-center justify-center h-[368px]">
              {/* First Image */}
              <div 
                className="relative overflow-hidden"
                style={{
                  width: '400px',
                  height: '600px',
                  borderRadius: '25px',
                  top: '-108px',
                  right: '-94px',
                  zIndex: 20
                }}
              >
                <Image
                  src="/images/Photo-Wall/female-model-posing-sportswear 1.png"
                  alt="Limited Edition Fashion"
                  width={300}
                  height={550}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              
              {/* Second Image */}
              <div 
                className="absolute overflow-hidden"
                style={{
                  width: '600px',
                  height: '380px',
                  borderRadius: '25px',
                  top: '-4px',
                  right: '-110px',
                  zIndex: 10
                }}
              >
                <Image
                  src="/images/Any-Question/Group 72.png"
                  alt="Limited Edition Overlay"
                  width={600}
                  height={380}
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

export default PhotoWall;