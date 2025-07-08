'use client';

import { useEffect } from 'react';

let posthog: any = null;

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple PostHog initialization for development
    if (typeof window !== 'undefined') {
      // Mock PostHog for development
      posthog = {
        capture: (event: string, properties?: any) => {
          console.log('PostHog Event:', event, properties);
        },
      };
    }
  }, []);

  return <>{children}</>;
}

export function usePostHog() {
  return posthog;
} 