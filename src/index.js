// Import React for creating React components.
import React from "react";

// Import ReactDOM for rendering React components in the browser.
import ReactDOM from "react-dom/client";

// Import BrowserRouter from react-router-dom for client-side routing.
import { BrowserRouter } from "react-router-dom";

// Import Provider from react-redux for providing the Redux store to components.
import { Provider } from "react-redux";

// Import PersistGate from redux-persist for ensuring Redux state persistence.
import { PersistGate } from "redux-persist/integration/react";

// Import the Redux store and persistor from the store module.
import { store, persistor } from "./store/store";

// Import the main App component.
import App from "./App";

// Create a React root for rendering the application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application within a React Strict Mode.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap the app with the PersistGate to ensure Redux state persistence. */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* Provide client-side routing with BrowserRouter. */}
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, you can pass a function
// to log results, for example, to reportWebVitals(console.log).
// This can be used for performance monitoring or analytics.
// Learn more: https://bit.ly/CRA-vitals
