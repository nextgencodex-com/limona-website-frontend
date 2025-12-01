import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const LatestArrivals = () => {
  // Sample data - current price
  const latestProducts: Product[] = [
    {
      id: '1',
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract.png',
      category: 'Jackets',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
    {
      id: '2',
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract (1).png',
      category: 'Dresses',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
    {
      id: '3',
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract (2).png',
      category: 'Tops',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
    {
      id: '4',
      name: 'Vintage Denim Jacket',
      price: 3500.00,
      image: '/images/Vintage-Jacket/Subtract (3).png',
      category: 'Bottoms',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.'
    },
  ];

  return (
    <section className="latest-arrivals py-12 bg-white font-geologica">
      <div className="container mx-auto px-4">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArrivals;