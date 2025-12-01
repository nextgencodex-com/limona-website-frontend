"use client"

import Image from "next/image"
import { ArrowRight, ShoppingCart } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden">
      

      
      {/* Top spacer for navbar */}
      <div className="h-32" />

      {/* Main hero content */}
      <div className="relative w-full px-66">
        {/* Background texture  */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 -z-10 pointer-events-none">
          <Image
            src="/images/Hero/bgtxtur.png"
            alt=""
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20 py-12 lg:py-0">
          {/* Left Column: */}
          <div className="relative z-20 flex-1.6 space-y-8">
            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black font-geologica tracking-widest text-black leading-none">
                <span className="block">Where Style</span>
                <span className="block mt-1 lg:mt-0">
                  <span className="block text-black">Meets</span>
                  <span className="block text-yellow-400">Expression</span>
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base text-gray-700 max-w-md leading-relaxed">
              Discover premium unisex fashion designed to celebrate individuality. From everyday essentials to statement
              pieces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-200">
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white text-black border-2 border-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors duration-200">
                Customize Yours
              </button>
            </div>

            {/* Sparkle decorations */}
            <div className="absolute left-0 bottom100 opacity-70 w-16 h-16">
              <Image
                src="/images/Hero/hero3.png"
                alt="Decorative star"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: Products */}
          <div className="relative flex-[0.4] w-full h-[150px] lg:h-full flex items-center justify-end pr-0 lg:pr-0 self-center">
            {/* Hoodie  */}
            <div className="absolute right-0 lg:right-4 top-0 bottom-0 flex items-center justify-end z-0 pointer-events-none">
              <div className="w-80 sm:w-[560px] lg:w-[820px] translate-x-8 sm:translate-x-12 lg:translate-x-24">
                <Image
                  src="/images/Hero/hero1.png"
                  alt="Premium gradient hoodie"
                  width={1300}
                  height={1480}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Smartwatch  */}
            <div className="absolute right-8 lg:right-16 bottom-12 lg:bottom-20 w-64 sm:w-72 lg:w-[420px] drop-shadow-2xl z-20 transform translate-x-6 lg:translate-x-16">
              <Image
                src="/images/Hero/hero2.png"
                alt="Premium smartwatch"
                width={560}
                height={640}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Center sparkles */}
            {/* Star */}
            <div className="absolute top-8 right-12 lg:right-20 w-24 h-24 animate-pulse">
              <Image
                src="/images/Hero/hero3.png"
                alt="Decorative star"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Diagonal Banners */}
      <div className="relative -mt-16 overflow-hidden">
        <div className="relative h-52 flex flex-col items-center justify-center gap-4">
          {/* Primary black banner */}
          <div className="absolute w-full transform -rotate-5 origin-center bg-black text-white py-5 px-8">
            <div className="flex gap-16 sm:gap-24 text-sm sm:text-base lg:text-lg font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden">
              <span>Authentic</span>
              <span>Trusted</span>
              <span>Premium</span>
              <span>Quality</span>
              <span>Confidence</span>
              <span>Original</span>
              <span>Luxury</span>
              <span>Authentic</span>
            </div>
          </div>

          {/* Secondary white banner */}
          <div className="absolute w-full transform rotate-6 origin-center bg-white border-2 border-black text-black py-4 px-8 mt-12">
            <div className="flex gap-16 sm:gap-24 text-sm sm:text-base lg:text-lg font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden">
              <span>Authentic</span>
              <span>Trusted</span>
              <span>Premium</span>
              <span>Quality</span>
              <span>Confidence</span>
              <span>Original</span>
              <span>Luxury</span>
              <span>Authentic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
