import React from 'react';
import { Button } from 'antd';

const isDev = process.env.NODE_ENV !== 'production';
interface Props {
  children: any
}

interface State {
  // error: Error | null
  errorInfo: {
    componentStack: string
  } | null
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string } | null) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      // error,
      errorInfo,
    });
    // !isDev && perfLog.count('ErrorBoundary', '1', {
    //   error,
    //   errorInfo,
    // });
    // You can also log error messages to an error reporting service here
  }


  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          发生了些错误
          请尝试刷新, 稍后重试
          <Button type="primary" onClick={() => window.location.reload()}>刷新</Button>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
