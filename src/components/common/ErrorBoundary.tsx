import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { AppButton } from './AppButton';

interface Props {
  children?: React.ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends (React.Component as unknown as {
  new (props: Props): {
    props: Props;
    state: State;
    setState(state: Partial<State>): void;
    render(): React.ReactNode;
  };
}) {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: React.ErrorInfo, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in component:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-rose-50/50 rounded-3xl border border-rose-100 my-6">
          <div className="w-16 h-16 rounded-3xl bg-rose-100 flex items-center justify-center text-rose-600 mb-4 shadow-xs">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold font-heading text-slate-800 mb-2">
            {this.props.fallbackTitle || 'Đã có lỗi xảy ra'}
          </h2>
          <p className="text-sm font-medium text-slate-600 max-w-md mb-6">
            Rất tiếc! Hệ thống gặp sự cố nhỏ. Vui lòng nhấn nút thử lại bên dưới để tiếp tục học nhé.
          </p>
          <AppButton onClick={this.handleReset} variant="primary" icon={<RefreshCw className="w-5 h-5" />}>
            Thử lại ngay
          </AppButton>
        </div>
      );
    }

    return this.props.children;
  }
}
