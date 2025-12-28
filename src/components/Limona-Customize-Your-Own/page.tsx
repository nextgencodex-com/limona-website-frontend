'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const LimonaCustomizeYourOwn = () => {
  const [activeTab, setActiveTab] = useState<'customize' | 'printed'>('customize');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    designUrl: '',
    additionalNotes: '',
  });
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
      // Allow only numbers, plus sign, spaces, parentheses, and hyphens
      const sanitizedValue = value.replace(/[^\d\s\+\-\(\)]/g, '');
      
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue,
      }));
      
      // Clear error when user starts typing
      if (phoneError && sanitizedValue) {
        setPhoneError('');
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // Remove all non-digits for validation
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Basic validation: at least 7 digits, max 15 digits
    if (digitsOnly.length < 7) {
      setPhoneError('Phone number must have at least 7 digits');
      return false;
    }
    
    if (digitsOnly.length > 15) {
      setPhoneError('Phone number is too long');
      return false;
    }
    
    // Clear error if valid
    setPhoneError('');
    return true;
  };

  const handlePhoneBlur = () => {
    if (formData.phoneNumber.trim()) {
      validatePhoneNumber(formData.phoneNumber);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please choose a smaller image.');
        return;
      }
      
      setUploadedImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmitViaWhatsApp = () => {
    // Validate phone number before submission
    if (!validatePhoneNumber(formData.phoneNumber)) {
      return;
    }

    const message = `*New Custom Design Request*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Design URL:* ${formData.designUrl}\n` +
      `*Notes:* ${formData.additionalNotes}\n` +
      `${uploadedImage ? '*Image Uploaded:* Yes' : ''}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94784865398?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = formData.fullName && formData.phoneNumber && 
                     (formData.designUrl || uploadedImage) && 
                     !phoneError;

  return (
    <>
      {/* ========== DESKTOP VIEW ========== */}
      <div className="hidden md:block">
        {/* Desktop Hero Section */}
        <section className="py-14 bg-white font-geologica tracking-[0.07em]" style={{ letterSpacing: '0.07em' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-[35px] overflow-visible shadow-xl border border-gray-300 h-[294px]">
                {/* FULL BACKGROUND IMAGE */}
                <img
                  src="/images/Products/Frame 40.png"
                  alt="Design & Print Background"
                  className="absolute inset-0 w-full h-full object-cover rounded-[35px]"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/1920x600/1a1a1a/ffffff?text=Custom+T-Shirt+Design`;
                  }}
                />

                {/* LEFT GRADIENT OVERLAY */}
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/50 to-transparent rounded-l-[35px]"></div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-row items-center h-full">
                  {/* LEFT TEXT */}
                  <div className="w-1/2 p-12 text-white text-left">
                    <h1 
                      className="text-5xl font-bold mb-4 leading-tight tracking-[0.05em]"
                      style={{ letterSpacing: '0.05em' }}
                    >
                      Design & Print Your Tee
                    </h1>

                    <p 
                      className="text-base opacity-90 tracking-[0.05em] font-geologica"
                      style={{ letterSpacing: '0.05em' }}
                    >
                      Create your unique masterpiece with our custom design service
                    </p>
                  </div>

                  {/* RIGHT MODEL IMAGE */}
                  <div className="hidden lg:block lg:w-1/2 relative flex items-center justify-end h-full">
                    <div className="relative" style={{ marginRight: '40px' }}>
                      <img
                        src="/images/Products/portrait 1.png"
                        className="absolute left-50 -top-14 h-[250px] md:h-[349px] object-contain relative z-20"
                        alt="T-Shirt Design"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/600x800/EEE/31343C?text=Custom+T-Shirt`;
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

        {/* Tab Navigation */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-center">
              <button
                onClick={() => setActiveTab('customize')}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all tracking-[0.07em] border mr-2 ${
                  activeTab === 'customize'
                    ? 'bg-[#FACC15] text-black border-[#FACC15]' 
                    : 'text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                Customize Your Own
              </button>
              <button
                onClick={() => window.location.href = '/Printed-T-Shirt'}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all tracking-[0.07em] border ml-2 ${
                  activeTab === 'printed'
                    ? 'bg-[#FACC15] text-black border-[#FACC15]'
                    : 'text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                Printed T-Shirt
              </button>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div>
                {/* Your Information */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 tracking-[0.07em]">
                    Your Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 tracking-[0.07em]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2 tracking-[0.07em]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        onBlur={handlePhoneBlur}
                        inputMode="numeric"
                        pattern="[0-9\s\+\-\(\)]*"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em] ${
                          phoneError ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., (+94) 76 590 8361"
                      />
                      {phoneError && (
                        <p className="mt-1 text-sm text-red-600 tracking-[0.07em]">
                          {phoneError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Design Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 tracking-[0.07em]">
                    Design Details
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-3 tracking-[0.07em]">
                        Upload Your Design
                      </h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                        <input
                          type="file"
                          id="designUpload"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="designUpload"
                          className="cursor-pointer flex flex-col items-center"
                        >
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-700 mb-1 tracking-[0.07em]">
                            Upload Your Design
                          </span>
                          <span className="text-xs text-gray-500 tracking-[0.07em]">
                            PNG, JPG, JPEG up to 5MB
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-600 mb-4 tracking-[0.07em]">
                        Or paste image URL below
                      </p>
                      <div>
                        <label htmlFor="designUrl" className="block text-sm font-medium text-gray-700 mb-2 text-left tracking-[0.07em]">
                          Design URL
                        </label>
                        <input
                          type="url"
                          id="designUrl"
                          name="designUrl"
                          value={formData.designUrl}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em]"
                          placeholder="https://example/image.jpg"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2 tracking-[0.07em]">
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em] resize-none"
                        placeholder="Any special instructions, color preferences, or design details..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image Preview & WhatsApp Button */}
              <div className="flex flex-col">
                <div className="flex-1 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-4 tracking-[0.07em]">
                    Design Preview
                  </h3>
                  
                  {imagePreview ? (
                    <div className="relative h-96 w-full border border-gray-300 rounded-lg overflow-hidden">
                      <Image
                        src={imagePreview}
                        alt="Uploaded design preview"
                        fill
                        className="object-contain"
                        onLoad={() => URL.revokeObjectURL(imagePreview)}
                      />
                    </div>
                  ) : formData.designUrl ? (
                    <div className="relative h-96 w-full border border-gray-300 rounded-lg overflow-hidden">
                      <Image
                        src={formData.designUrl}
                        alt="Design from URL"
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/api/placeholder/400/400';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-96 w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-sm tracking-[0.07em]">
                          Upload an image or enter URL to preview
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600 mb-4 tracking-[0.07em]">
                      Your design will be reviewed and we'll contact you shortly
                    </p>
                    
                    <button
                      onClick={handleSubmitViaWhatsApp}
                      disabled={!isFormValid}
                      className={`w-full max-w-md mx-auto py-3 px-5 rounded-lg font-medium text-base tracking-[0.07em] transition ${
                        isFormValid
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                        </svg>
                        Send via WhatsApp
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========== MOBILE VIEW ========== */}
      <div className="block md:hidden">
        {/* Mobile Hero Section */}
        <section className="py-8 bg-white font-geologica tracking-[0.07em] px-4">
          <div className="relative rounded-4xl overflow-hidden shadow-lg border border-gray-200 h-[120px]">
            <img
              src="/images/Products/Frame 40.png"
              alt="Design & Print Background"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x200/1a1a1a/ffffff?text=Custom+T-Shirt`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <h1 className="text-xl text-center font-bold mb-1 tracking-[0.05em]">
                Design & Print Your Tee
              </h1>
              <p className="text-xs text-center opacity-90 tracking-[0.05em]">
                Create your unique masterpiece
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Tab Navigation */}
        <section className="py-5 px-4">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveTab('customize')}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-all tracking-[0.07em] border ${
                activeTab === 'customize'
                  ? 'bg-[#FACC15] text-black border-[#FACC15]' 
                  : 'text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              Customize Your Own
            </button>
            <button
              onClick={() => window.location.href = '/Printed-T-Shirt'}
              className={`px-4 py-2 rounded-md text-xs font-medium transition-all tracking-[0.07em] border ${
                activeTab === 'printed'
                  ? 'bg-[#FACC15] text-black border-[#FACC15]'
                  : 'text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              Printed T-Shirt
            </button>
          </div>
        </section>

        {/* Mobile Form Section - Single Column */}
        <section className="py-6 px-4">
          <div className="space-y-6">
            {/* Your Information */}
            <div>
              <h2 className="text-lg font-bold mb-4 tracking-[0.07em]">
                Your Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="mobileFullName" className="block text-xs font-medium text-gray-700 mb-1 tracking-[0.07em]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="mobileFullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em] text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="mobilePhoneNumber" className="block text-xs font-medium text-gray-700 mb-1 tracking-[0.07em]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="mobilePhoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    onBlur={handlePhoneBlur}
                    inputMode="numeric"
                    pattern="[0-9\s\+\-\(\)]*"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em] text-sm ${
                      phoneError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., (+94) 76 590 8361"
                  />
                  {phoneError && (
                    <p className="mt-1 text-xs text-red-600 tracking-[0.07em]">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Design Details */}
            <div>
              <h2 className="text-lg font-bold mb-4 tracking-[0.07em]">
                Design Details
              </h2>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2 tracking-[0.07em]">
                  Upload Your Design
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition">
                  <input
                    type="file"
                    id="mobileDesignUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="mobileDesignUpload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-700 mb-1 tracking-[0.07em]">
                      Upload Your Design
                    </span>
                    <span className="text-xs text-gray-500 tracking-[0.07em]">
                      PNG, JPG, JPEG up to 5MB
                    </span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 mb-2 text-xs tracking-[0.07em] text-center">
                  Or paste image URL below
                </p>
                <div>
                  <label htmlFor="mobileDesignUrl" className="block text-xs font-medium text-gray-700 mb-1 tracking-[0.07em]">
                    Design URL
                  </label>
                  <input
                    type="url"
                    id="mobileDesignUrl"
                    name="designUrl"
                    value={formData.designUrl}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em] text-sm"
                    placeholder="https://example/image.jpg"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="mobileAdditionalNotes" className="block text-xs font-medium text-gray-700 mb-1 tracking-[0.07em]">
                  Additional Notes
                </label>
                <textarea
                  id="mobileAdditionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition tracking-[0.07em] text-sm resize-none"
                  placeholder="Any special instructions, color preferences, or design details..."
                />
              </div>
            </div>

            {/* Design Preview */}
            <div>
              <h3 className="text-base font-medium text-gray-700 mb-3 tracking-[0.07em]">
                Design Preview
              </h3>
              
              {imagePreview ? (
                <div className="relative h-48 w-full border border-gray-300 rounded-lg overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Uploaded design preview"
                    fill
                    className="object-contain"
                    onLoad={() => URL.revokeObjectURL(imagePreview)}
                  />
                </div>
              ) : formData.designUrl ? (
                <div className="relative h-48 w-full border border-gray-300 rounded-lg overflow-hidden">
                  <Image
                    src={formData.designUrl}
                    alt="Design from URL"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/400/400';
                    }}
                  />
                </div>
              ) : (
                <div className="h-48 w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-xs tracking-[0.07em]">
                      Upload an image or enter URL to preview
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-600 mb-3 tracking-[0.07em]">
                Your design will be reviewed and we'll contact you shortly
              </p>
              
              <button
                onClick={handleSubmitViaWhatsApp}
                disabled={!isFormValid}
                className={`w-full py-3 px-4 rounded-lg font-medium text-sm tracking-[0.07em] transition ${
                  isFormValid
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  Send via WhatsApp
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LimonaCustomizeYourOwn;