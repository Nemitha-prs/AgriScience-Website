'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Gracefully catches runtime errors without affecting UI when no error occurs
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for debugging (non-intrusive)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Only show fallback UI when error occurs - doesn't affect normal rendering
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-neutral-cream flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-heading font-bold text-neutral-charcoal mb-4">
              Something went wrong
            </h1>
            <p className="text-neutral-gray mb-8">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-3 bg-primary-green text-white rounded-lg font-semibold hover:bg-primary-green-dark transition-colors"
              aria-label="Reload page"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

