"use client";

import React from 'react';
import Image from 'next/image';
import Header from '../Limona-Header/page';
import Footer from '../Limona-Footer/page';
import MissionSection from './mission-section';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="
                relative 
                rounded-2xl md:rounded-[35px] 
                overflow-hidden md:overflow-visible
                shadow-lg md:shadow-xl 
                border border-gray-200 md:border-gray-300
                h-[200px] sm:h-[220px] md:h-[294px]
              "
            >
              {/* FULL BACKGROUND IMAGE */}
              <img
                src="/images/Products/Frame 40.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[35px]"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/1920x600/1a1a1a/ffffff?text=Fashion+Collection`;
                }}
              />

              {/* LEFT GRADIENT OVERLAY (text readable) */}
              <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/60 via-black/40 md:via-black/30 to-transparent rounded-l-2xl md:rounded-l-[35px]"></div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center md:justify-start h-full">
                {/* LEFT TEXT - Mobile centered, desktop left */}
                <div className="lg:w-1/2 p-6 sm:p-8 md:p-12 text-white text-center lg:text-left flex flex-col justify-center">
                  <h1 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight tracking-[0.05em]"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    About LIMONA
                  </h1>

                  <p 
                    className="text-xs sm:text-sm md:text-base opacity-95 tracking-[0.05em] font-geologica leading-relaxed"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    Where fashion meets expression, and style knows no boundaries
                  </p>
                </div>

                {/* RIGHT MODEL IMAGE - Hidden on mobile, shown on lg+ */}
                <div className="hidden lg:block lg:w-1/2 relative flex items-center justify-end h-full">
                  <div className="relative" style={{ marginRight: '40px' }}>
                    <img
                      src="/images/Products/portrait 1.png"
                      className="absolute left-50 -top-14 h-[250px] md:h-[349px] object-contain relative z-20"
                      alt="Model"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x800/EEE/31343C?text=Fashion+Model`;
                      }}
                      style={{
                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <main className="flex-grow">
  <div className="container mx-auto px-4 py-8 md:py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start bg-transparent">

      {/* LEFT SECTION – Overlapping Photos */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[620px] overflow-visible">

        {/* Background Grid Photo */}
        <div
          className="absolute"
          style={{
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            zIndex: 5,
          }}
        >
          <Image
            src="/images/Hero/bgtxtur.png"
            alt="Background Grid"
            width={500}
            height={320}
            className="object-cover w-full h-full rounded-2xl md:rounded-none"
            priority
          />
        </div>

        {/* Foreground Model Photo */}
        <div
          className="absolute w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            zIndex: 20,
          }}
        >
          <Image
            src="/images/Photo-Wall/female-model-posing-sportswear 1.png"
            alt="Model"
            width={420}
            height={630}
            className="object-cover w-full h-full rounded-2xl md:rounded-none"
            priority
          />
        </div>
      </div>

      {/* RIGHT SECTION – Text */}
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 tracking-[0.07em] leading-tight">
          A Style Statement for <span className="text-[#FACC15]">Every Moment</span>
        </h1>

        <div className="space-y-4 md:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg tracking-[0.05em] md:tracking-[0.07em] leading-relaxed">
          <p>
            Limona began its story on July 10th, 2025, guided by a young dreamer with a bold vision – Anju Subhashini, just 21 at the time. What started as a spark of inspiration has grown into a vibrant fashion home for women, men, and anyone who loves expressing themselves through style.
          </p>

          <p>
            At Limona, we design clothing and accessories that blend confidence with comfort. Every piece is created with thoughtful detail, fresh energy, and a love for everyday elegance. Our goal is simple: to offer fashion that feels good, fits beautifully, and empowers you to step out as the best version of yourself.
          </p>

          <p>
            Though Limona is still young, the dream is blooming fast. With your support, we're shaping our next big chapter – the opening of our very own physical store in 2028. Until then, every order, every message, and every customer becomes a thread in our growing story.
          </p>

          <p>
            Thank you for walking beside us from the very beginning. Welcome to Limona – where your style finds its shine.
          </p>
        </div>
      </div>

    </div>
  </div>
</main>

<MissionSection />

<Footer />
    </div>
  );
}
