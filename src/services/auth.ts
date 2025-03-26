// Google OAuth configuration
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
if (!GOOGLE_CLIENT_ID) {
  console.error('NEXT_PUBLIC_GOOGLE_CLIENT_ID is not defined');
}

// Initialize Google OAuth client
const initGoogleClient = () => {
  if (typeof window !== 'undefined' && window.google && GOOGLE_CLIENT_ID) {
    try {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleCallback,
        auto_select: false,
        cancel_on_tap_outside: true,
        context: 'signin',
      });
    } catch (error) {
      console.error('Failed to initialize Google client:', error);
    }
  }
};

// Handle Google sign-in callback
const handleGoogleCallback = async (response: any) => {
  try {
    if (!response.credential) {
      throw new Error('No credential received from Google');
    }

    // Send the token to your backend for verification
    const result = await fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.credential }),
    });

    if (!result.ok) {
      const errorData = await result.json();
      throw new Error(errorData.error || 'Failed to authenticate with Google');
    }

    const data = await result.json();
    
    // Store the user data in localStorage or your preferred state management solution
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
    }

    // Redirect to the home page or dashboard
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  } catch (error) {
    console.error('Google sign-in error:', error);
    // You might want to show an error message to the user here
    throw error;
  }
};

// Sign in with Google
export const signInWithGoogle = () => {
  if (typeof window !== 'undefined' && window.google) {
    try {
      const buttonElement = document.getElementById('google-sign-in-button');
      if (buttonElement) {
        window.google.accounts.id.renderButton(
          buttonElement,
          { 
            theme: 'outline', 
            size: 'large', 
            width: 100,
            text: 'signin_with'
          }
        );
      } else {
        console.error('Google sign-in button element not found');
      }
    } catch (error) {
      console.error('Failed to render Google sign-in button:', error);
    }
  } else {
    console.error('Google client not loaded');
  }
};

// Sign out
export const signOut = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('token');
  }
  return false;
};

// Get current user
export const getCurrentUser = () => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
  return null;
};

// Initialize Google client when the script loads
if (typeof window !== 'undefined') {
  window.addEventListener('load', initGoogleClient);
} 