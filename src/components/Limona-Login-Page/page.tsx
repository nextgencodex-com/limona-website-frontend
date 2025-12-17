'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Image from 'next/image';

const LimonaLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate inputs
    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      // Replace with your actual API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      
      // if (!response.ok) throw new Error('Login failed');
      
      // On successful login
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content - Centered 2 Column Layout */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Mobile Layout - Image on top, form below */}
          <div className="block lg:hidden">
            <div className="flex flex-col items-center justify-center space-y-8">
              
              {/* Top - Image */}
              <div className="w-full max-w-sm">
                <div className="relative">
                  <div className="w-full h-64 relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/Footer/image 9.png"
                      alt="Limona Fashion"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Bottom - Login Form */}
              <div className="w-full max-w-md">
                {/* Login Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-black mb-2">
                    Welcome to Limona Fashion
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Sign in to your account to continue
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                {/* Login Form */}
                <form className="bg-white rounded-lg" onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="mb-6">
                    <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email-mobile"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="mb-6">
                    <label htmlFor="password-mobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password-mobile"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="/forgot-password"
                      className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center py-3 px-6 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign In
                        <span className="ml-2">→</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Additional Mobile-friendly Links */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm mt-4">
                    Don't have an account?{' '}
                    <a
                      href="/register"
                      className="text-yellow-600 hover:text-yellow-700 font-medium"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Login Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                {/* Login Header - NO CIRCLE WITH "L" */}
                <div className="mb-8">
                  <div className="mb-6">
                    {/* REMOVED: Circle with "L" */}
                    <h1 className="text-4xl font-bold text-black mb-2">
                      Welcome to <span className="text-yellow-500">Limona</span>
                    </h1>
                    <h2 className="text-xl text-gray-700">Fashion Clothing Store</h2>
                    <p className="text-gray-600 mt-2">
                      Sign in to your account to continue
                    </p>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                {/* Login Form */}
                <form className="bg-white rounded-lg" onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="/forgot-password"
                      className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center py-3 px-8 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ minWidth: '124px' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign In
                        <span className="ml-2">→</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Desktop Links */}
                <div className="mt-6">
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <a
                      href="/register"
                      className="text-yellow-600 hover:text-yellow-700 font-medium"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Your Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg">
                <div className="w-full h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/Footer/image 9.png"
                    alt="Limona Fashion Clothing"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LimonaLoginPage;