'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Cart from '@/components/Cart';
import { useCartStore } from '@/store/cart';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Classic T-Shirt',
    price: 29.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Denim Jeans',
    price: 59.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 79.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1517663154410-3e881ddb5c25?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    name: 'Smart LED Bulb',
    price: 24.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&h=500&fit=crop',
  },
];

export default function ProductsPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, addItem } = useCartStore();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">
                ShopStyle
              </a>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <button
                onClick={() => addItem(product)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Cart */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Footer */}
      <footer className="bg-gray-50 mt-12">
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
    </div>
  );
} 