import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ErrorBoundary } from 'react-error-boundary';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const errorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h2>Something went wrong.</h2>
    <button onClick={resetErrorBoundary}>Try again</button>
    <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={errorFallback}>
        <App />
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>
);