// ============================================================================
// App.jsx – Root Entry Point for NOVA React Application
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Project: NOVA – Smart Attendance and Monitoring System
// ----------------------------------------------------------------------------
// Purpose:
//    Defines the root React component that initializes the NOVA web application.
//    Manages navigation state and renders pages based on current route.
//
// Description:
//    • Wraps all pages inside the <AppTheme> provider for consistent dark mode.
//    • Uses <AppLayout> to apply sidebar + top navbar structure globally.
//    • Implements state-based navigation without external routing libraries.
//    • Displays <Dashboard> as the default landing page.
//
// Notes for Developers:
//    - Uses simple state-based navigation for multi-page support.
//    - Current pages: Dashboard, UserManagement
//    - Navigation is handled via AppLayout and SideMenu components.
//
// Example Usage:
//    import App from "./App";
//    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//
// Last Updated: October 2025
// ============================================================================

import { useState } from "react";
import AppTheme from "./theme/AppTheme.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserManagement from "./pages/UserManagement.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Dashboard />;
      case "User Management":
        return <UserManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppTheme>
      <AppLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {renderPage()}
      </AppLayout>
    </AppTheme>
  );
}
