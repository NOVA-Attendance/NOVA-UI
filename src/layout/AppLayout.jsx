// ============================================================================
// AppLayout.jsx – NOVA UI Main Layout Wrapper
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Provides the structural layout for the NOVA Dashboard web app.
// ----------------------------------------------------------------------------
// Description:
// • Combines the persistent sidebar (SideMenu) and top navigation bar (AppNavbar).
// • Acts as a reusable page wrapper that automatically includes spacing and layout rules.
// • Uses Material UI’s responsive Box and Toolbar for flexible alignment.
// ----------------------------------------------------------------------------
// Behavior:
// • Displays SideMenu (left), AppNavbar (top), and page content in the main area.
// • Adds consistent padding and margin for all inner pages (e.g., Dashboard, Analytics).
// • The <Toolbar /> adds vertical offset equal to the AppBar height to prevent overlap.
// ----------------------------------------------------------------------------
// Usage Example:
//    <AppLayout>
//       <Dashboard />   // child component injected into layout
//    </AppLayout>
// ----------------------------------------------------------------------------
// Output:
//    Full-page layout container including navigation and content areas.
// ============================================================================

import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import SideMenu from "./SideMenu";
import AppNavbar from "./AppNavbar";

export default function AppLayout({ children }) {
  return (
    // ---------- Root flex container (Sidebar + Main content) ----------
    <Box sx={{ display: "flex" }}>
      {/* ---------- Persistent Left Navigation Menu ---------- */}
      <SideMenu />

      {/* ---------- Top Navigation Bar ---------- */}
      <AppNavbar />

      {/* ---------- Main Content Section ---------- */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,           // expands main content to fill remaining space
          p: 3,                  // uniform padding
          ml: { sm: "240px" },   // offset to accommodate fixed sidebar width
        }}
      >
        {/* Spacer ensures content begins below AppBar height */}
        <Toolbar />

        {/* Dynamic child content (e.g., Dashboard, Reports, Settings) */}
        {children}
      </Box>
    </Box>
  );
}
