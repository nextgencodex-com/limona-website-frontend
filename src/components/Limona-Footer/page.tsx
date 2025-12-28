import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white mt-16 font-geologica tracking-[0.07em]">

      {/* DESKTOP FOOTER */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className="grid grid-cols-4 gap-8">

            {/* Image Section */}
            <div className="col-span-1">
              <div className="w-full h-50 rounded-lg flex items-center justify-center relative">
                <Image 
                  src="/images/Footer/image 11.png"
                  alt="LIMONA Fashion Background"
                  width={350}
                  height={400}
                  className="w-[350px] h-[400px] object-cover rounded-lg"
                />
                <div className="absolute top-4 right-15">
                  <Image 
                    src="/images/Footer/image 9.png"
                    alt="LIMONA Fashion Logo"
                    width={200}
                    height={200}
                    className="w-[200px] h-[200px] object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Brand with Social Media Icons */}
            <div className="col-span-1">
              <h3 className="text-4xl font-bold text-[#FACC15] mb-4 tracking-[0.07em]">LIMONA</h3>
              <p className="text-black text-sm tracking-[0.07em] mb-6">
                Where style meets expression. <br/>
                Premium unisex clothing designed <br/>
                to celebrate who you are in every <br/>
                moment.
              </p>
              
              {/* Social Media Icons - Desktop */}
              <div className="flex space-x-4">
                {/* Facebook - Blue by default */}
                <a 
                  href="https://facebook.com/limonaapparel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* Instagram - Gradient by default */}
                <a 
                  href="https://www.instagram.com/limo.na2025?igsh=a2cyeXJmb2VrbHV2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    {/* Instagram Gradient Background */}
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#833AB4', stopOpacity: 1}} />
                        <stop offset="50%" style={{stopColor: '#FD1D1D', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#FCAF45', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* TikTok - Black by default */}
                <a 
                  href="https://www.tiktok.com/@limona20045?_r=1&_t=ZS-927ox8u6mwh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-[0.07em]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/Products" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/Customize-Your-Own" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">
                    Customize
                  </Link>
                </li>
                <li>
                  <Link href="/About" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-[0.07em]">Contact Us</h4>
              <div className="text-sm text-gray-600 space-y-3">
                <div className="flex items-center space-x-3 tracking-[0.07em]">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(+94) 76 590 8361</span>
                </div>

                <div className="flex items-center space-x-3 tracking-[0.07em]">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>limonaclothing@gmail.com</span>
                </div>

                <div className="flex items-center space-x-3 tracking-[0.07em]">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Galle, Srilanka</span>
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-black mt-8 pt-8 text-center text-sm">
          © 2025 LIMONA. All rights reserved.<br />
            <span className="text-xs">
              Design by NextGen CodeX (PVT) LTD
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE FOOTER */}
      <div className="block md:hidden">
        <div className="px-6 py-12 space-y-8 text-left">

          {/* Mobile Image */}
          <div className="relative w-full flex justify-start">
            <Image 
              src="/images/Footer/image 11.png"
              alt="Footer BG"
              width={300}
              height={360}
              className="rounded-lg object-cover"
            />
            <div className="absolute top-20 left-14">
              <Image 
                src="/images/Footer/image 9.png"
                alt="Logo"
                width={160}
                height={160}
                className="drop-shadow-lg"
              />
            </div>
          </div>

          {/* Brand with Social Media Icons - Mobile */}
          <div>
            <h3 className="text-3xl font-bold text-[#FACC15] mb-2">LIMONA</h3>
            <p className="text-sm mb-4">
              Where style meets expression. <br/>
              Premium unisex clothing designed to celebrate you.
            </p>
            
            {/* Social Media Icons - Mobile */}
            <div className="flex space-x-4">
              {/* Facebook - Blue by default */}
              <a 
                href="https://facebook.com/limonaapparel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram - Gradient by default */}
              <a 
                href="https://www.instagram.com/limo.na2025?igsh=a2cyeXJmb2VrbHV2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  {/* Instagram Gradient Background */}
                  <defs>
                    <linearGradient id="instagram-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#833AB4', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#FD1D1D', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#FCAF45', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagram-gradient-mobile)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* TikTok - Black by default */}
              <a 
                href="https://www.tiktok.com/@limona20045?_r=1&_t=ZS-927ox8u6mwh"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Products" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/Customize-Your-Own" className="text-gray-600 hover:text-gray-900">
                  Customize
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-2">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(+94) 76 590 8361</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>limonaclothing@gmail.com</span>
              </div>

              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Galle, Srilanka</span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-black mt-8 pt-8 text-center text-sm">
          © 2025 LIMONA. All rights reserved.<br />
            <span className="text-xs">
              Design by NextGen CodeX (PVT) LTD
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;