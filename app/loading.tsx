import Image from 'next/image';

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-neutral-cream flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Logo with subtle pulse animation */}
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

