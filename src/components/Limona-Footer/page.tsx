import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white mt-16 font-geologica tracking-[0.07em]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Image Section - Left Side */}
          <div className="col-span-1">
            <div className="w-full h-50 rounded-lg flex items-center justify-center relative">
              {/* Background Image */}
              <Image 
                src="/images/Footer/image 11.png"
                alt="LIMONA Fashion Background"
                width={350}
                height={400}
                className="w-[350px] h-[400px] object-cover rounded-lg"
              />
              
              {/* Front Centered Image */}
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

          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-4xl font-bold text-[#FACC15] mb-4 tracking-[0.07em]">LIMONA</h3>
            <p className="text-black text-sm tracking-[0.07em]">
              Where style meets expression. <br/>
              Premium unisex clothing designed <br/>
              to celebrate who you are in every <br/>
              moment.
            </p>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-[0.07em]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">Customize</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 tracking-[0.07em]">About Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-[0.07em]">Contact Us</h4>
            <div className="text-sm text-gray-600 space-y-3">
              {/* Phone with Icon */}
              <div className="flex items-center space-x-3 tracking-[0.07em]">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(+12) 808 10 1900</span>
              </div>

              {/* Email with Icon */}
              <div className="flex items-center space-x-3 tracking-[0.07em]">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@limona.com</span>
              </div>

              {/* Address with Icon */}
              <div className="flex items-center space-x-3 tracking-[0.07em]">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Main Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black mt-8 pt-8">
          <div className="text-center">
            <div className="text-sm text-black tracking-[0.07em]">
              © 2025 LIMONA. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;