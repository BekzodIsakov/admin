import React from 'react';
import { Error } from '@components/error/error.component';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(
      '%c Caught an error!',
      'padding: 5px; background: #e5e0d4; color: #ff1f1f;'
    );
    console.log(error);
    setTimeout(() => {
      this.cancelToast();
    }, 4000);
  }

  cancelToast = () => {
    this.setState({ hasError: false });
  };

  render() {
    return (
      <>
        {this.state.hasError ? (
          <Error
            errorText={
              window.navigator.onLine
                ? 'Oops!!! Nimadir xato ketdi'
                : "Internetga ulanib bo'lmadi"
            }
          />
        ) : (
          this.props.children
        )}
      </>
    );
  }
}
