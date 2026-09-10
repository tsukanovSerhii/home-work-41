import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Щось пішло не так.</h2>
          <p>{this.state.error?.message || 'Невідома помилка'}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
