// ============================================================================
// AppNavbar.jsx – NOVA Dashboard Top Navigation Bar
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Provides a clean, fixed top bar for navigation, search, and alerts.
// ----------------------------------------------------------------------------
// Description:
// • Displays the top app bar that appears on every NOVA page.
// • Contains breadcrumbs for context (e.g., "Dashboard › Home").
// • Includes a search field and a notification icon aligned to the right.
// • Designed to integrate seamlessly with the permanent SideMenu component.
// ----------------------------------------------------------------------------
// Behavior:
// • Adjusts width dynamically based on sidebar (240px) offset.
// • Fixed position ensures visibility during scrolling.
// • Subtle transparent styling maintains NOVA’s dark-mode consistency.
// ----------------------------------------------------------------------------
// Usage Example:
//    <AppNavbar /> 
// ----------------------------------------------------------------------------
// Output:
//    Fixed top navigation bar with breadcrumb, search field, and notifications.
// ============================================================================

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

// ---------- Sidebar width constant for layout alignment ----------
const drawerWidth = 240;

export default function AppNavbar({ currentPage }) {
  return (
    // ---------- Fixed App Bar aligned with sidebar ----------
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        ml: `${drawerWidth}px`,                           // Offset for sidebar width
        width: { sm: `calc(100% - ${drawerWidth}px)` },    // Auto-resizes with layout
        bgcolor: "background.paper",                      // Consistent dark card background
        borderBottom: "1px solid rgba(255,255,255,0.08)",  // Soft divider line
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {/* ---------- Breadcrumb (context indicator) ---------- */}
        <Typography variant="body2" color="text.secondary">
          Dashboard ›{" "}
          <Typography component="span" color="text.primary">
            {currentPage || "Home"}
          </Typography>
        </Typography>

        {/* ---------- Spacer pushes search + icon to the right ---------- */}
        <Box sx={{ flexGrow: 1 }} />

        {/* ---------- Search Field ---------- */}
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search…"
          sx={{
            width: 260,
            input: { color: "text.primary" },
            "& .MuiOutlinedInput-root": {
              bgcolor: "rgba(255,255,255,0.05)",             // Subtle background
              "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
              "&:hover fieldset": { borderColor: "#26C6DA" }, // Teal accent on hover
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* ---------- Notification Icon ---------- */}
        <IconButton color="inherit">
          <NotificationsIcon sx={{ color: "text.secondary" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
