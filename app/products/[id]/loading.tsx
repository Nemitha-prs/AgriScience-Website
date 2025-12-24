export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-cream flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative w-[150px] h-[150px] mb-8 animate-pulse">
          <div className="absolute inset-0 bg-primary-green/20 rounded-full" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
          <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '200ms', animationDuration: '1.4s' }} />
          <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '400ms', animationDuration: '1.4s' }} />
        </div>
        <p className="mt-6 text-neutral-gray">Loading product details...</p>
      </div>
    </div>
  );
}

