'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to ShopStyle</span>
              <span className="block text-blue-600">Discover Your Style</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Shop the latest trends in fashion, electronics, and more. Free shipping on orders over $50.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Electronics', 'Fashion', 'Home & Living'].map((category) => (
              <div key={category} className="relative rounded-lg overflow-hidden group">
                <div className="aspect-w-3 aspect-h-2">
                  <div className="bg-gray-200 w-full h-full"></div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About Us</h3>
              <p className="mt-4 text-base text-gray-500">
                ShopStyle is your one-stop destination for all your shopping needs.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/products" className="text-base text-gray-500 hover:text-gray-900">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/categories" className="text-base text-gray-500 hover:text-gray-900">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact</h3>
              <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-500">
                  Email: support@shopstyle.com
                </li>
                <li className="text-base text-gray-500">
                  Phone: (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
