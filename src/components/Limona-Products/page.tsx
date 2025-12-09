'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Filter, X, Search, Grid3x3, Grid2x2, Grid, ChevronUp, ChevronDown, Clock, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: 'All Products' | 'Men' | 'Women' | 'Accessories';
  price: number;
  image: string;
  description: string;
  colors: string[];
  dateAdded?: string;
}

const LimonaProducts = () => {
  const router = useRouter();

  const handleSeeDetails = (productId: number) => {
    router.push(`/Products-Details?id=${productId}`);
  };

  // Sample product data with colors
  const initialProducts: Product[] = [
    {
      id: 1,
      name: 'Classic Cotton Tee',
      category: 'All Products',
      price: 1500,
      image: '/images/Products/Subtract (5).png',
      description: 'Premium soft cotton t-shirt perfect for everyday wear. Unisex design',
      colors: ['#8A38F5', '#FACC15', '#010111', '#FF0000'],
      dateAdded: '2024-01-15'
    },
    {
      id: 2,
      name: 'Urban Hoodie',
      category: 'Men',
      price: 3500,
      image: '/images/Products/Subtract (6).png',
      description: 'Comfortable pullover hoodie with adjustable drawstring.',
      colors: ['#FFFFFF', '#024023', '#F79EFF', '#FBFF00'],
      dateAdded: '2024-02-10'
    },
    {
      id: 3,
      name: 'Vintage Denim Jacket',
      category: 'Men',
      price: 4500,
      image: '/images/Products/Subtract (7).png',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.',
      colors: ['#597585', '#1E1E1E'],
      dateAdded: '2024-01-20'
    },
    {
      id: 4,
      name: 'Slim Fit Joggers',
      category: 'Men',
      price: 2200,
      image: '/images/Products/Subtract (8).png',
      description: 'Comfortable joggers with elastic waistband.Perfect for casual outings',
      colors: ['#9D8E8A', '#024023', '#7A5300', '#FBFF00'],
      dateAdded: '2024-03-05'
    },
    {
      id: 5,
      name: 'Cotton Socks Pack',
      category: 'Accessories',
      price: 1200,
      image: '/images/Products/Subtract (9).png',
      description: 'Comfortable joggers with elastic waistband.Perfect for casual outings',
      colors: ['#C00F0C', '#024023', '#110ED7', '#FBFF00'],
      dateAdded: '2024-02-28'
    },
    {
      id: 6,
      name: 'Oversized Sweater',
      category: 'Women',
      price: 3500,
      image: '/images/Products/Subtract (10).png',
      description: 'Cozy oversized sweater for maximum comfort. Perfect for chilly days.',
      colors: ['#C00F0C', '#024023', '#110ED7', '#FBFF00'],
      dateAdded: '2024-03-01'
    },
    {
      id: 7,
      name: 'Graphic Print Tee',
      category: 'All Products',
      price: 2500,
      image: '/images/Products/Subtract (11).png',
      description: 'Bold graphic print on premium cotton. Make a statement.',
      colors: ['#C00F0C', '#024023', '#252024', '#FBFF00'],
      dateAdded: '2024-01-25'
    },
    {
      id: 8,
      name: 'Classic Baseball Cap',
      category: 'Accessories',
      price: 1700,
      image: '/images/Products/Subtract (12).png',
      description: 'Adjustable cotton cap with embroidered logo. One size fits all.',
      colors: ['#C00F0C', '#887B7C', '#110ED7', '#FBFF00'],
      dateAdded: '2024-02-15'
    },
    {
      id: 9,
      name: 'Leather Tote Bag',
      category: 'Accessories',
      price: 2800,
      image: '/images/Products/Subtract (13).png',
      description: 'Premium leather tote bag with multiple compartments. Stylish and functional.',
      colors: ['#6D3B1A'],
      dateAdded: '2024-03-10'
    },
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 4500]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [gridView, setGridView] = useState<3 | 6 | 9>(9); // 3, 6, or 9 products to show
  const [sortBy, setSortBy] = useState<string>('default'); // default, price-low, price-high, newest
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false); // New state for mobile view toggle

  const categories = ['All Products', 'Men', 'Women', 'Accessories'];

  useEffect(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    let sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => new Date(b.dateAdded || '').getTime() - new Date(a.dateAdded || '').getTime());
        break;
      default:
        // Default sorting (by ID or original order)
        sorted.sort((a, b) => a.id - b.id);
        break;
    }

    setFilteredProducts(sorted);
  }, [selectedCategory, priceRange, searchTerm, products, sortBy]);

  // Limit displayed products based on gridView selection for desktop
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, gridView);
  }, [filteredProducts, gridView]);

  // For mobile: show only 4 products initially (2 per row × 2 rows), or all if showAllMobile is true
  const mobileDisplayedProducts = useMemo(() => {
    if (showAllMobile) {
      return filteredProducts.slice(0, gridView); // Use gridView limit even on mobile when showing all
    }
    return filteredProducts.slice(0, 4); // Show only 4 products initially on mobile (2 rows of 2)
  }, [filteredProducts, showAllMobile, gridView]);

  const handleResetFilters = () => {
    setSelectedCategory('All Products');
    setPriceRange([1000, 4500]);
    setSearchTerm('');
    setSortBy('default');
    setShowAllMobile(false); // Also reset the mobile view
  };

  const toggleGridView = () => {
    // Cycle through 9 → 6 → 3 → 9
    if (gridView === 9) {
      setGridView(6);
    } else if (gridView === 6) {
      setGridView(3);
    } else {
      setGridView(9);
    }
  };

  const handleSort = (sortType: string) => {
    setSortBy(sortType);
    setShowSortMenu(false);
  };

  const formatPrice = (price: number) => {
    return `LKR ${price.toLocaleString('en-US')}.00`;
  };

  // Get current sort label
  const getSortLabel = () => {
    switch (sortBy) {
      case 'price-low': return 'Price: Low to High';
      case 'price-high': return 'Price: High to Low';
      case 'newest': return 'Newest First';
      default: return 'Default Sorting';
    }
  };

  // Toggle mobile view
  const toggleMobileView = () => {
    setShowAllMobile(!showAllMobile);
  };

  return (
    <div className="min-h-screen bg-white font-geologica tracking-[0.07em]" style={{ letterSpacing: '0.07em' }}>
      {/* Hero Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="
                relative 
                rounded-[35px] 
                overflow-visible 
                shadow-xl 
                border border-gray-300 
                h-[150px] md:h-[294px]
              "
            >
              {/* FULL BACKGROUND IMAGE */}
              <img
                src="/images/Products/Frame 40.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover rounded-[35px]"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/1920x600/1a1a1a/ffffff?text=Fashion+Collection`;
                }}
              />

              {/* LEFT GRADIENT OVERLAY (text readable) */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/50 to-transparent rounded-l-[35px]"></div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">
                {/* LEFT TEXT - Mobile centered, desktop left */}
                <div className="lg:w-1/2 p-8 md:p-12 text-white text-center lg:text-left">
                  <h1 
                    className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-[0.05em]"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    Our Collections
                  </h1>

                  <p 
                    className="text-sm sm:text-lg md:text-base opacity-90 tracking-[0.05em] font-geologica"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    Discover premium fashion for every style
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

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Search, Sort, and Filters - Three buttons in a row */}
          <div className="lg:hidden mb-4">
            <div className="flex items-center justify-between gap-2 mb-4">
              {/* FILTER Toggle Button - LEFT EDGE */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="w-10 h-10 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 flex items-center justify-center border border-gray-300 bg-white"
                  title="Filters"
                >
                  <Filter size={20} />
                </button>
              </div>

              {/* Search Bar - CENTER (flexible width) */}
              <div className="flex-1 mx-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Products"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none tracking-[0.07em] text-sm font-geologica"
                    style={{ letterSpacing: '0.07em' }}
                  />
                </div>
              </div>

              {/* SORT Toggle Button - RIGHT EDGE */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="w-10 h-10 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 flex items-center justify-center border border-gray-300 bg-white"
                  title={`Sort by: ${getSortLabel()}`}
                >
                  {/* 3 Horizontal Dashes/Lines Icon */}
                  <div className="flex flex-col gap-1">
                    <div className="w-4 h-0.5 bg-current"></div>
                    <div className="w-4 h-0.5 bg-current"></div>
                    <div className="w-4 h-0.5 bg-current"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Sort Dropdown Menu */}
            {showSortMenu && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowSortMenu(false)}
                />
                
                {/* Menu - Position from RIGHT side */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs text-gray-500 font-medium tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      Sort By
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleSort('default')}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'default' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {sortBy === 'default' && (
                        <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Default Sorting</span>
                  </button>
                  
                  <button
                    onClick={() => handleSort('price-low')}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'price-low' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {sortBy === 'price-low' && (
                        <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <ChevronUp size={16} className="text-gray-500" />
                    <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Price: Low to High</span>
                  </button>
                  
                  <button
                    onClick={() => handleSort('price-high')}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'price-high' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {sortBy === 'price-high' && (
                        <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <ChevronDown size={16} className="text-gray-500" />
                    <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Price: High to Low</span>
                  </button>
                  
                  <button
                    onClick={() => handleSort('newest')}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'newest' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {sortBy === 'newest' && (
                        <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Newest First</span>
                  </button>
                </div>
              </>
            )}

            {/* Mobile Filters Panel - Categories and Price Range only */}
            {showMobileFilters && (
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mb-4 mt-4">
                {/* Category Filter in Mobile */}
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Category</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2.5 rounded-md border text-xs tracking-[0.07em] font-geologica ${selectedCategory === category ? 'bg-[#FACC15] border-[#FACC15] text-gray-900' : 'border-gray-300 text-gray-700'}`}
                        style={{ letterSpacing: '0.07em' }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range in Mobile */}
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-gray-600 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      <span>LKR {priceRange[0].toLocaleString('en-US')}</span>
                      <span>LKR {priceRange[1].toLocaleString('en-US')}</span>
                    </div>
                    
                    <input
                      type="range"
                      min="1000"
                      max="4500"
                      step="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-800"
                    />
                  </div>
                </div>

                {/* Reset Button in Mobile */}
                <button
                  onClick={handleResetFilters}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors tracking-[0.07em] text-sm font-medium font-geologica"
                  style={{ letterSpacing: '0.07em' }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

          {/* Desktop Filters Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              {/* Filters Title with Filter Icon */}
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-gray-700" />
                <h2 className="text-xl font-bold tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                  Filters
                </h2>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Category</h3>
                <div className="space-y-1.5">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`
                        w-full text-left px-3 py-2 rounded-md transition-colors tracking-[0.07em] text-sm font-geologica
                        ${selectedCategory === category
                          ? 'text-gray-900 font-semibold'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }
                      `}
                      style={{ 
                        letterSpacing: '0.07em',
                        backgroundColor: selectedCategory === category ? '#FACC15' : '',
                        border: selectedCategory === category ? '1px solid #FACC15' : '1px solid transparent'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range - Single Line Version */}
              <div className="mb-5">
                <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Price Range</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-gray-600 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                    <span>LKR {priceRange[0].toLocaleString('en-US')}</span>
                    <span>LKR {priceRange[1].toLocaleString('en-US')}</span>
                  </div>
                  
                  <input
                    type="range"
                    min="1000"
                    max="4500"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-800"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors tracking-[0.07em] text-sm font-medium font-geologica"
                  style={{ letterSpacing: '0.07em' }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Desktop Search and Controls - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                {/* Search Bar */}
                <div className="relative max-w-md w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Products"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none tracking-[0.07em] text-sm font-geologica"
                    style={{ letterSpacing: '0.07em' }}
                  />
                </div>

                {/* Grid and Sort Controls */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  {/* Minimal Grid Toggle Button - Only Icon */}
                  <button
                    onClick={toggleGridView}
                    className="p-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200"
                    title={`Show ${gridView === 9 ? '9' : gridView === 6 ? '6' : '3'} products`}
                  >
                    {gridView === 9 && <Grid3x3 size={22} />}
                    {gridView === 6 && <Grid2x2 size={22} />}
                    {gridView === 3 && <Grid size={22} />}
                  </button>

                  {/* Sort Button with 3 Horizontal Dashes/Lines */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSortMenu(!showSortMenu)}
                      className="p-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 flex flex-col gap-1 items-center justify-center"
                      title={`Sort by: ${getSortLabel()}`}
                    >
                      {/* 3 Horizontal Dashes/Lines Icon */}
                      <div className="w-4 h-0.5 bg-current"></div>
                      <div className="w-4 h-0.5 bg-current"></div>
                      <div className="w-4 h-0.5 bg-current"></div>
                    </button>

                    {/* Sort Dropdown Menu */}
                    {showSortMenu && (
                      <>
                        {/* Backdrop */}
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setShowSortMenu(false)}
                        />
                        
                        {/* Menu */}
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-xs text-gray-500 font-medium tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                              Sort By
                            </p>
                          </div>
                          
                          <button
                            onClick={() => handleSort('default')}
                            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'default' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              {sortBy === 'default' && (
                                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                              )}
                            </div>
                            <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Default Sorting</span>
                          </button>
                          
                          <button
                            onClick={() => handleSort('price-low')}
                            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'price-low' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              {sortBy === 'price-low' && (
                                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                              )}
                            </div>
                            <ChevronUp size={16} className="text-gray-500" />
                            <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Price: Low to High</span>
                          </button>
                          
                          <button
                            onClick={() => handleSort('price-high')}
                            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'price-high' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              {sortBy === 'price-high' && (
                                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                              )}
                            </div>
                            <ChevronDown size={16} className="text-gray-500" />
                            <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Price: High to Low</span>
                          </button>
                          
                          <button
                            onClick={() => handleSort('newest')}
                            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'newest' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              {sortBy === 'newest' && (
                                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                              )}
                            </div>
                            <Clock size={16} className="text-gray-500" />
                            <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Newest First</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Results Count and Sort Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <p className="text-gray-600 text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                  Showing <span className="font-bold">{displayedProducts.length} of {filteredProducts.length}</span> products
                </p>
                
                {sortBy !== 'default' && (
                  <p className="text-sm text-gray-500 tracking-[0.07em] font-geologica flex items-center gap-1" style={{ letterSpacing: '0.07em' }}>
                    <span>Sorted by:</span>
                    <span className="font-medium text-gray-700">{getSortLabel()}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 text-base tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                  No products found matching your criteria.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors tracking-[0.07em] font-geologica"
                  style={{ letterSpacing: '0.07em' }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                {/* Mobile Products Grid - 2 columns, 4 products initially (2 rows) */}
                <div className="lg:hidden grid grid-cols-2 gap-3">
                  {mobileDisplayedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-[15px] overflow-hidden transition-all duration-300 hover:shadow-md font-geologica"
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden mb-2 rounded-[15px] aspect-[3/4]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/400x600/EEE/31343C?text=${encodeURIComponent(product.name)}`;
                            e.currentTarget.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500";
                          }}
                        />
                        
                        {/* Cart Icon - Smaller on mobile */}
                        <button className="absolute top-2 left-2 text-gray-800 p-0.5 hover:scale-110 transition-transform duration-300 bg-white/80 rounded-full w-6 h-6 flex items-center justify-center z-10">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </button>
                      </div>

                      <div className="px-2 pb-2">
                        <h3 
                          className="font-bold text-xs mb-1 tracking-[0.07em] font-geologica truncate"
                          style={{ letterSpacing: '0.07em', color: '#FCC900' }}
                        >
                          {product.name}
                        </h3>
                        
                        <p 
                          className="text-gray-600 text-[10px] mb-1 leading-tight line-clamp-2 tracking-[0.07em] font-geologica"
                          style={{ letterSpacing: '0.07em' }}
                        >
                          {product.description}
                        </p>

                        {/* Colors Section - Smaller on mobile */}
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-[10px] text-gray-700 font-medium tracking-[0.07em] font-geologica whitespace-nowrap">
                            Colors:
                          </span>
                          <div className="flex gap-1">
                            {product.colors && product.colors.slice(0, 3).map((color, index) => (
                              <div
                                key={index}
                                className="w-2.5 h-2.5 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200 flex-shrink-0"
                                style={{ 
                                  backgroundColor: color,
                                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                }}
                                title={`Color ${index + 1}: ${color}`}
                              />
                            ))}
                            {product.colors && product.colors.length > 3 && (
                              <div className="text-[8px] text-gray-500 ml-0.5">+{product.colors.length - 3}</div>
                            )}
                          </div>
                        </div>
                        
                        <div className="mb-1">
                          <span 
                            className="text-xs font-bold text-gray-900 tracking-[0.07em] font-geologica"
                            style={{ letterSpacing: '0.07em' }}
                          >
                            {formatPrice(product.price)}
                          </span>
                        </div>
                        
                        <button 
                          onClick={() => handleSeeDetails(product.id)}
                          className="w-full bg-black text-white px-2 py-1.5 rounded-md hover:bg-gray-900 transition-colors duration-200 font-bold tracking-[0.07em] text-[10px] flex items-center justify-center gap-1 font-geologica"
                        >
                          See Details
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Products Grid - 3 columns */}
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {displayedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-lg font-geologica"
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden mb-3 rounded-[20px] aspect-[3/4]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/600x800/EEE/31343C?text=${encodeURIComponent(product.name)}`;
                            e.currentTarget.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500";
                          }}
                        />
                        
                        {/* Cart Icon */}
                        <button className="absolute top-3 left-3 text-gray-800 p-1 hover:scale-110 transition-transform duration-300 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center z-10">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </button>
                      </div>

                      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                        <h3 
                          className="font-bold text-sm sm:text-base mb-1 tracking-[0.07em] font-geologica"
                          style={{ letterSpacing: '0.07em', color: '#FCC900' }}
                        >
                          {product.name}
                        </h3>
                        
                        <p 
                          className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2 tracking-[0.07em] font-geologica"
                          style={{ letterSpacing: '0.07em' }}
                        >
                          {product.description}
                        </p>

                        {/* Colors Section */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-gray-700 font-medium tracking-[0.07em] font-geologica whitespace-nowrap">
                            Colors:
                          </span>
                          <div className="flex gap-1.5">
                            {product.colors && product.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200 flex-shrink-0"
                                style={{ 
                                  backgroundColor: color,
                                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                }}
                                title={`Color ${index + 1}: ${color}`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <span 
                            className="text-base sm:text-lg font-bold text-gray-900 tracking-[0.07em] font-geologica"
                            style={{ letterSpacing: '0.07em' }}
                          >
                            {formatPrice(product.price)}
                          </span>
                        </div>
                        
                        <button 
                          onClick={() => handleSeeDetails(product.id)}
                          className="w-full bg-black text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-bold tracking-[0.07em] text-xs sm:text-sm flex items-center justify-center gap-2 font-geologica"
                        >
                          See Details
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show More/Less Button for Mobile */}
                {filteredProducts.length > 4 && (
                  <div className="lg:hidden mt-4 text-center">
                    <button
                      onClick={toggleMobileView}
                      className="bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-bold tracking-[0.07em] text-xs flex items-center justify-center gap-1.5 mx-auto font-geologica"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      {showAllMobile ? 'Show Less' : `Show More (${filteredProducts.length - 4} more)`}
                      {showAllMobile ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LimonaProducts;