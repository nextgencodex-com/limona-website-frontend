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
        console.log('Fetching products from API...');
        const response = await fetch('http://localhost:5000/api/v1/products', {
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
          
          console.log('Processed database products:', dbProducts.length);
          console.log('Database products:', dbProducts);
          // Append database products to hardcoded products
          const mergedProducts = [...initialProducts, ...dbProducts];
          console.log('Total products after merge:', mergedProducts.length);
          setProducts(mergedProducts);
        } else {
          console.error('API response not OK:', response.status);
        }
      } catch (error) {
        console.error('Failed to fetch database products:', error);
      }
    };

    fetchDatabaseProducts();
  }, []);
  const [selectedWomenSubcategory, setSelectedWomenSubcategory] = useState<string>('All Women');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [gridView, setGridView] = useState<3 | 6 | 9>(9);
  const [sortBy, setSortBy] = useState<string>('default');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [showComingSoonMessage, setShowComingSoonMessage] = useState(false);
  const [showWomenSubcategoryDropdown, setShowWomenSubcategoryDropdown] = useState(false);
  const [comingSoonCategory, setComingSoonCategory] = useState<string>('');

  const categories = ['All Products', 'Men', 'Women', 'Kids', 'Accessories', 'Limited Edition'];
  const womenSubcategories = ['All Women', 'Blouse', 'Frock', 'Full Kits', 'T-Shirt'];

  const handleCategorySelect = (category: string) => {
    if (category === 'Limited Edition' || category === 'Accessories') {
      // First, reset to All Products view
      setSelectedCategory('All Products');
      setSelectedWomenSubcategory('All Women');
      
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
    
    if (category !== 'Women') {
      setSelectedWomenSubcategory('All Women');
    }
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('category', category);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleWomenSubcategorySelect = (subcategory: string) => {
    setSelectedWomenSubcategory(subcategory);
    setShowWomenSubcategoryDropdown(false);
  };

  useEffect(() => {
    const categoryFromUrl = searchParams?.get('category');
    
    // Only process if we have a category parameter
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      // If it's Accessories or Limited Edition, just show the message
      if (categoryFromUrl === 'Limited Edition' || categoryFromUrl === 'Accessories') {
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
      else if (categoryFromUrl !== 'Limited Edition' && categoryFromUrl !== 'Accessories') {
        setSelectedCategory(categoryFromUrl);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
      
      if (selectedCategory === 'Women' && selectedWomenSubcategory !== 'All Women') {
        filtered = filtered.filter(product => product.subcategory === selectedWomenSubcategory);
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
      default:
        sorted.sort((a, b) => a.id - b.id);
        break;
    }

    setFilteredProducts(sorted);
  }, [selectedCategory, selectedWomenSubcategory, priceRange, searchTerm, products, sortBy]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, gridView);
  }, [filteredProducts, gridView]);

  const mobileDisplayedProducts = useMemo(() => {
    if (showAllMobile) {
      return filteredProducts.slice(0, gridView);
    }
    return filteredProducts.slice(0, 4);
  }, [filteredProducts, showAllMobile, gridView]);

  const handleResetFilters = () => {
    setSelectedCategory('All Products');
    setSelectedWomenSubcategory('All Women');
    setPriceRange([0, 10000]);
    setSearchTerm('');
    setSortBy('default');
    setShowAllMobile(false);
    setComingSoonCategory('');
    
    router.push('?', { scroll: false });
  };

  const toggleGridView = () => {
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

  const getSortLabel = () => {
    switch (sortBy) {
      case 'price-low': return 'Price: Low to High';
      case 'price-high': return 'Price: High to Low';
      case 'newest': return 'Newest First';
      default: return 'Default Sorting';
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

      {/* Coming Soon Notification - Updated for both Accessories and Limited Edition */}
      {showComingSoonMessage && (
        <div className="container mx-auto px-4 mb-4 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className={`rounded-xl p-4 shadow-sm ${comingSoonCategory === 'Limited Edition' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200' : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'}`}>
              <div className="flex items-center">
                <div className={`p-2 rounded-lg mr-3 ${comingSoonCategory === 'Limited Edition' ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                  <Clock className={comingSoonCategory === 'Limited Edition' ? 'text-yellow-600' : 'text-blue-600'} size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                    Coming Soon: {comingSoonCategory === 'Limited Edition' ? 'Limited Edition Collection' : 'Accessories Collection'}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                    {comingSoonCategory === 'Limited Edition' 
                      ? "We're working on something special! Our exclusive limited edition products will be available soon."
                      : "Our accessories collection is being curated! Check back soon for stylish accessories to complement your look."
                    }
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

            {/* Women Subcategory Dropdown for Mobile - ALWAYS VISIBLE WHEN WOMEN CATEGORY IS SELECTED */}
            {selectedCategory === 'Women' && (
              <div className="mb-4">
                <button
                  onClick={() => setShowWomenSubcategoryDropdown(!showWomenSubcategoryDropdown)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      {selectedWomenSubcategory === 'All Women' ? 'All Women\'s Products' : selectedWomenSubcategory}
                    </span>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      {filteredProducts.length} items
                    </span>
                  </div>
                  <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${showWomenSubcategoryDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Women Subcategory Dropdown Menu for Mobile */}
                {showWomenSubcategoryDropdown && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-700 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                        Women's Categories
                      </p>
                    </div>
                    
                    {womenSubcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => handleWomenSubcategorySelect(subcategory)}
                        className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${selectedWomenSubcategory === subcategory ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                      >
                        <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                          {subcategory}
                        </span>
                        {selectedWomenSubcategory === subcategory && (
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

                {/* Grid and Sort Controls */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={toggleGridView}
                    className="p-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200"
                    title={`Show ${gridView === 9 ? '9' : gridView === 6 ? '6' : '3'} products`}
                  >
                    {gridView === 9 && <Grid3x3 size={22} />}
                    {gridView === 6 && <Grid2x2 size={22} />}
                    {gridView === 3 && <Grid size={22} />}
                  </button>

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
                <div className="flex items-center gap-4">
                  <p className="text-gray-600 text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                    Showing <span className="font-bold">{displayedProducts.length} of {filteredProducts.length}</span> products
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Women's Subcategory Dropdown - Only shown when Women category is selected */}
                  {selectedCategory === 'Women' && (
                    <div className="relative">
                      <button
                        onClick={() => setShowWomenSubcategoryDropdown(!showWomenSubcategoryDropdown)}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-sm text-gray-700 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                          {selectedWomenSubcategory === 'All Women' ? 'All Women' : selectedWomenSubcategory}
                        </span>
                        <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${showWomenSubcategoryDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Subcategory Dropdown Menu */}
                      {showWomenSubcategoryDropdown && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setShowWomenSubcategoryDropdown(false)}
                          />
                          
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
                            <div className="px-4 py-2 border-b border-gray-100">
                              <p className="text-xs text-gray-500 font-medium tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                                Women's Categories
                              </p>
                            </div>
                            
                            {womenSubcategories.map((subcategory) => (
                              <button
                                key={subcategory}
                                onClick={() => handleWomenSubcategorySelect(subcategory)}
                                className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 ${selectedWomenSubcategory === subcategory ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                              >
                                <span className="text-sm tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                                  {subcategory}
                                </span>
                                {selectedWomenSubcategory === subcategory && (
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

            {/* Products Grid - Show empty state for Accessories and Limited Edition */}
            {(selectedCategory === 'Accessories' || selectedCategory === 'Limited Edition') ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className={`p-6 rounded-xl ${selectedCategory === 'Limited Edition' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200' : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'}`}>
                    <div className={`p-3 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center ${selectedCategory === 'Limited Edition' ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                      <Clock className={selectedCategory === 'Limited Edition' ? 'text-yellow-600' : 'text-blue-600'} size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      Coming Soon
                    </h3>
                    <p className="text-gray-600 mb-4 tracking-[0.07em] font-geologica" style={{ letterSpacing: '0.07em' }}>
                      {selectedCategory === 'Limited Edition' 
                        ? "Our exclusive limited edition collection is being prepared with special care."
                        : "Our accessories collection is being curated with the latest fashion trends."
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