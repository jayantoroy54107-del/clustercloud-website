import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-5 text-center antialiased">
          <div className="h-16 w-16 rounded-2xl bg-blue-50 border border-blue-100 text-[#2563EB] flex items-center justify-center mb-5 shadow-xs">
            <span className="text-2xl font-black">!</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
            Something went wrong
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We ran into an unexpected issue while rendering this view. You can return to the home page or try again.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/';
              }}
              className="px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm tracking-wide shadow-md transition-all cursor-pointer"
            >
              Return to Home
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all cursor-pointer"
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
