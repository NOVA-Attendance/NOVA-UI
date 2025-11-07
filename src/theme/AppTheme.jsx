// ============================================================================
// AppTheme.jsx – NOVA Global Dark Theme Configuration
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Project: NOVA – Smart Attendance and Monitoring System
// ----------------------------------------------------------------------------
// Purpose:
//    Defines the global dark theme for the NOVA Dashboard web app using
//    Material UI’s `createTheme` and `ThemeProvider` APIs.
//
// Description:
//    • Establishes NOVA’s signature dark color palette (deep navy + blue-teal).
//    • Applies consistent typography across all components using “Poppins” font.
//    • Overrides default MUI styles for AppBar, Drawer, Paper, and DataGrid.
//    • Ensures full-screen dark backgrounds with clean card contrast.
//
// Visual Identity:
//    Primary:   #1E88E5   (NOVA Blue)
//    Secondary: #26C6DA   (Teal Accent)
//    Background: #0B1220  (Main BG), #0F172A (Cards/Panels)
// ----------------------------------------------------------------------------
// Behavior:
//    ✓ Enables dark mode via `palette.mode = "dark"`
//    ✓ Uniform typography and color system for text, icons, and dividers
//    ✓ Auto-applies background via <CssBaseline />
//
// Usage Example:
//    <AppTheme>
//       <AppLayout>
//          <Dashboard />
//       </AppLayout>
//    </AppTheme>
//
// Notes for Developers:
//    - Centralizes all theme settings in one file for maintainability.
//    - Add component-specific overrides under `components` as needed.
//    - Keep palette consistent across dark/light variants for NOVA branding.
// ----------------------------------------------------------------------------
// Last Updated: October 2025
// ============================================================================

import * as React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "@mui/x-data-grid/themeAugmentation";

// ---------------- THEME CONFIGURATION ----------------
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1E88E5" }, // NOVA Blue
    secondary: { main: "#26C6DA" }, // Teal Accent
    background: {
      default: "#0B1220", // App Background
      paper: "#0F172A",   // Cards & Panels
    },
    text: {
      primary: "#E2E8F0",
      secondary: "#94A3B8",
    },
    divider: "rgba(255,255,255,0.12)",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0B1220",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#111827",
          color: "#E2E8F0",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#111827",
          color: "#E2E8F0",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#0F172A",
          color: "#E2E8F0",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#0F172A",
          borderColor: "rgba(255,255,255,0.1)",
        },
      },
    },
  },
});

// ---------------- THEME PROVIDER WRAPPER ----------------
export default function AppTheme({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
