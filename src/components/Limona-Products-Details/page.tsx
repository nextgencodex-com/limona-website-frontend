'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../Limona-Header/page';
import LatestArrivals from '../Limona-Home/Latest-Arrivals/page';
import Footer from '../Limona-Footer/page';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  colors: string[];
  dateAdded?: string;
  fit?: string;
  fabric?: string;
  fitType?: string;
  neckline?: string;
  sizes?: string;
  colorNames?: string;
  care?: string;
  additionalImages?: string[];
}

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get('id');
  const { addItem, openCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('S');
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [showSizeGuideDropdown, setShowSizeGuideDropdown] = useState(false);
  const [selectedSizeGuide, setSelectedSizeGuide] = useState<string | null>(null);

  // Size guide data
  const sizeGuides = [
    { name: 'Blouses', image: '/images/Size/blouse.jpg' },
    { name: 'Crop-tops', image: '/images/Size/crop-top.jpg' },
    { name: 'Frocks', image: '/images/Size/frock.jpg' },
    { name: 'Kids Frocks', image: '/images/Size/kids-frock.jpg' },
    { name: 'Kids Skirts', image: '/images/Size/kids-skirt.jpg' },
    { name: 'Kids Tops', image: '/images/Size/kids-top.jpg' },
    { name: 'Skirts', image: '/images/Size/skirt.jpg' },
  ];

  // Sample products data - matches Products page
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Classic Cotton Tee',
      category: 'All Products',
      price: 1500,
      image: '/images/Products/Subtract (5).png',
      description: 'Premium soft cotton t-shirt perfect for everyday wear. Unisex design',
      colors: ['#8A38F5', '#FACC15', '#010111', '#FF0000'],
      dateAdded: '2024-01-15',
      additionalImages: ['/images/Products/Subtract (5).png', '/images/Products/Subtract (5).png']
    },
    {
      id: 2,
      name: 'Urban Hoodie',
      category: 'Men',
      price: 3500,
      image: '/images/Products/Subtract (6).png',
      description: 'Comfortable pullover hoodie with adjustable drawstring.',
      colors: ['#FFFFFF', '#024023', '#F79EFF', '#FBFF00'],
      dateAdded: '2024-02-10',
      additionalImages: ['/images/Products/Subtract (6).png', '/images/Products/Subtract (6).png']
    },
    {
      id: 3,
      name: 'Vintage Denim Jacket',
      category: 'Men',
      price: 4500,
      image: '/images/Products/Subtract (7).png',
      description: 'Classic denim jacket with a modern twist. Durable and stylish.',
      colors: ['#597585', '#1E1E1E'],
      dateAdded: '2024-01-20',
      additionalImages: ['/images/Products/Subtract (7).png', '/images/Products/Subtract (7).png']
    },
    {
      id: 4,
      name: 'Slim Fit Joggers',
      category: 'Men',
      price: 2200,
      image: '/images/Products/Subtract (8).png',
      description: 'Comfortable joggers with elastic waistband.Perfect for casual outings',
      colors: ['#9D8E8A', '#024023', '#7A5300', '#FBFF00'],
      dateAdded: '2024-03-05',
      additionalImages: ['/images/Products/Subtract (8).png', '/images/Products/Subtract (8).png']
    },
    {
      id: 5,
      name: 'Cotton Socks Pack',
      category: 'Accessories',
      price: 1200,
      image: '/images/Products/Subtract (9).png',
      description: 'Comfortable joggers with elastic waistband.Perfect for casual outings',
      colors: ['#C00F0C', '#024023', '#110ED7', '#FBFF00'],
      dateAdded: '2024-02-28',
      additionalImages: ['/images/Products/Subtract (9).png', '/images/Products/Subtract (9).png']
    },
    {
      id: 6,
      name: 'Oversized Sweater',
      category: 'Women',
      price: 3500,
      image: '/images/Products/Subtract (10).png',
      description: 'Cozy oversized sweater for maximum comfort. Perfect for chilly days.',
      colors: ['#C00F0C', '#024023', '#110ED7', '#FBFF00'],
      dateAdded: '2024-03-01',
      additionalImages: ['/images/Products/Subtract (10).png', '/images/Products/Subtract (10).png']
    },
    {
      id: 7,
      name: 'Graphic Print Tee',
      category: 'All Products',
      price: 2500,
      image: '/images/Products/Subtract (11).png',
      description: 'Bold graphic print on premium cotton. Make a statement.',
      colors: ['#C00F0C', '#024023', '#252024', '#FBFF00'],
      dateAdded: '2024-01-25',
      additionalImages: ['/images/Products/Subtract (11).png', '/images/Products/Subtract (11).png']
    },
    {
      id: 8,
      name: 'Classic Baseball Cap',
      category: 'Accessories',
      price: 1700,
      image: '/images/Products/Subtract (12).png',
      description: 'Adjustable cotton cap with embroidered logo. One size fits all.',
      colors: ['#C00F0C', '#887B7C', '#110ED7', '#FBFF00'],
      dateAdded: '2024-02-15',
      additionalImages: ['/images/Products/Subtract (12).png', '/images/Products/Subtract (12).png']
    },
    {
      id: 9,
      name: 'Leather Tote Bag',
      category: 'Accessories',
      price: 2800,
      image: '/images/Products/Subtract (13).png',
      description: 'Premium leather tote bag with multiple compartments. Stylish and functional.',
      colors: ['#6D3B1A'],
      dateAdded: '2024-03-10',
      additionalImages: ['/images/Products/Subtract (13).png', '/images/Products/Subtract (13).png']
    },
    {
      id: 10,
      name: 'Silk Evening Blouse',
      category: 'Women',
      price: 4200,
      image: '/images/Blouse/Silky.jpg',
      description: 'Elegant silk blouse with delicate embroidery for special occasions.',
      colors: ['#FFB6C1', '#FFFFFF', '#000000', '#FF69B4'],
      dateAdded: '2024-03-15',
      additionalImages: ['/images/Blouse/Silky.jpg', '/images/Blouse/Silky.jpg']
    },
    {
      id: 11,
      name: 'Casual Cotton Blouse',
      category: 'Women',
      price: 2800,
      image: '/images/Blouse/casual.jpg',
      description: 'Comfortable cotton blouse perfect for office or casual wear.',
      colors: ['#87CEEB', '#32CD32', '#FFD700'],
      dateAdded: '2024-03-10',
      additionalImages: ['/images/Blouse/casual.jpg', '/images/Blouse/casual.jpg']
    },
    {
      id: 12,
      name: 'Lace Trim Blouse',
      category: 'Women',
      price: 3800,
      image: '/images/Blouse/lase.jpg',
      description: 'Beautiful blouse with lace detailing for a feminine touch.',
      colors: ['#FFFFFF', '#F0E68C', '#DDA0DD'],
      dateAdded: '2024-03-05',
      additionalImages: ['/images/Blouse/lase.jpg', '/images/Blouse/lase.jpg']
    },
    {
      id: 13,
      name: 'Summer Floral Frock',
      category: 'Women',
      price: 5200,
      image: '/images/Products/women-frock-1.png',
      description: 'Light and breezy summer frock with floral patterns.',
      colors: ['#87CEEB', '#FFD700', '#32CD32', '#FFB6C1'],
      dateAdded: '2024-03-12',
      additionalImages: ['/images/Products/women-frock-1.png', '/images/Products/women-frock-1.png']
    },
    {
      id: 14,
      name: 'Evening Party Frock',
      category: 'Women',
      price: 6800,
      image: '/images/Products/women-frock-2.png',
      description: 'Elegant party frock with sequin details for night events.',
      colors: ['#000000', '#800080', '#4B0082'],
      dateAdded: '2024-03-08',
      additionalImages: ['/images/Products/women-frock-2.png', '/images/Products/women-frock-2.png']
    },
    {
      id: 15,
      name: 'Casual Day Frock',
      category: 'Women',
      price: 3500,
      image: '/images/Frock/frock.jpg',
      description: 'Comfortable and stylish frock for everyday casual wear.',
      colors: ['#87CEEB', '#FFFFFF', '#FFD700'],
      dateAdded: '2024-03-03',
      additionalImages: ['/images/Frock/frock.jpg', '/images/Frock/frock.jpg']
    },
    {
      id: 16,
      name: 'Traditional Silk Full Kits',
      category: 'Women',
      price: 8500,
      image: '/images/Full-Kits/traditional.jpg',
      description: 'Traditional full kots with intricate embroidery and silk fabric.',
      colors: ['#800080', '#FF1493', '#4B0082', '#8A2BE2'],
      dateAdded: '2024-03-18',
      additionalImages: ['/images/Full-Kits/traditional.jpg', '/images/Full-Kits/traditional.jpg']
    },
    {
      id: 17,
      name: 'Cotton Full Kits Set',
      category: 'Women',
      price: 6200,
      image: '/images/Products/women-fullkots-2.png',
      description: 'Comfortable cotton full kots set for daily traditional wear.',
      colors: ['#006400', '#228B22', '#32CD32'],
      dateAdded: '2024-03-14',
      additionalImages: ['/images/Products/women-fullkots-2.png', '/images/Products/women-fullkots-2.png']
    },
    {
      id: 18,
      name: 'Designer Full Kits',
      category: 'Women',
      price: 9500,
      image: '/images/Products/women-fullkots-3.png',
      description: 'Designer full kots with premium fabric and detailed work.',
      colors: ['#FF1493', '#8A2BE2', '#4B0082'],
      dateAdded: '2024-03-20',
      additionalImages: ['/images/Products/women-fullkots-3.png', '/images/Products/women-fullkots-3.png']
    },
    {
      id: 19,
      name: 'Basic Cotton T-Shirt',
      category: 'Women',
      price: 1800,
      image: '/images/Women-T-Shirt/basic cotton.jpg',
      description: 'Basic comfortable cotton t-shirt for daily wear.',
      colors: ['#FFFFFF', '#000000', '#808080', '#FF0000'],
      dateAdded: '2024-03-07',
      additionalImages: ['/images/Women-T-Shirt/basic cotton.jpg', '/images/Women-T-Shirt/basic cotton.jpg']
    },
    {
      id: 20,
      name: 'Graphic Women T-Shirt',
      category: 'Women',
      price: 2200,
      image: '/images/Women-T-Shirt/grphic.jpg',
      description: 'Trendy graphic print t-shirt for casual style.',
      colors: ['#000000', '#FFFFFF', '#FF4500'],
      dateAdded: '2024-03-11',
      additionalImages: ['/images/Women-T-Shirt/grphic.jpg', '/images/Women-T-Shirt/grphic.jpg']
    },
    {
      id: 21,
      name: 'V-Neck T-Shirt',
      category: 'Women',
      price: 2000,
      image: '/images/Women-T-Shirt/vneck.jpg',
      description: 'Flattering V-neck t-shirt for a stylish look.',
      colors: ['#87CEEB', '#FFB6C1', '#FFFFFF'],
      dateAdded: '2024-03-16',
      additionalImages: ['/images/Women-T-Shirt/vneck.jpg', '/images/Women-T-Shirt/vneck.jpg']
    },
    {
      id: 22,
      name: 'Kids Cartoon Hoodie',
      category: 'Kids',
      price: 2200,
      image: '/images/Products/kids-hoodie.png',
      description: 'Adorable cartoon printed hoodie for kids. Soft and comfortable fabric.',
      colors: ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0'],
      dateAdded: '2024-03-25',
      additionalImages: ['/images/Products/kids-hoodie.png', '/images/Products/kids-hoodie.png']
    }
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      
      const numericId = parseInt(productId);
      
      // Check if this is a database product ID (>= 1000) or hardcoded product ID (< 1000)
      const isDatabaseProduct = numericId >= 1000;
      const actualDatabaseId = isDatabaseProduct ? numericId - 1000 : numericId;

      // For hardcoded products (ID < 1000), try to find in allProducts array
      if (!isDatabaseProduct) {
        console.log('Searching for hardcoded product with ID:', numericId);
        const foundProduct = allProducts.find(p => p.id === numericId);
        if (foundProduct) {
          console.log('Found hardcoded product:', foundProduct);
          setProduct(foundProduct);
          setSelectedColor(foundProduct.colors[0]);
        } else {
          console.log('Hardcoded product not found with ID:', numericId);
        }
        setLoading(false);
        return;
      }

      // For database products (ID >= 1000), fetch from API
      try {
        const response = await fetch(`http://localhost:5000/api/v1/products/${actualDatabaseId}`);
        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data);
          if (data.success && data.data) {
            const apiProduct = data.data;
          
            // Parse colors - handle both hex codes and color names
            let colorsArray = ['#000000'];
            if (apiProduct.color) {
              const colorString = apiProduct.color;
              // Check if colors are hex codes or names
              if (colorString.includes('#')) {
                colorsArray = colorString.split(',').map((c: string) => c.trim());
              } else {
                // If color names, convert to hex or use default
                colorsArray = ['#000000']; // Default for now
              }
            }
          
            const transformedProduct: Product = {
              id: apiProduct.id,
              name: apiProduct.name,
              category: apiProduct.category,
              price: Number(apiProduct.price),
              image: apiProduct.image_url || '/images/Products/placeholder.png',
              description: apiProduct.description || '',
              colors: colorsArray,
              sizes: apiProduct.size || 'S, M, L, XL',
              colorNames: apiProduct.color || 'Black',
              additionalImages: apiProduct.image_url ? [apiProduct.image_url, apiProduct.image_url] : []
            };
            console.log('Transformed product:', transformedProduct);
            setProduct(transformedProduct);
            setSelectedColor(colorsArray[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching product from API:', error);
      }

      // Fallback to hardcoded products
      console.log('Falling back to hardcoded products, searching for ID:', productId);
      const foundProduct = allProducts.find(p => p.id === numericId);
      if (foundProduct) {
        console.log('Found hardcoded product:', foundProduct);
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors[0]);
      } else {
        console.log('No hardcoded product found with ID:', productId);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  const handleBuyWhatsApp = () => {
    const message = `Product Purchase Request:\n\n• Product: ${product!.name}\n• Size: ${selectedSize}\n• Color: ${selectedColorName}\n• Quantity: ${quantity}\n• Unit Price: LKR ${product!.price.toLocaleString()}\n• Total Price: LKR ${(product!.price * quantity).toLocaleString()}`;
    const whatsappUrl = `https://wa.me/94784865398?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    if (!product) return;

    for (let i = 0; i < quantity; i += 1) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        colors: product.colors,
        category: product.category,
      });
    }
    openCart();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-gray-500 mb-4">Product not found</div>
          <button
            onClick={() => router.push('/Products')}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL'];

  //selected color name
  const colorNamesArray = product.colorNames?.split(', ') || [];
  const selectedColorIndex = product.colors.indexOf(selectedColor);
  const selectedColorName = selectedColorIndex >= 0 && colorNamesArray[selectedColorIndex] ? colorNamesArray[selectedColorIndex] : 'Black';
  const mobileCarouselImages = (product.additionalImages || [])
    .slice(1)
    .filter(Boolean);
  if (mobileCarouselImages.length === 1) {
    mobileCarouselImages.push(product.image);
  }

  const clampSlide = (idx: number) => {
    if (!mobileCarouselImages.length) return 0;
    if (idx < 0) return mobileCarouselImages.length - 1;
    if (idx >= mobileCarouselImages.length) return 0;
    return idx;
  };

  const goToSlide = (direction: 'next' | 'prev') => {
    setMobileSlide((prev) => clampSlide(direction === 'next' ? prev + 1 : prev - 1));
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Product Details Section */}
      <div className="min-h-screen pt-8 pb-8 font-geologica">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
          
          {/* MOBILE LAYOUT */}
          <div className="lg:hidden">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => router.push('/Products')}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                aria-label="Back to products"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            </div>


            {/* Product Title and Fit Badge */}
            <div className="mb-4 flex items-center gap-2">
              <h1 className="text-3xl font-bold text-black">{product.name}</h1>
              {(product.fitType || product.fit) && (
                <div className="bg-yellow-100 text-black px-2 py-1 rounded-md text-xs whitespace-nowrap">
                  <div className="font-semibold text-black">{product.fitType || product.fit}</div>
                </div>
              )}
            </div>

            {/* Main Image */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#f8f8f8] mb-4" style={{ height: '400px' }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Swipeable Images  */}
            {mobileCarouselImages.length > 0 && (
              <div
                className="relative mb-6"
                onTouchStart={(e) => {
                  const startX = e.touches[0].clientX;
                  const handleMove = (moveEvent: TouchEvent) => {
                    const deltaX = moveEvent.touches[0].clientX - startX;
                    if (Math.abs(deltaX) > 40) {
                      goToSlide(deltaX < 0 ? 'next' : 'prev');
                      document.removeEventListener('touchmove', handleMove as any);
                    }
                  };
                  const handleEnd = () => {
                    document.removeEventListener('touchmove', handleMove as any);
                    document.removeEventListener('touchend', handleEnd);
                  };
                  document.addEventListener('touchmove', handleMove as any, { passive: true });
                  document.addEventListener('touchend', handleEnd, { once: true });
                }}
              >
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
                  >
                    {mobileCarouselImages.slice(0, 2).map((img, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 w-full bg-[#f8f8f8]"
                        style={{ height: '160px' }}
                      >
                        <Image
                          src={img}
                          alt={`Product view ${index + 2}`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {mobileCarouselImages.length > 1 && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 text-white">
                    <button
                      aria-label="Previous image"
                      className="bg-black/40 hover:bg-black/60 transition rounded-full p-2"
                      onClick={() => goToSlide('prev')}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      aria-label="Next image"
                      className="bg-black/40 hover:bg-black/60 transition rounded-full p-2"
                      onClick={() => goToSlide('next')}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {mobileCarouselImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-3">
                    {mobileCarouselImages.slice(0, 2).map((_, idx) => (
                      <button
                        key={idx}
                        aria-label={`Go to image ${idx + 1}`}
                        onClick={() => setMobileSlide(idx)}
                        className={`h-2 w-2 rounded-full ${idx === mobileSlide ? 'bg-black' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Price */}
            <div className="mb-4">
              <div className="text-2xl font-bold text-black">LKR {product.price.toFixed(2)}</div>
              <div className="text-sm text-gray-600 mt-1">or with 3 installments of LKR {(product.price / 3).toFixed(2)}</div>
              <div className="mt-2">
                <Image
                  src="/images/Products-Details/koko.png"
                  alt="koko"
                  width={60}
                  height={24}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Available Color */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-black mb-2">Available Color : {selectedColorName}</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full transition-all duration-200 ${
                      selectedColor === color 
                        ? 'ring-2 ring-offset-2 ring-black scale-110' 
                        : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Available Size */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-black">Available Size : {selectedSize}</h3>
                <div className="relative">
                  <button 
                    onClick={() => setShowSizeGuideDropdown(!showSizeGuideDropdown)}
                    className="text-sm underline flex items-center gap-1"
                  >
                    Size Guide
                    <ChevronDown className={`w-4 h-4 transition-transform ${showSizeGuideDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showSizeGuideDropdown && (
                    <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 p-2">
                      {sizeGuides.map((guide) => (
                        <button
                          key={guide.name}
                          onClick={() => {
                            setSelectedSizeGuide(guide.image);
                            setShowSizeGuideDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700 hover:text-black"
                        >
                          {guide.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-full border font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-transparent text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold text-base hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Add to Cart
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>

              <button
                onClick={handleBuyWhatsApp}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold text-base border-2 border-black hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Buy via WhatsApp
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 2C13.5 2 13.5 2 13.5 2L18.5 7L13.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
            </div>

            {/* Shipping Info */}
            <div className="text-sm text-gray-600 mb-1">
              Free shipping on orders over Rs.10,000
            </div>
            <div className="text-sm text-gray-600 mb-6">
              Free Exchange & Returns
            </div>

            {/* Product Details Section for Mobile */}
            <div className="border-t border-gray-300 pt-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between text-left mb-4"
              >
                <h2 className="text-2xl font-bold text-black">Product Details</h2>
                {showDetails ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>

              {showDetails && (
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                      {product.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {product.fabric && (
                        <li className="flex">
                          <span className="font-semibold w-20">Fabric:</span>
                          <span>{product.fabric}</span>
                        </li>
                      )}
                      {product.neckline && (
                        <li className="flex">
                          <span className="font-semibold w-20">Neckline:</span>
                          <span>{product.neckline}</span>
                        </li>
                      )}
                      {product.sizes && (
                        <li className="flex">
                          <span className="font-semibold w-20">Sizes:</span>
                          <span>{product.sizes}</span>
                        </li>
                      )}
                      {product.colorNames && (
                        <li className="flex">
                          <span className="font-semibold w-20">Colors:</span>
                          <span>{product.colorNames}</span>
                        </li>
                      )}
                      {product.care && (
                        <li className="flex">
                          <span className="font-semibold w-20">Care:</span>
                          <span>{product.care}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
            {/* Breadcrumb */}
            <div className="lg:col-span-8 flex items-center gap-2 mb-0">
              <button
                onClick={() => router.push('/Products')}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                aria-label="Back to products"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
            </div>


            {/* Left Side  */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Product Title */}
              <div className="mb-6 flex items-center gap-3">
                <h1 className="text-5xl font-bold text-black mb-0">{product.name}</h1>
                <div className="bg-100 text- px-2 py-2  text-sm">
                  <div className="text-xs text-gray-600"></div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-black">LKR {product.price.toFixed(2)}</div>
                <div className="text-sm text-gray-600 mt-1">or with 3 installments of LKR {(product.price / 3).toFixed(2)}</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/Products-Details/koko.png"
                      alt="koko"
                      width={80}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Available Color */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-black mb-3">Available Color : {selectedColorName}</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full transition-all duration-200 ${
                        selectedColor === color 
                          ? 'ring-2 ring-offset-2 ring-black scale-110' 
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Available Size */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-semibold text-black">Available Size : {selectedSize}</h3>
                  <div className="relative">
                    <button 
                      onClick={() => setShowSizeGuideDropdown(!showSizeGuideDropdown)}
                      className="text-sm underline flex items-center gap-1"
                    >
                      Size Guide
                      <ChevronDown className={`w-4 h-4 transition-transform ${showSizeGuideDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    {showSizeGuideDropdown && (
                      <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 p-2">
                        {sizeGuides.map((guide) => (
                          <button
                            key={guide.name}
                            onClick={() => {
                              setSelectedSizeGuide(guide.image);
                              setShowSizeGuideDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700 hover:text-black"
                          >
                            {guide.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full border font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-transparent text-black border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Add to Cart
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>

                <button
                  onClick={handleBuyWhatsApp}
                  className="w-full bg-white text-black py-4 rounded-lg font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Buy via WhatsApp
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 2C13.5 2 13.5 2 13.5 2L18.5 7L13.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              </div>

              {/* Shipping Info */}
              <div className="text-sm text-gray-600 mb-2">
                Free shipping on orders over Rs.10,000
              </div>
              <div className="text-sm text-gray-600 mb-6">
                Free Exchange & Returns
              </div>


            </div>

            {/* Right Side - Image Grid  */}
            <div className="lg:col-span-7">
              <div className="w-full h-full">
                <div className="grid grid-cols-3 gap-6 items-stretch">    

                  {/*MAIN IMAGE*/}
                  <div
                    className="col-span-2 relative rounded-[28px] overflow-hidden bg- shadow-"
                    style={{ minHeight: 640 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                      style={{
                        clipPath: 'polygon(75% 0, 0% 0, 0% 6%, 0% 75%, 25% 100%, 100% 100%, 100% 94%, 100% 25%)'
                      }}
                      priority
                    />
                  </div>

                  {/* RIGHT COLUMN  */}
                  <div className="col-span-1 flex flex-col gap-6">
                    <div
                      className="relative rounded-[20px] overflow-hidden bg-[#f8f8f8] shadow-lg"
                      style={{
                        height: 310,
                        clipPath: 'polygon(75% 0, 0% 0, 0% 6%, 0% 75%, 25% 100%, 100% 100%, 100% 94%, 100% 25%)'
                      }}
                    >
                      <Image
                        src={product.additionalImages?.[0] || product.image}
                        alt="Product view 1"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                        style={{
                          transform: 'scale(1.7s)',
                          objectPosition: 'center 20%'
                        }}
                        priority
                      />
                    </div>
                    <div
                      className="relative rounded-[20px] overflow-hidden bg-[#f8f8f8] shadow-lg"
                      style={{
                        height: 310,
                        clipPath: 'polygon(75% 0, 0% 0, 0% 6%, 0% 75%, 25% 100%, 100% 100%, 100% 94%, 100% 25%)'
                      }}
                    >
                      <Image
                        src={product.additionalImages?.[1] || product.image}
                        alt="Product view 2"
                        fill
                        sizes="(max-width: 1024px) 100vw, 53vw"
                        className="object-cover"
                        style={{
                          transform: 'scale(1.9)',
                          objectPosition: 'center 70%'
                        }}
                        priority
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Section  */}
          <div className="mt-16 border-t border-gray-300 pt-8 hidden lg:block">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full flex items-center justify-between text-left mb-8"
            >
              <h2 className="text-3xl font-bold text-black">Product Details</h2>
              {showDetails ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>

            {showDetails && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>

                {/*Specifications */}
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex">
                      <span className="font-semibold w-24">Fabric:</span>
                      <span>{product.fabric}</span>
                    </li>
                    <li className="flex">
                      <span className="font-semibold w-24">Fit:</span>
                      <span>{product.fitType}</span>
                    </li>
                    <li className="flex">
                      <span className="font-semibold w-24">Neckline:</span>
                      <span>{product.neckline}</span>
                    </li>
                    <li className="flex">
                      <span className="font-semibold w-24">Sizes:</span>
                      <span>{product.sizes}</span>
                    </li>
                    <li className="flex">
                      <span className="font-semibold w-24">Colors:</span>
                      <span>{product.colorNames}</span>
                    </li>
                    <li className="flex">
                      <span className="font-semibold w-24">Care:</span>
                      <span>{product.care}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

        <LatestArrivals />
      {/* Footer */}
      <Footer />

      {/* Size Guide */}
      {selectedSizeGuide && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4"
          onClick={() => setSelectedSizeGuide(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] lg:max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-3 lg:p-4 border-b border-gray-200">
              <h3 className="text-base lg:text-lg font-semibold text-black">Size Guide</h3>
              <button
                onClick={() => setSelectedSizeGuide(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-2 lg:p-4 overflow-auto max-h-[70vh] lg:max-h-[calc(90vh-80px)]">
              <div className="relative w-full h-[65vh] lg:h-[600px]">
                <Image
                  src={selectedSizeGuide}
                  alt="Size Guide"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
