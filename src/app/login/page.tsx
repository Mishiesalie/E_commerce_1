'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '@/services/auth';
import Link from 'next/link';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import Checkbox from '@/components/forms/Checkbox';
import Button from '@/components/forms/Button';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check if there's a saved email in localStorage
    if (typeof window !== 'undefined') {
      const savedEmail = localStorage.getItem('rememberedEmail');
      if (savedEmail) {
        setRememberMe(true);
      }
    }
  }, []);

  useEffect(() => {
    // Initialize Google sign-in button after component mounts
    const timer = setTimeout(() => {
      signInWithGoogle();
    }, 1000); // Give the Google script time to load

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email === 'test@example.com' && password === 'password') {
        // Store email if remember me is checked
        if (rememberMe && typeof window !== 'undefined') {
          localStorage.setItem('rememberedEmail', email);
        } else if (typeof window !== 'undefined') {
          localStorage.removeItem('rememberedEmail');
        }

        // Redirect to home page
        router.push('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              id="email"
              name="email"
              type="email"
              label="Email address"
              required
              defaultValue={rememberMe && typeof window !== 'undefined' ? localStorage.getItem('rememberedEmail') || '' : ''}
            />
            <PasswordInput
              id="password"
              name="password"
              label="Password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Checkbox
              id="remember-me"
              name="remember-me"
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full"
          >
            Sign in
          </Button>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <div id="google-sign-in-button" />
            </div>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            create a new account
          </Link>
        </p>
      </div>
    </div>
  );
} 