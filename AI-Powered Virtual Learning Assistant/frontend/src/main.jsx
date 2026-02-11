import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind & global styles

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

/*
  Application Entry Point
  -----------------------
  - Initializes React application
  - Wraps App with global providers
  - Attaches app to DOM root
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
    <LanguageProvider>
        <App />
    </LanguageProvider>
      </AuthProvider>
  </React.StrictMode>
);