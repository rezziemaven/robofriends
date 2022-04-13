import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. Something broke :/</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
