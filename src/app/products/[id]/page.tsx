'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
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

export default function ProductDetailPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, addItem } = useCartStore();
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onCartClick={() => setIsCartOpen(true)} />

      {/* Product Detail */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-500">{product.category}</p>
            <p className="mt-4 text-3xl font-bold text-gray-900">${product.price}</p>
            <button
              onClick={() => {
                addItem(product);
                setIsCartOpen(true);
              }}
              className="mt-8 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Cart */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
} 