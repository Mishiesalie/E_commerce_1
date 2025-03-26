'use client';

import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Cart from '@/components/Cart';
import { useCartStore } from '@/store/cart';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

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
  {
    id: 7,
    name: 'Wireless Earbuds',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop',
  },
  {
    id: 8,
    name: 'Laptop Backpack',
    price: 49.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
  },
  {
    id: 9,
    name: 'Bluetooth Speaker',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
  },
  {
    id: 10,
    name: 'Throw Pillows Set',
    price: 34.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=500&h=500&fit=crop',
  },
  {
    id: 11,
    name: 'Running Shoes',
    price: 119.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
  },
  {
    id: 12,
    name: 'Smart Thermostat',
    price: 199.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1567769541715-8c71fe49fd43?w=500&h=500&fit=crop',
  },
  {
    id: 13,
    name: 'Tablet',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
  },
  {
    id: 14,
    name: 'Leather Wallet',
    price: 39.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
  },
  {
    id: 15,
    name: 'Air Purifier',
    price: 159.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?w=500&h=500&fit=crop',
  }
];

const categories = ['All', 'Electronics', 'Fashion', 'Home & Living'];

export default function ProductsPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { items, addItem } = useCartStore();
  const searchParams = useSearchParams();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Get category from URL if present
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation onCartClick={() => setIsCartOpen(true)} />

      {/* Products Grid */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">All Products</h1>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-48 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Filter by category"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                    <Link href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <button
                onClick={() => {
                  addItem(product);
                  setIsCartOpen(true);
                }}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
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