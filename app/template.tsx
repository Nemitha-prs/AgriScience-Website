'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prevPathRef = useRef<string>('');
  const isFirstMount = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !isMounted) return;

    // Skip first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPathRef.current = pathname;
      return;
    }

    // Check if pathname changed
    if (prevPathRef.current !== pathname) {
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Show loading immediately
      setIsNavigating(true);
      prevPathRef.current = pathname;

      // Hide loading after a short delay (optimistic)
      // Next.js prefetching should make navigation fast
      timeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
      }, 150); // Very short delay for smooth transition
    }
  }, [pathname, isMounted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {isNavigating && isMounted && (
        <div className="fixed top-0 left-0 right-0 h-1 z-[9999] bg-neutral-cream">
          <div className="h-full bg-primary-green animate-pulse" style={{ width: '30%' }} />
        </div>
      )}
      <div
        style={{
          opacity: isNavigating ? 0.7 : 1,
          transition: 'opacity 0.15s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
}
