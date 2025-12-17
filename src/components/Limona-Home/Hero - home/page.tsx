"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Left Section: Full text block
const LeftSection = () => (
  <div className="relative z-20 flex-1 space-y-6 text-center lg:text-left">
    {/* Background texture */}
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/Hero/bgtxtur.png"
        alt=""
        fill
        className="object-cover opacity-90"
        priority
      />
    </div>

    {/* Main Heading */}
    <div className="space-y-1">
      <h1 className="hero-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-geologica tracking-widest text-black leading-none">
        <span className="block whitespace-nowrap">Where Style</span>
        <span className="block mt-1 lg:mt-0">
          <span className="block text-black">Meets</span>
          <span className="block text-yellow-400">Expression</span>
        </span>
      </h1>
    </div>

    
    <p className="hero-subtext text-base text-gray-700 max-w-full sm:max-w-md leading-relaxed">
      Discover premium unisex fashion designed to celebrate individuality. From everyday essentials to statement
      pieces.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
      <Link href="/Products">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-200">
          Shop Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
      <Link href="/Customize-Your-Own">
        <button className="bg-white text-black border-2 border-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors duration-200">
          Customize Yours
        </button>
      </Link>
    </div>
  </div>
)

// Right Section: Hoodie + watch + sparkles
const RightSection = () => (
  <div className="relative flex-none w-full lg:w-[500px] h-[38vh] sm:h-[720px] lg:h-full flex items-center justify-center lg:justify-end pr-0 lg:pr-0 self-center overflow-visible">

    {/* Hoodie */}
    <div className="relative lg:absolute top-0 bottom-0 flex items-center justify-center lg:justify-end z-10 pointer-events-none">
      <div className="w-[620px] sm:w-[520px] md:w-[760px] lg:w-[980px] translate-x-6 sm:translate-x-12 md:translate-x-16 lg:translate-x-40">
        <Image
          src="/images/Hero/hero1.png"
          alt="Premium gradient hoodie"
          width={1300}
          height={1480}
          className="hoodie-img w-full h-auto max-h-[52vh] sm:max-h-none drop-shadow-2xl"
          priority
        />
      </div>
    </div>

    {/* Smartwatch */}
    <div className="absolute right-50 sm:right-8 lg:right-90 bottom-[-1px] sm:bottom-[-28px] lg:bottom-[-260px] w-[320px] sm:w-96 lg:w-[520px] drop-shadow-2xl z-50 translate-x-0 sm:-translate-x-8 md:translate-x-8 lg:translate-x-20">
      <Image
        src="/images/Hero/hero2.png"
        alt="Premium smartwatch"
        width={560}
        height={640}
        className="watch-img w-full h-auto max-h-[32vh] sm:max-h-none"
        priority
      />
    </div>

    {/* Sparkles */}
    <div className="block sm:block absolute top-8 right-5 lg:right-1 w-24 h-24 animate-pulse">
      <Image
        src="/images/Hero/hero3.png"
        alt="Decorative star"
        width={100}
        height={100}
        className="w-full h-full object-contain"
      />
    </div>

  </div>
)

// Banners Section
const BannersSection = () => (
  <div className="relative -mt-12 sm:-mt-8 overflow-hidden z-50">
    <div className="relative h-16 sm:h-56 flex flex-col items-center justify-center gap-4 z-50">

      {/* Primary black banner */}
      <div className="absolute w-full transform -rotate-5 origin-center bg-black text-white py-4 sm:py-5 px-6 sm:px-8 z-50">
        <div className="flex gap-12 sm:gap-24 text-xs sm:text-sm lg:text-lg font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden">
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
      <div className="absolute w-full transform rotate-6 origin-center bg-white border-2 border-black text-black py-1 sm:py-4 px-6 sm:px-8 mt-6 sm:mt-12 z-50">
        <div className="flex gap-12 sm:gap-24 text-xs sm:text-sm lg:text-lg font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden">
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
)

export default function HeroSection() {
  return (
    <div className="compact-hero relative min-h-screen bg-slate-50 overflow-x-hidden">

      {/* Main hero content */}
      <div className="relative w-full px-6 md:px-12 lg:px-24 xl:px-40 bg-transparent">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-40 lg:gap-96 xl:gap-[160px] py-8 sm:py-12 lg:py-0">
          <LeftSection />
          <RightSection />
        </div>
      </div>

      <BannersSection />
    </div>
  )
}