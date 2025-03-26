'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500" />
        </div>
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Thank you for your order!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We'll send you a confirmation email with your order details shortly.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            href="/products"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 