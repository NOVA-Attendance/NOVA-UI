// ============================================================================
// App.jsx – Root Entry Point for NOVA React Application
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Project: NOVA – Smart Attendance and Monitoring System
// ----------------------------------------------------------------------------
// Purpose:
//    Defines the root React component that initializes the NOVA web application.
//    Currently renders the main Dashboard page wrapped inside the global theme
//    and layout providers.
//
// Description:
//    • Wraps all pages inside the <AppTheme> provider for consistent dark mode.
//    • Uses <AppLayout> to apply sidebar + top navbar structure globally.
//    • Displays <Dashboard> as the default landing page (Sprint 1 focus).
//
// Notes for Developers:
//    - Future sprints will integrate React Router for multi-page navigation.
//    - Planned routes: /login, /dashboard, /analytics, /settings.
//    - Keep this file minimal — logic for layout and theming should remain
//      modular in their respective files.
//
// Example Usage:
//    import App from "./App";
//    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//
// Last Updated: October 2025
// ============================================================================

import AppTheme from "./theme/AppTheme.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <AppTheme>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </AppTheme>
  );
}
