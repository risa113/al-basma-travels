import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#022c22] text-[#f8f9fa] flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#011d17] border border-[#d4af37]/40 rounded-xl p-8 shadow-2xl">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#d4af37]/10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-2xl font-bold font-arabic">
              بسمة
            </div>
            <h1 className="text-xl font-serif text-[#d4af37] mb-2 font-bold tracking-wide">
              ALBASMA TOURS &amp; TRAVELS
            </h1>
            <p className="text-sm text-gray-300 mb-6">
              A temporary display error occurred. Please refresh the page to restore your luxury travel experience.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="bg-[#d4af37] hover:bg-[#b89628] text-[#022c22] font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded shadow-lg transition-all"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
