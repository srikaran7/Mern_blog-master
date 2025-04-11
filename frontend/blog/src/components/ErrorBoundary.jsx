// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Set state so the next render shows the fallback UI.
    this.state = { hasError: false, error: null };
  }

  // This lifecycle method is invoked after an error has been thrown by a descendant component.
  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error };
  }

  // You can also log the error to an error reporting service.
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Customize the UI to display when an error occurs
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    // When there's not an error, render children untouched
    return this.props.children;
  }
}

export default ErrorBoundary;
