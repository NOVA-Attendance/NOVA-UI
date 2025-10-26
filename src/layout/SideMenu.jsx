// ============================================================================
// SideMenu.jsx – NOVA Dashboard Sidebar Navigation
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Provides a permanent left-hand navigation drawer for the NOVA UI.
// ----------------------------------------------------------------------------
// Description:
// • Displays primary navigation items for the NOVA Dashboard (Home, Analytics, etc.).
// • Fixed sidebar layout that integrates with AppNavbar and AppLayout components.
// • Styled to match NOVA’s dark theme and maintain consistency across pages.
// ----------------------------------------------------------------------------
// Behavior:
// • Permanent drawer (does not collapse) anchored to the left side.
// • Active menu item is highlighted with a soft blue-teal accent.
// • Uses Material UI’s Drawer, List, and Icons for accessibility and alignment.
// ----------------------------------------------------------------------------
// Usage Example:
//    <SideMenu /> 
// ----------------------------------------------------------------------------
// Output:
//    Fixed navigation sidebar with header branding and interactive menu items.
// ============================================================================

import * as React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";

// ---------- Drawer width (synchronized with AppNavbar and AppLayout) ----------
const drawerWidth = 240;

export default function SideMenu() {
  // ---------- Navigation menu items ----------
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Analytics", icon: <BarChartIcon /> },
    { text: "Clients", icon: <PeopleIcon /> },
    { text: "Tasks", icon: <AssignmentIcon /> },
  ];

  return (
    // ---------- Persistent sidebar drawer ----------
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "background.paper", // Dark navy (matches cards)
          color: "text.primary",
          borderRight: "1px solid rgba(255,255,255,0.08)", // Soft right divider
        },
      }}
    >
      {/* ---------- Sidebar Header Branding ---------- */}
      <Toolbar>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, letterSpacing: 0.5, color: "text.primary" }}
        >
          NOVA • Web app
        </Typography>
      </Toolbar>

      {/* ---------- Navigation Menu Items ---------- */}
      <List>
        {menuItems.map(({ text, icon }) => (
          <ListItemButton
            key={text}
            selected={text === "Home"} // Default selected item
            sx={{
              "&.Mui-selected": {
                bgcolor: "rgba(38,198,218,0.15)", // Teal accent (NOVA theme)
                "&:hover": { bgcolor: "rgba(38,198,218,0.25)" },
              },
              "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
            }}
          >
            {/* ---------- Icon and Label for Each Menu Item ---------- */}
            <ListItemIcon sx={{ color: "text.secondary", minWidth: 40 }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
