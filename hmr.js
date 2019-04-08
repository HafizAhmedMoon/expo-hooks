import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import App from './src';

export default function Hmr() {
  const [app, setApp] = useState(() => {
    const ErrorBoundary = ErrorBoundaryFactory();
    return (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
  });

  useEffect(() => {
    if (module.hot) {
      module.hot.accept(() => {
        const App = require('./src/index').default;
        const ErrorBoundary = ErrorBoundaryFactory();
        setApp(
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        );
      });
    }
  });
  return app;
}

export function ErrorBoundaryFactory() {
  return class ErrorBoundary extends React.Component {
    state = {hasError: false};

    static getDerivedStateFromError(error) {
      console.error(error);
      return {hasError: true};
    }

    render() {
      if (this.state.hasError) {
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Error caught!!!</Text>
            <Text>See logs</Text>
          </View>
        );
      }
      return this.props.children;
    }
  };
}
