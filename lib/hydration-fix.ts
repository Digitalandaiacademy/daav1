/**
 * Utility functions to handle hydration mismatches caused by browser extensions
 */

import { useEffect, useState } from 'react';

/**
 * Hook to ensure client-side only rendering for components affected by browser extensions
 */
export function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Component wrapper that ensures client-side rendering only
 */
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const isClient = useClientOnly();
  
  if (!isClient) {
    return null;
  }

  return <>{children}</>;
}

/**
 * Suppress specific hydration warnings in development
 */
export function suppressHydrationWarnings() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const originalError = console.error;
    
    console.error = (...args: any[]) => {
      const message = args[0];
      
      // Suppress hydration mismatch warnings from browser extensions
      if (
        typeof message === 'string' &&
        (message.includes('hydration') || message.includes('did not match')) &&
        (message.includes('bis_') || message.includes('__processed_'))
      ) {
        return;
      }
      
      originalError(...args);
    };
  }
}
