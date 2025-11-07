// ============================================================================
// main.jsx – Application Entry Point
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Project: NOVA – Smart Attendance and Monitoring System (NOVA-UI)
// ----------------------------------------------------------------------------
// Purpose:
//   This file serves as the main entry point for the React application.
//   It initializes the React rendering process, applies global theming
//   (via Material UI), and mounts the entire NOVA dashboard app to the DOM.
//
// Structure:
//   • Imports the root <App /> component as the main container.
//   • Wraps <App /> inside <AppTheme> to apply NOVA’s custom dark theme.
//   • Uses <React.StrictMode> for highlighting potential runtime issues.
//
// Notes:
//   • index.css provides basic fallback styling (minimal visual role).
//   • The actual UI styling and layout logic are handled by MUI components
//     and the custom theme defined in /theme/AppTheme.jsx.
//   • Future iterations may include router integration here for
//     multi-page navigation (Login, Analytics, Settings, etc.).
// ----------------------------------------------------------------------------
// Last Updated: October 2025
// ============================================================================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";             // Optional: minimal global fallback styles
import AppTheme from "./theme/AppTheme.jsx"; // Custom NOVA dark theme provider

// ----------------------------
// Mount React App to Root DOM
// ----------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Global theme wrapper applied around the app */}
    <AppTheme>
      <App />
    </AppTheme>
  </React.StrictMode>
);
