import Link from 'next/link';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart';

interface NavigationProps {
  onCartClick: () => void;
}

export default function Navigation({ onCartClick }: NavigationProps) {
  const { items } = useCartStore();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              ShopStyle
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Sign In
            </Link>
            <button
              onClick={onCartClick}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 