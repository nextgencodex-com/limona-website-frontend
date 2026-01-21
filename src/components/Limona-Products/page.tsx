'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, X, Search, Grid3x3, Grid2x2, Grid, ChevronUp, ChevronDown, Clock, ChevronRight } from 'lucide-react';

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

  // Sample product data with colors - UPDATED WITH WOMEN SUBCATEGORIES
  const initialProducts: Product[] = [
    // Existing products
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
      subcategory: 'T-Shirt',
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
    
    // NEW KIDS PRODUCT - Added
    {
      id: 22,
      name: 'Kids Cartoon Hoodie',
      category: 'Kids',
      price: 2200,
      image: '/images/Products/kids-hoodie.png',
      description: 'Adorable cartoon printed hoodie for kids. Soft and comfortable fabric.',
      colors: ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0'],
      dateAdded: '2024-03-25'
    },
    
    // NEW WOMEN PRODUCTS WITH SUBCATEGORIES
    
    // Blouse Products
    {
      id: 10,
      name: 'Silk Evening Blouse',
      category: 'Women',
      subcategory: 'Blouse',
      price: 4200,
      image: '/images/Blouse/Silky.jpg',
      description: 'Elegant silk blouse with delicate embroidery for special occasions.',
      colors: ['#FFB6C1', '#FFFFFF', '#000000', '#FF69B4'],
      dateAdded: '2024-03-15'
    },
    {
      id: 11,
      name: 'Casual Cotton Blouse',
      category: 'Women',
      subcategory: 'Blouse',
      price: 2800,
      image: '/images/Blouse/casual.jpg',
      description: 'Comfortable cotton blouse perfect for office or casual wear.',
      colors: ['#87CEEB', '#32CD32', '#FFD700'],
      dateAdded: '2024-03-10'
    },
    {
      id: 12,
      name: 'Lace Trim Blouse',
      category: 'Women',
      subcategory: 'Blouse',
      price: 3800,
      image: '/images/Blouse/lase.jpg',
      description: 'Beautiful blouse with lace detailing for a feminine touch.',
      colors: ['#FFFFFF', '#F0E68C', '#DDA0DD'],
      dateAdded: '2024-03-05'
    },
    
    // Frock Products
    {
      id: 13,
      name: 'Summer Floral Frock',
      category: 'Women',
      subcategory: 'Frock',
      price: 5200,
      image: '/images/Products/women-frock-1.png',
      description: 'Light and breezy summer frock with floral patterns.',
      colors: ['#87CEEB', '#FFD700', '#32CD32', '#FFB6C1'],
      dateAdded: '2024-03-12'
    },
    {
      id: 14,
      name: 'Evening Party Frock',
      category: 'Women',
      subcategory: 'Frock',
      price: 6800,
      image: '/images/Products/women-frock-2.png',
      description: 'Elegant party frock with sequin details for night events.',
      colors: ['#000000', '#800080', '#4B0082'],
      dateAdded: '2024-03-08'
    },
    {
      id: 15,
      name: 'Casual Day Frock',
      category: 'Women',
      subcategory: 'Frock',
      price: 3500,
      image: '/images/Frock/frock.jpg',
      description: 'Comfortable and stylish frock for everyday casual wear.',
      colors: ['#87CEEB', '#FFFFFF', '#FFD700'],
      dateAdded: '2024-03-03'
    },
    
    // Full Kits Products
    {
      id: 16,
      name: 'Traditional Silk Full Kits',
      category: 'Women',
      subcategory: 'Full Kits',
      price: 8500,
      image: '/images/Full-Kits/traditional.jpg',
      description: 'Traditional full kots with intricate embroidery and silk fabric.',
      colors: ['#800080', '#FF1493', '#4B0082', '#8A2BE2'],
      dateAdded: '2024-03-18'
    },
    {
      id: 17,
      name: 'Cotton Full Kits Set',
      category: 'Women',
      subcategory: 'Full Kits',
      price: 6200,
      image: '/images/Products/women-fullkots-2.png',
      description: 'Comfortable cotton full kots set for daily traditional wear.',
      colors: ['#006400', '#228B22', '#32CD32'],
      dateAdded: '2024-03-14'
    },
    {
      id: 18,
      name: 'Designer Full Kits',
      category: 'Women',
      subcategory: 'Full Kits',
      price: 9500,
      image: '/images/Products/women-fullkots-3.png',
      description: 'Designer full kots with premium fabric and detailed work.',
      colors: ['#FF1493', '#8A2BE2', '#4B0082'],
      dateAdded: '2024-03-20'
    },
    
    // T-Shirt Products (additional to existing)
    {
      id: 19,
      name: 'Basic Cotton T-Shirt',
      category: 'Women',
      subcategory: 'T-Shirt',
      price: 1800,
      image: '/images/Women-T-Shirt/basic cotton.jpg',
      description: 'Basic comfortable cotton t-shirt for daily wear.',
      colors: ['#FFFFFF', '#000000', '#808080', '#FF0000'],
      dateAdded: '2024-03-07'
    },
    {
      id: 20,
      name: 'Graphic Women T-Shirt',
      category: 'Women',
      subcategory: 'T-Shirt',
      price: 2200,
      image: '/images/Women-T-Shirt/grphic.jpg',
      description: 'Trendy graphic print t-shirt for casual style.',
      colors: ['#000000', '#FFFFFF', '#FF4500'],
      dateAdded: '2024-03-11'
    },
    {
      id: 21,
      name: 'V-Neck T-Shirt',
      category: 'Women',
      subcategory: 'T-Shirt',
      price: 2000,
      image: '/images/Women-T-Shirt/vneck.jpg',
      description: 'Flattering V-neck t-shirt for a stylish look.',
      colors: ['#87CEEB', '#FFB6C1', '#FFFFFF'],
      dateAdded: '2024-03-16'
    }
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  // Fetch products from database and merge with hardcoded products
  useEffect(() => {
    const fetchDatabaseProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/products', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          
          const dbProducts: Product[] = data.data
            .filter((p: any) => {
              const isActive = p.is_active === 1 || p.is_active === true;
              return isActive;
            })
            .map((p: any) => ({
              id: p.id + 1000, // Offset IDs to avoid conflicts with hardcoded products
              name: p.name,
              category: p.category as any,
              subcategory: p.subcategory,
              price: Number(p.price),
              image: p.image_url || '/images/Products/placeholder.png',
              description: p.description || '',
              colors: p.color ? p.color.split(',').map((c: string) => c.trim()) : ['#000000'],
              dateAdded: p.created_at || new Date().toISOString(),
            }));
          
          // Append database products to hardcoded products
          const mergedProducts = [...initialProducts, ...dbProducts];
          setProducts(mergedProducts);
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
        const response = await fetch('http://localhost:5000/api/v1/categories');
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
    
    // Check if category is in coming soon list
    if (comingSoonCategories.includes(category)) {
      // First, reset to All Products view
      setSelectedCategory('All Products');
      setSelectedSubcategory({});
      
      // Set the URL parameter
      const params = new URLSearchParams(searchParams?.toString() || '');
      params.set('category', category);
      router.push(`?${params.toString()}`, { scroll: false });
      
      // Show the message
      setShowComingSoonMessage(true);
      setComingSoonCategory(category);
      
      setTimeout(() => {
        setShowComingSoonMessage(false);
        setComingSoonCategory('');
        
        // Clear the URL parameter after showing the message
        const updatedParams = new URLSearchParams(searchParams?.toString() || '');
        updatedParams.delete('category');
        router.replace(`?${updatedParams.toString()}`, { scroll: false });
      }, 3000);
      
      return;
    }
    
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
      // Check if it's a coming soon category
      if (comingSoonCategories.includes(categoryFromUrl)) {
        setSelectedCategory('All Products'); // Reset to All Products view
        setShowComingSoonMessage(true);
        setComingSoonCategory(categoryFromUrl);
        
        setTimeout(() => {
          setShowComingSoonMessage(false);
          setComingSoonCategory('');
          
          // Clear the URL parameter after showing the message
          const params = new URLSearchParams(searchParams?.toString() || '');
          params.delete('category');
          router.replace(`?${params.toString()}`, { scroll: false });
        }, 3000);
      } 
      // For other categories, set them normally
      else if (!comingSoonCategories.includes(categoryFromUrl)) {
        setSelectedCategory(categoryFromUrl);
      }
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
      
      // Apply subcategory filter for any category that has subcategories
      const currentSubcat = getCurrentSubcategory(selectedCategory);
      if (currentSubcat && !currentSubcat.startsWith('All ')) {
        filtered = filtered.filter(product => product.subcategory === currentSubcat);
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

            {/* Products Grid - Show empty state for coming soon categories or subcategories */}
            {(comingSoonCategories.includes(selectedCategory) || 
              (comingSoonSubcategories[selectedCategory]?.includes(getCurrentSubcategory(selectedCategory)) && getCurrentSubcategory(selectedCategory) !== `All ${selectedCategory}`)) ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                    <div className="p-3 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100">
                      <Clock className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      Coming Soon
                    </h3>
                    <p className="text-gray-600 mb-4 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      {getCurrentSubcategory(selectedCategory) !== `All ${selectedCategory}` && comingSoonSubcategories[selectedCategory]?.includes(getCurrentSubcategory(selectedCategory))
                        ? `Our ${getCurrentSubcategory(selectedCategory)} collection is being prepared with special care.`
                        : `Our ${selectedCategory} collection is being curated with the latest fashion trends.`
                      }
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors tracking-[0.07em] font-geologica"
                      style={{ letterSpacing: '0.07em' }}
                    >
                      Back to All Products
                    </button>
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