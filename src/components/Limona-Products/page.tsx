'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, X, Search, Grid3x3, Grid2x2, Grid, ChevronUp, ChevronDown, Clock, ChevronRight } from 'lucide-react';

const API_BASE = 'https://backend.srilankawildsafari.com';
const toAbsoluteImageUrl = (url?: string | null) => {
  if (!url) return '';
  try {
    const api = new URL(API_BASE);
    const parsed = new URL(url, API_BASE);
    const isUploads = parsed.pathname.startsWith('/uploads/');
    if (isUploads && parsed.host !== api.host) {
      return `${API_BASE}${parsed.pathname}`;
    }
    return parsed.href;
  } catch {
    return `${API_BASE}${url.startsWith('/') ? url : `/${url}`}`;
  }
};

interface Product {
  id: number;
  name: string;
  category: 'All Products' | 'Men' | 'Women' | 'Kids' | 'Accessories' | 'Limited Edition';
  subcategory?: 'Blouse' | 'Frock' | 'Full Kits' | 'T-Shirt';
  price: number;
  image: string;
  description: string;
  colors: string[];
  dateAdded?: string;
}

const LimonaProducts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSeeDetails = (productId: number) => {
    router.push(`/Products-Details?id=${productId}`);
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  // Fetch products from database
  useEffect(() => {
    const fetchDatabaseProducts = async () => {
      try {
        console.log('Fetching products from API...');
        const response = await fetch(`${API_BASE}/api/v1/products`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data);
          console.log('Fetched products from database:', data.data.length);
          
          const dbProducts: Product[] = data.data
            .filter((p: any) => {
              const isActive = p.is_active === 1 || p.is_active === true;
              console.log(`Product ${p.name}: is_active=${p.is_active}, filtered=${isActive}`);
              return isActive;
            })
            .map((p: any) => ({
              id: p.id + 1000, // Offset IDs to avoid conflicts
              name: p.name,
              category: p.category as any,
              subcategory: p.subcategory,
              price: Number(p.price),
              image: toAbsoluteImageUrl(p.image_url) || '/images/Products/placeholder.png',
              description: p.description || '',
              colors: p.color ? p.color.split(',').map((c: string) => c.trim()) : ['#000000'],
              dateAdded: p.created_at || new Date().toISOString(),
            }));
          
          console.log('Processed database products:', dbProducts.length);
          console.log('Database products:', dbProducts);
          // Use only database products
          setProducts(dbProducts);
        } else {
          console.error('API response not OK:', response.status);
        }
      } catch (error) {
        console.error('Failed to fetch database products:', error);
      }
    };

    fetchDatabaseProducts();
    
    // Listen for product updates
    const handleProductUpdate = () => {
      console.log('Product updated - refreshing...');
      fetchDatabaseProducts();
    };
    
    window.addEventListener('productUpdated', handleProductUpdate);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('productUpdated', handleProductUpdate);
    };
  }, []);
  const [selectedSubcategory, setSelectedSubcategory] = useState<{[key: string]: string}>({});
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [showComingSoonMessage, setShowComingSoonMessage] = useState(false);
  const [showSubcategoryDropdown, setShowSubcategoryDropdown] = useState<string | null>(null);
  const [comingSoonCategory, setComingSoonCategory] = useState<string>('');
  
  const itemsPerPage = 9;

  // Fetch categories from database
  const [categories, setCategories] = useState<string[]>(['All Products']);
  const [categorySubcategories, setCategorySubcategories] = useState<{[key: string]: string[]}>({});
  const [comingSoonCategories, setComingSoonCategories] = useState<string[]>([]);
  const [comingSoonSubcategories, setComingSoonSubcategories] = useState<{[key: string]: string[]}>({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/v1/categories`);
        if (response.ok) {
          const data = await response.json();
          
          // Separate "All Products" from other categories
          const allProductsCat = data.find((cat: any) => cat.name === 'All Products');
          const otherCategories = data.filter((cat: any) => cat.name !== 'All Products');
          
          // Always put "All Products" first, then other categories
          const sortedCategories = allProductsCat 
            ? [allProductsCat, ...otherCategories] 
            : otherCategories;
          
          const categoryNames = sortedCategories.map((cat: any) => cat.name);
          const comingSoon = sortedCategories.filter((cat: any) => cat.coming_soon).map((cat: any) => cat.name);
          
          // Build subcategories map and coming soon subcategories map (exclude All Products from having subcategories)
          const subMap: {[key: string]: string[]} = {};
          const comingSoonSubMap: {[key: string]: string[]} = {};
          sortedCategories.forEach((cat: any) => {
            if (cat.name !== 'All Products' && cat.subcategories && cat.subcategories.length > 0) {
              subMap[cat.name] = ['All ' + cat.name, ...cat.subcategories.map((sub: any) => sub.name)];
              // Track which subcategories are coming soon
              const comingSoonSubs = cat.subcategories
                .filter((sub: any) => sub.coming_soon)
                .map((sub: any) => sub.name);
              if (comingSoonSubs.length > 0) {
                comingSoonSubMap[cat.name] = comingSoonSubs;
              }
            }
          });
          
          setCategories(categoryNames);
          setComingSoonCategories(comingSoon);
          setCategorySubcategories(subMap);
          setComingSoonSubcategories(comingSoonSubMap);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Helper function to get current subcategory selection
  const getCurrentSubcategory = (category: string) => {
    return selectedSubcategory[category] || `All ${category}`;
  };

  // Helper function to get subcategories for a category
  const getSubcategories = (category: string) => {
    return categorySubcategories[category] || [];
  };

  const handleCategorySelect = (category: string) => {
    setCurrentPage(1); // Reset to page 1 when category changes
    
    // Allow coming soon categories to be selected and show the coming soon message
    setSelectedCategory(category);
    setComingSoonCategory('');
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('category', category);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSubcategorySelect = (category: string, subcategory: string) => {
    setSelectedSubcategory(prev => ({
      ...prev,
      [category]: subcategory
    }));
    setShowSubcategoryDropdown(null);
    setCurrentPage(1); // Reset to page 1 when subcategory changes
  };

  useEffect(() => {
    const categoryFromUrl = searchParams?.get('category');
    
    // Only process if we have a category parameter
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      // Set the category (coming soon categories will show the animated message in the product area)
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams, categories, comingSoonCategories]);

  useEffect(() => {
    let filtered = products;

    console.log('Filtering products:', {
      totalProducts: products.length,
      selectedCategory,
      willFilter: selectedCategory !== 'All Products'
    });

    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
      console.log('After category filter:', filtered.length);
      
      // Apply subcategory filter for any category that has subcategories
      const currentSubcat = getCurrentSubcategory(selectedCategory);
      if (currentSubcat && !currentSubcat.startsWith('All ')) {
        filtered = filtered.filter(product => product.subcategory === currentSubcat);
        console.log('After subcategory filter:', filtered.length);
      }
    }

    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

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
      case 'oldest':
        sorted.sort((a, b) => new Date(a.dateAdded || '').getTime() - new Date(b.dateAdded || '').getTime());
        break;
      default:
        sorted.sort((a, b) => new Date(b.dateAdded || '').getTime() - new Date(a.dateAdded || '').getTime());
        break;
    }

    setFilteredProducts(sorted);
  }, [selectedCategory, selectedSubcategory, priceRange, searchTerm, products, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const displayedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const mobileDisplayedProducts = useMemo(() => {
    if (showAllMobile) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return filteredProducts.slice(startIndex, endIndex);
    }
    return filteredProducts.slice(0, 4);
  }, [filteredProducts, showAllMobile, currentPage, itemsPerPage]);

  const handleResetFilters = () => {
    setSelectedCategory('All Products');
    setSelectedSubcategory({});
    setPriceRange([0, 10000]);
    setSearchTerm('');
    setSortBy('newest');
    setShowAllMobile(false);
    setComingSoonCategory('');
    setCurrentPage(1);
    
    router.push('?', { scroll: false });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleSort = (sortType: string) => {
    setSortBy(sortType);
    setShowSortMenu(false);
  };

  const formatPrice = (price: number) => {
    return `LKR ${price.toLocaleString('en-US')}.00`;
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'price-low': return 'Price: Low to High';
      case 'price-high': return 'Price: High to Low';
      case 'newest': return 'Newest First';
      case 'oldest': return 'Oldest First';
      default: return 'Newest First';
    }
  };

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
              <img
                src="/images/Products/Frame 40.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover rounded-[35px]"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/1920x600/1a1a1a/ffffff?text=Fashion+Collection`;
                }}
              />

              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/50 to-transparent rounded-l-[35px]"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">
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

      {/* Coming Soon Notification - Dynamic for all categories and subcategories */}
      {showComingSoonMessage && (
        <div className="container mx-auto px-4 mb-4 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
              <div className="flex items-center">
                <div className="p-2 rounded-lg mr-3 bg-blue-100">
                  <Clock className="text-blue-600" size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                    Coming Soon: {comingSoonCategory} Collection
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                    Our {comingSoonCategory} collection is being curated with special care. Check back soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Search, Sort, and Filters */}
          <div className="lg:hidden mb-4">
            <div className="flex items-center justify-between gap-2 mb-4">
              {/* FILTER Toggle Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="w-10 h-10 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 flex items-center justify-center border border-gray-300 bg-white"
                  title="Filters"
                >
                  <Filter size={20} />
                </button>
              </div>

              {/* Search Bar */}
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

              {/* SORT Toggle Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="w-10 h-10 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 flex items-center justify-center border border-gray-300 bg-white"
                  title={`Sort by: ${getSortLabel()}`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="w-4 h-0.5 bg-current"></div>
                    <div className="w-4 h-0.5 bg-current"></div>
                    <div className="w-4 h-0.5 bg-current"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Subcategory Dropdown for Mobile - Show for any category with subcategories */}
            {getSubcategories(selectedCategory).length > 0 && (
              <div className="mb-4">
                <button
                  onClick={() => setShowSubcategoryDropdown(showSubcategoryDropdown === selectedCategory ? null : selectedCategory)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      {getCurrentSubcategory(selectedCategory)}
                    </span>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      {filteredProducts.length} items
                    </span>
                  </div>
                  <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${showSubcategoryDropdown === selectedCategory ? 'rotate-180' : ''}`} />
                </button>

                {/* Subcategory Dropdown Menu for Mobile */}
                {showSubcategoryDropdown === selectedCategory && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-700 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                        {selectedCategory} Categories
                      </p>
                    </div>
                    
                    {getSubcategories(selectedCategory).map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => handleSubcategorySelect(selectedCategory, subcategory)}
                        className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${getCurrentSubcategory(selectedCategory) === subcategory ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                      >
                        <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                          {subcategory}
                        </span>
                        {getCurrentSubcategory(selectedCategory) === subcategory && (
                          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mobile Sort Dropdown Menu */}
            {showSortMenu && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowSortMenu(false)}
                />
                
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs text-gray-500 font-medium tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      Sort By
                    </p>
                  </div>
                  
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
                  
                  <button
                    onClick={() => handleSort('oldest')}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'oldest' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {sortBy === 'oldest' && (
                        <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Oldest First</span>
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
                </div>
              </>
            )}

            {/* Mobile Filters Panel */}
            {showMobileFilters && (
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mb-4 mt-4">
                {/* Category Filter in Mobile */}
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Category</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
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
                      max="10000"
                      step="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-800"
                    />
                  </div>
                </div>

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

          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
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
                      onClick={() => handleCategorySelect(category)}
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
                    max="10000"
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
            {/* Desktop Search and Controls */}
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

                {/* Sort Controls */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <div className="relative">
                    <button
                      onClick={() => setShowSortMenu(!showSortMenu)}
                      className="p-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 flex flex-col gap-1 items-center justify-center"
                      title={`Sort by: ${getSortLabel()}`}
                    >
                      <div className="w-4 h-0.5 bg-current"></div>
                      <div className="w-4 h-0.5 bg-current"></div>
                      <div className="w-4 h-0.5 bg-current"></div>
                    </button>

                    {showSortMenu && (
                      <>
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setShowSortMenu(false)}
                        />
                        
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-xs text-gray-500 font-medium tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                              Sort By
                            </p>
                          </div>
                          
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
                          
                          <button
                            onClick={() => handleSort('oldest')}
                            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 ${sortBy === 'oldest' ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              {sortBy === 'oldest' && (
                                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                              )}
                            </div>
                            <Clock size={16} className="text-gray-500" />
                            <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>Oldest First</span>
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
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Results Count and Sort Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <div className="flex items-center gap-4">
                  <p className="text-gray-600 text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                    Showing <span className="font-bold">{displayedProducts.length} of {filteredProducts.length}</span> products
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Dynamic Subcategory Dropdown - Shown for any category with subcategories */}
                  {getSubcategories(selectedCategory).length > 0 && (
                    <div className="relative">
                      <button
                        onClick={() => setShowSubcategoryDropdown(showSubcategoryDropdown === selectedCategory ? null : selectedCategory)}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-sm text-gray-700 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                          {getCurrentSubcategory(selectedCategory)}
                        </span>
                        <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${showSubcategoryDropdown === selectedCategory ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Subcategory Dropdown Menu */}
                      {showSubcategoryDropdown === selectedCategory && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setShowSubcategoryDropdown(null)}
                          />
                          
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
                            <div className="px-4 py-2 border-b border-gray-100">
                              <p className="text-xs text-gray-500 font-medium tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                                {selectedCategory} Categories
                              </p>
                            </div>
                            
                            {getSubcategories(selectedCategory).map((subcategory) => (
                              <button
                                key={subcategory}
                                onClick={() => handleSubcategorySelect(selectedCategory, subcategory)}
                                className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 ${getCurrentSubcategory(selectedCategory) === subcategory ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                              >
                                <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                                  {subcategory}
                                </span>
                                {getCurrentSubcategory(selectedCategory) === subcategory && (
                                  <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                                )}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  {sortBy !== 'default' && (
                    <p className="text-sm text-gray-500 tracking-[0.07em] font-geologica flex items-center gap-1" style={{ letterSpacing: '0.07em' }}>
                      <span>Sorted by:</span>
                      <span className="font-medium text-gray-700">{getSortLabel()}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Products Grid - Show animated Coming Soon message for categories marked as coming soon (exclude All Products) */}
            {(selectedCategory !== 'All Products' && comingSoonCategories.includes(selectedCategory)) || 
              (comingSoonSubcategories[selectedCategory]?.includes(getCurrentSubcategory(selectedCategory)) && getCurrentSubcategory(selectedCategory) !== `All ${selectedCategory}`) ? (
              <div className="text-center py-20 md:py-24">
                <div className="max-w-lg mx-auto">
                  <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#FACC15]/10 via-[#FCC900]/5 to-transparent border-2 border-[#FACC15]/30 shadow-lg animate-fadeIn">
                    {/* Shimmer effect overlay */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                    
                    {/* Clock Icon with pulse animation */}
                    <div className="relative p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#FACC15] to-[#FCC900] shadow-lg animate-pulse-icon">
                      <Clock className="text-gray-900" size={40} />
                    </div>
                    
                    {/* Coming Soon Text with pulse animation */}
                    <h3 className="relative text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-[0.07em] font-geologica animate-pulse-text" style={{ letterSpacing: '0.07em', color: '#FCC900' }}>
                      Coming Soon
                    </h3>
                    
                    {/* Description */}
                    <p className="relative text-gray-700 text-base md:text-lg mb-6 tracking-[0.07em] font-geologica leading-relaxed" style={{ letterSpacing: '0.07em' }}>
                      {getCurrentSubcategory(selectedCategory) !== `All ${selectedCategory}` && comingSoonSubcategories[selectedCategory]?.includes(getCurrentSubcategory(selectedCategory))
                        ? `Our ${getCurrentSubcategory(selectedCategory)} collection is being prepared with special care. Stay tuned for exciting new arrivals!`
                        : `Our ${selectedCategory} collection is being curated with special care. Stay tuned for exciting new arrivals!`
                      }
                    </p>
                    
                    {/* WhatsApp Contact Button */}
                    <a 
                      href="https://wa.me/94784865398"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-bold tracking-[0.07em] font-geologica mb-4"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      Contact Us on WhatsApp
                    </a>
                    
                    {/* Back Button */}
                    <div className="relative mt-4">
                      <button
                        onClick={handleResetFilters}
                        className="text-gray-600 hover:text-gray-900 text-sm tracking-[0.07em] font-geologica transition-colors duration-200 underline"
                        style={{ letterSpacing: '0.07em' }}
                      >
                        Back to All Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
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
                {/* Mobile Products Grid */}
                <div className="lg:hidden grid grid-cols-2 gap-3">
                  {mobileDisplayedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-[15px] overflow-hidden transition-all duration-300 hover:shadow-md font-geologica"
                    >
                      <div className="relative overflow-hidden mb-2 rounded-[40px] aspect-[3/4]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                          style={{
                            clipPath: 'polygon(75% 0, 0% 0, 0% 6%, 0% 75%, 25% 100%, 100% 100%, 100% 94%, 100% 25%)'
                          }}
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/400x600/EEE/31343C?text=${encodeURIComponent(product.name)}`;
                            e.currentTarget.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500";
                          }}
                        />
                        
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

                        {/* Colors Section */}
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

                {/* Desktop Products Grid */}
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {displayedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-lg font-geologica"
                    >
                      <div className="relative overflow-hidden mb-3 rounded-[20px] aspect-[3/4]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                          style={{
                            clipPath: 'polygon(75% 0, 0% 0, 0% 6%, 0% 75%, 25% 100%, 100% 100%, 100% 94%, 100% 20%)'
                          }}
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/600x800/EEE/31343C?text=${encodeURIComponent(product.name)}`;
                            e.currentTarget.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500";
                          }}
                        />
                        
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

                {/* Pagination - Desktop */}
                {totalPages > 1 && (
                  <div className="hidden lg:flex mt-8 items-center justify-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg font-medium tracking-[0.07em] text-sm font-geologica transition-colors ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-gray-700 hover:bg-gray-800 hover:text-white border border-gray-300'
                      }`}
                      style={{ letterSpacing: '0.07em' }}
                    >
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        // Show first page, last page, current page, and pages around current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`w-10 h-10 rounded-lg font-medium tracking-[0.07em] text-sm font-geologica transition-colors ${
                                currentPage === page
                                  ? 'bg-gray-800 text-white'
                                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                              }`}
                              style={{ letterSpacing: '0.07em' }}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span key={page} className="px-2 text-gray-400">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg font-medium tracking-[0.07em] text-sm font-geologica transition-colors ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-gray-700 hover:bg-gray-800 hover:text-white border border-gray-300'
                      }`}
                      style={{ letterSpacing: '0.07em' }}
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Show More/Less Button for Mobile */}
                {filteredProducts.length > 4 && !showAllMobile && (
                  <div className="lg:hidden mt-4 text-center">
                    <button
                      onClick={toggleMobileView}
                      className="bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-bold tracking-[0.07em] text-xs flex items-center justify-center gap-1.5 mx-auto font-geologica"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      Show More ({filteredProducts.length - 4} more)
                      <ChevronDown size={14} />
                    </button>
                  </div>
                )}

                {/* Pagination - Mobile (shown when showAllMobile is true) */}
                {showAllMobile && totalPages > 1 && (
                  <div className="lg:hidden mt-4 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg font-medium text-xs font-geologica transition-colors ${
                          currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-800 hover:text-white border border-gray-300'
                        }`}
                      >
                        Prev
                      </button>

                      <div className="flex items-center gap-1">
                        {[...Array(totalPages)].map((_, index) => {
                          const page = index + 1;
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-8 h-8 rounded-lg font-medium text-xs font-geologica transition-colors ${
                                  currentPage === page
                                    ? 'bg-gray-800 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                }`}
                              >
                                {page}
                              </button>
                            );
                          } else if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                              <span key={page} className="px-1 text-gray-400 text-xs">
                                ...
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>

                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg font-medium text-xs font-geologica transition-colors ${
                          currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-800 hover:text-white border border-gray-300'
                        }`}
                      >
                        Next
                      </button>
                    </div>
                    <button
                      onClick={toggleMobileView}
                      className="text-gray-600 text-xs font-geologica flex items-center gap-1"
                    >
                      Show Less <ChevronUp size={14} />
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