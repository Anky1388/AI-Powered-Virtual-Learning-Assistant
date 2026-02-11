// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Context Providers
// import { AuthProvider } from "./context/AuthContext";
// import { LanguageProvider } from "./context/LanguageContext";

// /*
//   Application Entry Point
//   -----------------------
//   - Initializes React application
//   - Wraps App with global providers
//   - Attaches app to DOM root
// */

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <LanguageProvider>
//         <App />
//       </LanguageProvider>
//     </AuthProvider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <App />
        <ToastContainer position="top-right" autoClose={2000} />
      </LanguageProvider>
    </AuthProvider>
  </React.StrictMode>
);
