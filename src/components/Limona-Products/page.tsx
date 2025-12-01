"use client";

import React, { useState } from 'react';

// INTERFACE DEFINITIONS
// Define what a Product object looks like
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'all' | 'men' | 'women' | 'accessories';
}

// SAMPLE PRODUCT DATA
// This is temporary data - in a real app, you would fetch this from an API
const productsData: Product[] = [
  { 
    id: 1, 
    name: 'Classic Cotton Tee', 
    description: 'Premium self-cotton\'s sales perfect for everyday usage. Ultra soft.', 
    price: 'LK$1500.00', 
    category: 'men' 
  },
  { 
    id: 2, 
    name: 'Urban Hoodie', 
    description: 'Comfortable pullover hoodie with kangaroo pocket. Perfect for casual outings.', 
    price: 'LK$3500.00', 
    category: 'men' 
  },
  { 
    id: 3, 
    name: 'Vintage Denim Jacket', 
    description: 'Classic denim jacket with a modern twist. Distressed finish.', 
    price: 'LK$4000.00', 
    category: 'women' 
  },
  { 
    id: 4, 
    name: 'Relaxed Fit Joggers', 
    description: 'Comfortable joggers with elastic waistband. Perfect for casual wear.', 
    price: 'LK$2200.00', 
    category: 'men' 
  },
  { 
    id: 5, 
    name: 'Cotton Socks Pack', 
    description: 'Pack of 3 comfortable cotton socks. Various colors available.', 
    price: 'LK$1200.00', 
    category: 'accessories' 
  },
  { 
    id: 6, 
    name: 'Oversized Sweater', 
    description: 'Gray oversized sweater for maximum comfort and style.', 
    price: 'LK$3500.00', 
    category: 'women' 
  },
  { 
    id: 7, 
    name: 'Graphic Print Tee', 
    description: 'Bold graphics print on premium cotton. Make a statement.', 
    price: 'LK$2500.00', 
    category: 'men' 
  },
  { 
    id: 8, 
    name: 'Classic Baseball Cap', 
    description: 'Adjustable canvas cap with embroidered logo. One size fits all.', 
    price: 'LK$1700.00', 
    category: 'accessories' 
  },
  { 
    id: 9, 
    name: 'Leather Tote Bag', 
    description: 'Premium leather tote bag with multiple compartments. Stylish and practical.', 
    price: 'LK$2800.00', 
    category: 'accessories' 
  },
];

// MAIN COMPONENT
const LimonaProducts = () => {
  // STATE VARIABLES
  // State to track selected category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // State to track price range filter [min, max]
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 4500]);
  
  // State to track search query
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // State to track if filter sidebar is open on mobile
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // ========== FILTER LOGIC ==========
  // Filter products based on user selections
  const filteredProducts = productsData.filter(product => {
    // Check if product matches selected category
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    // Extract price number from string (remove 'LK$' and commas)
    const productPrice = parseFloat(product.price.replace('LK$', '').replace(',', ''));
    
    // Check if product price is within selected range
    const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
    
    // Check if product name or description contains search query
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Product must match ALL conditions to be displayed
    return matchesCategory && matchesPrice && matchesSearch;
  });

  // HELPER FUNCTIONS
  // Reset all filters to their default values
  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([1000, 4500]);
    setSearchQuery('');
  };

  // CATEGORY OPTIONS
  // Array of category options for the filter
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'accessories', label: 'Accessories' },
  ];

  // COMPONENT RENDER
  return (
    <div className="min-h-screen bg-gray-50 font-geologica">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-gray-300">
            Discover premium fashion for every style
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* MOBILE FILTER TOGGLE (Visible only on mobile) */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              {/* Filter/Close icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {isFilterOpen ? (
                  // Close icon (X)
                  <path d="M18 6 6 18M6 6l12 12"/>
                ) : (
                  // Filter icon
                  <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
                )}
              </svg>
              {isFilterOpen ? 'Close Filters' : 'Show Filters'}
            </button>
          </div>

          {/* FILTERS SIDEBAR */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Filters
                </h3>
                
                {/* SEARCH FILTER */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search products
                  </label>
                  <div className="relative">
                    {/* Search icon */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                    
                    {/* Search input field */}
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent font-geologica"
                    />
                  </div>
                </div>

                {/* CATEGORY FILTER */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">
                    Category
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`
                          block w-full text-left px-4 py-2 rounded-lg transition-colors font-geologica
                          ${selectedCategory === category.value
                            ? 'bg-gray-800 text-white'  // Selected style
                            : 'text-gray-700 hover:bg-gray-100'  // Unselected style
                          }
                        `}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE RANGE FILTER */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-700 mb-3">
                    Price Range
                  </h4>
                  <div className="space-y-4">
                    {/* Display current price range */}
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>LK${priceRange[0]}</span>
                      <span>LK${priceRange[1]}</span>
                    </div>
                    
                    {/* Dual range sliders for min and max price */}
                    <div className="space-y-2">
                      {/* Minimum price slider */}
                      <input
                        type="range"
                        min="1000"
                        max="4500"
                        step="100"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-800"
                      />
                      
                      {/* Maximum price slider */}
                      <input
                        type="range"
                        min="1000"
                        max="4500"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-800"
                      />
                    </div>
                  </div>
                </div>

                {/* RESET FILTERS BUTTON */}
                <button
                  onClick={resetFilters}
                  className="w-full py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-colors font-geologica"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCTS GRID AREA */}
          <div className="lg:w-3/4">
            
            {/* RESULTS INFO */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-bold">{filteredProducts.length}</span> products
              </p>
              
              {/* Show message if no products found */}
              {filteredProducts.length === 0 && (
                <p className="text-red-500 font-medium">
                  No products found. Try adjusting your filters.
                </p>
              )}
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Product Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl text-gray-400">🛍️</div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="p-6">
                    {/* Product Title and Category Badge */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {product.name}
                      </h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full capitalize">
                        {product.category}
                      </span>
                    </div>
                    
                    {/* Product Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Price and Action Button */}
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-2xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <button className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors font-geologica">
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* EMPTY STATE (When no products found) */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors font-geologica"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimonaProducts;