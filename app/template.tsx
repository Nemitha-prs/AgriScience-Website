'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prevPathRef = useRef<string>('');
  const isFirstMount = useRef(true);
  const timersRef = useRef<{
    loading?: NodeJS.Timeout;
    interval?: NodeJS.Timeout;
    max?: NodeJS.Timeout;
  }>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined' || !isMounted) return;

    // Skip first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPathRef.current = pathname;
      return;
    }

    // Check if pathname changed
    if (prevPathRef.current !== pathname) {
      // Clear all existing timers
      if (timersRef.current.loading) {
        clearTimeout(timersRef.current.loading);
      }
      if (timersRef.current.interval) {
        clearInterval(timersRef.current.interval);
      }
      if (timersRef.current.max) {
        clearTimeout(timersRef.current.max);
      }
      timersRef.current = {};

      // Show loading immediately
      setIsNavigating(true);
      const currentPath = pathname;
      prevPathRef.current = currentPath;

      // Wait for page to load
      const startChecking = () => {
        // Check for main content and images
        timersRef.current.interval = setInterval(() => {
          if (typeof document === 'undefined') return;

          const main = document.querySelector('main');
          if (main && document.readyState === 'complete') {
            // Clear interval
            if (timersRef.current.interval) {
              clearInterval(timersRef.current.interval);
              timersRef.current.interval = undefined;
            }

            // Get all images (excluding logo)
            const images = Array.from(document.querySelectorAll('img')).filter(
              (img) => {
                const el = img as HTMLImageElement;
                return (
                  el.src &&
                  !el.src.startsWith('data:') &&
                  !el.src.includes('logo.png')
                );
              }
            );

            if (images.length === 0) {
              // No images, hide loading after short delay
              timersRef.current.loading = setTimeout(() => {
                setIsNavigating(false);
              }, 200);
              return;
            }

            // Track image loading
            let loadedCount = 0;
            const totalImages = images.length;
            let allLoaded = false;

            const checkImageLoad = () => {
              loadedCount++;
              if (loadedCount === totalImages && !allLoaded) {
                allLoaded = true;
                timersRef.current.loading = setTimeout(() => {
                  setIsNavigating(false);
                }, 150);
              }
            };

            // Check each image
            images.forEach((img) => {
              const el = img as HTMLImageElement;
              if (el.complete) {
                checkImageLoad();
              } else {
                el.addEventListener('load', checkImageLoad, { once: true });
                el.addEventListener('error', checkImageLoad, { once: true });
              }
            });

            // Fallback timeout for images
            if (!allLoaded) {
              timersRef.current.loading = setTimeout(() => {
                if (!allLoaded) {
                  allLoaded = true;
                  setIsNavigating(false);
                }
              }, 2500);
            }
          }
        }, 50);

        // Maximum timeout - force hide after 3 seconds
        timersRef.current.max = setTimeout(() => {
          if (timersRef.current.interval) {
            clearInterval(timersRef.current.interval);
            timersRef.current.interval = undefined;
          }
          if (timersRef.current.loading) {
            clearTimeout(timersRef.current.loading);
            timersRef.current.loading = undefined;
          }
          setIsNavigating(false);
        }, 3000);
      };

      // Start checking after a small delay
      if (typeof window !== 'undefined' && window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          setTimeout(startChecking, 50);
        });
      } else {
        setTimeout(startChecking, 50);
      }
    }
  }, [pathname, isMounted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timersRef.current.loading) clearTimeout(timersRef.current.loading);
      if (timersRef.current.interval) clearInterval(timersRef.current.interval);
      if (timersRef.current.max) clearTimeout(timersRef.current.max);
    };
  }, []);

  return (
    <>
      {isNavigating && isMounted && (
        <div className="fixed inset-0 z-[9999] bg-neutral-cream flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
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
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
              <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '200ms', animationDuration: '1.4s' }} />
              <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '400ms', animationDuration: '1.4s' }} />
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          visibility: isNavigating ? 'hidden' : 'visible',
          opacity: isNavigating ? 0 : 1,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
}
