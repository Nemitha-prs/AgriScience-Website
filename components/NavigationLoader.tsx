'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NavigationLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Skip on initial mount (page refresh/initial load)
    if (prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      return;
    }

    // Only show loading if pathname changed (navigation occurred)
    if (pathname !== prevPathnameRef.current) {
      setIsLoading(true);
      prevPathnameRef.current = pathname;

      // Wait for page to be fully loaded
      const checkPageLoaded = () => {
        // Check if document is ready
        if (document.readyState === 'complete') {
          // Wait a bit more for images and async content
          setTimeout(() => {
            setIsLoading(false);
          }, 100);
        } else {
          // If not ready, wait for load event
          window.addEventListener('load', () => {
            setTimeout(() => {
              setIsLoading(false);
            }, 100);
          }, { once: true });
        }
      };

      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        checkPageLoaded();
      });
    }
  }, [pathname, isMounted]);

  if (!isLoading || !isMounted) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-neutral-cream flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="relative w-[200px] h-[200px] animate-pulse">
            <Image
              src="/images/logo.png"
              alt="AgriScience Internationals"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Loading indicator dots */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
          <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '200ms', animationDuration: '1.4s' }} />
          <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '400ms', animationDuration: '1.4s' }} />
        </div>
      </div>
    </div>
  );
}

