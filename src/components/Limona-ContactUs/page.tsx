"use client";

import React, { useState } from 'react';
import Header from '../Limona-Header/page';
import Footer from '../Limona-Footer/page';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I'm ${formData.name}%0A%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/94759627589?text=${whatsappMessage}`, '_blank');
  };

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
                    Contact Us
                  </h1>

                  <p 
                    className="text-xs sm:text-sm md:text-base opacity-95 tracking-[0.05em] font-geologica leading-relaxed"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    We'd love to hear from you.
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
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* LEFT SECTION - CONTACT FORM */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200 h-fit lg:h-auto flex flex-col relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                  <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you shortly</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-5 py-4 pr-12 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                        placeholder="john@example.com"
                        required
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-50 p-2 rounded-lg">
                        <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-400 resize-none transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="text-lg">Send Message via WhatsApp</span>
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Your information is secure and will be sent via WhatsApp</span>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT SECTION - WHATSAPP, FAQ */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden flex flex-col h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* WHATSAPP CHAT SECTION */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white shadow-lg m-4 relative overflow-hidden flex-shrink-0">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1.5">Chat with us on WhatsApp</h3>
                        <p className="text-xs text-white/90 leading-relaxed">
                          Get instant responses to your questions. Our team is available to help you with orders, customizations, and any inquiries.
                        </p>
                      </div>
                    </div>
                    
                    <a 
                      href="https://wa.me/94759627589"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-green-600 font-semibold py-3 px-5 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
                    >
                      <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span className="text-sm font-bold">Open WhatsApp Chat</span>
                    </a>
                  </div>
                </div>

                {/* FAQ SECTION */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-300/50 rounded-2xl p-6 md:p-8 m-4 mt-0 flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Frequently Asked Questions
                  </h3>
                  <ul className="space-y-3.5">
                    <li className="flex gap-3 items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">Shipping typically takes 5-7 business days</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">Custom orders require 2-3 weeks for production</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">We offer easy returns & exchanges</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">International shipping available worldwide</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
