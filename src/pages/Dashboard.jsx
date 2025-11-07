// ============================================================================
// Dashboard.jsx – NOVA Dashboard (Dark Themed, Full-width Analytics Layout)
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Project: NOVA – Smart Attendance and Monitoring System
// ----------------------------------------------------------------------------
// Purpose:
//    Implements the primary dashboard view for NOVA’s Smart Attendance System.
//    Displays key analytics, system metrics, and student attendance logs in a
//    responsive dark-mode interface that aligns with the NOVA design language.
//
// Description:
//    • Designed for full-width use with edge-to-edge containers.
//    • Integrates multiple analytic components (charts, tables, system widgets).
//    • Uses mock data as placeholders until backend (Firebase / NOVA-Server)
//      integration is complete.
//    • Fully responsive for desktops and large laptop screens.
//
// Features:
//    ✓ Three main analytics charts (Line, Pie, Bar) with uniform grid spacing.
//    ✓ Student attendance overview table with real-time progress visuals.
//    ✓ Lower section for recent student capture photo + system health monitor.
//    ✓ Consistent NOVA branding with header, footer, and dark gradient theme.
// ----------------------------------------------------------------------------
// Layout Summary:
//    Header     → NOVA branding and app subtitle
//    Top Row    → 3 Charts (Lecture Attendance, Overall Attendance, Avg Time)
//    Mid Row    → Student Attendance Overview Table
//    Bottom Row → Recent Photo Capture + System Health with Comment Tagger
//    Footer     → Project acknowledgment (Group 9)
//
// Dependencies:
//    • Material UI (MUI v5) for layout and theming
//    • Recharts for analytics visualizations
//    • NOVA custom components (SystemHealth, LogTable, CommentTagger, etc.)
// ----------------------------------------------------------------------------
// Notes for Developers:
//    - Replace mock data with live backend data in production.
//    - Maintain “md={3.9}” grid for perfect horizontal alignment at 100% zoom.
//    - Use <GlobalStyles> for theme overrides (avoid inline colors).
// ----------------------------------------------------------------------------
// Last Updated: October 2025
// ============================================================================

import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Avatar,
  LinearProgress,
  GlobalStyles,
} from "@mui/material";

// ---------------- Component Imports ----------------
import LogTable from "../components/LogTable";
import RecentPhoto from "../components/RecentPhoto";
import SystemHealth from "../components/SystemHealth";
import CommentTagger from "../components/CommentTagger";
import AttendanceLineChart from "../components/AttendanceLineChart";
import AvgTimeBarChart from "../components/AvgTimeBarChart";
import AttendancePieChart from "../components/AttendancePieChart";

// ---------------- Asset Imports ----------------
import novaLogo from "../assets/nova-logo.png";
import denzelPhoto from "../assets/denzelPhoto.png";

export default function Dashboard() {
  // ---------------- Mock Data (Temporary Backend Placeholder) ----------------
  const [logs] = useState([
    {
      id: 1,
      name: "Denzel Shaka",
      studentNumber: "300187524",
      status: "In Class",
      totalAttendance: "12 / 15",
      avgTime: 82,
    },
    {
      id: 2,
      name: "Manan Dayalani",
      studentNumber: "300205617",
      status: "Left",
      totalAttendance: "10 / 15",
      avgTime: 74,
    },
    {
      id: 3,
      name: "Rayane Chemsi",
      studentNumber: "300216948",
      status: "In Class",
      totalAttendance: "14 / 15",
      avgTime: 90,
    },
  ]);

  const [recent] = useState({
    id: 101,
    name: "Denzel Shaka",
    photoUrl: denzelPhoto,
  });

  const [system] = useState({
    temp: 34.8,
    cpu: 41.2,
    status: "ON",
  });

  const attendanceData = [
    { lecture: "Lec 1", count: 20 },
    { lecture: "Lec 2", count: 22 },
    { lecture: "Lec 3", count: 19 },
    { lecture: "Lec 4", count: 25 },
  ];

  const avgTimeData = [
    { name: "Denzel", avgTime: 78 },
    { name: "Manan", avgTime: 65 },
    { name: "Rayane", avgTime: 83 },
  ];

  // ========================================================================
  // LAYOUT + STRUCTURE
  // ========================================================================
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* ---------------- Global Styles ---------------- */}
      <GlobalStyles
        styles={{
          ".MuiContainer-root": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
          ".MuiPaper-root": {
            backgroundColor: "#0f172a !important",
            borderRadius: "12px !important",
          },
        }}
      />

      {/* ---------------- HEADER BAR ---------------- */}
      <AppBar
        position="static"
        color="default"
        sx={{
          bgcolor: "background.paper",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar>
          <Avatar src={novaLogo} sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
            <Typography variant="h5" fontWeight={700}>
              NOVA Dashboard
            </Typography>
            <Typography variant="body2" color="primary.main">
              Next-gen Online Verification for Attendance
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <Container maxWidth={false} disableGutters>
        <Box sx={{ px: { xs: 2, sm: 3 }, py: 4 }}>
          {/* ========================================================================
              TOP ROW – 3 CHARTS (Even spacing at 100% zoom)
              ======================================================================== */}
          <Grid container spacing={3} justifyContent="space-between">
            {/* Chart 1 – Attendance per Lecture */}
            <Grid item xs={12} md={3.9}>
              <Paper sx={{ p: 3, height: 600 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Attendance per Lecture
                </Typography>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AttendanceLineChart data={attendanceData} />
                </Box>
              </Paper>
            </Grid>

            {/* Chart 2 – Lecture Attendance (Pie) */}
            <Grid item xs={12} md={3.9}>
              <Paper
                sx={{
                  p: 3,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "scale(1.01)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <AttendancePieChart attended={22} absent={8} />
              </Paper>
            </Grid>

            {/* Chart 3 – Avg Time per Student */}
            <Grid item xs={12} md={3.9}>
              <Paper sx={{ p: 3, height: 600 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Average Time per Student (min)
                </Typography>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AvgTimeBarChart data={avgTimeData} />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* ========================================================================
              TABLE – Student Attendance Overview
              ======================================================================== */}
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Student Attendance Overview
              </Typography>

              {/* Table Header */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr 2fr",
                  gap: 2,
                  py: 1,
                  px: 1,
                  fontWeight: 600,
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Typography>Name</Typography>
                <Typography>Student #</Typography>
                <Typography>Status</Typography>
                <Typography>Total Attendance</Typography>
                <Typography>Avg Time (min)</Typography>
              </Box>

              {/* Table Rows */}
              {logs.map((log) => (
                <Box
                  key={log.id}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr 2fr",
                    gap: 2,
                    alignItems: "center",
                    py: 1.5,
                    px: 1,
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.02)" },
                  }}
                >
                  <Typography>{log.name}</Typography>
                  <Typography>{log.studentNumber}</Typography>
                  <Typography
                    color={
                      log.status === "In Class" ? "success.main" : "error.main"
                    }
                  >
                    {log.status}
                  </Typography>
                  <Typography>{log.totalAttendance}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ width: 30 }}>{log.avgTime}%</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={log.avgTime}
                      sx={{
                        flexGrow: 1,
                        height: 6,
                        borderRadius: 2,
                        bgcolor: "rgba(255,255,255,0.08)",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* ========================================================================
              LOWER ROW – Photo + System Health
              ======================================================================== */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: "100%" }}>
                <RecentPhoto name={recent.name} photoUrl={recent.photoUrl} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: "100%" }}>
                <SystemHealth {...system} />
                <Box sx={{ mt: 2 }}>
                  <CommentTagger photoId={recent.id} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* ---------------- FOOTER ---------------- */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 2,
          bgcolor: "#0C1424",
          color: "text.secondary",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: "0.9rem",
        }}
      >
        © 2025 NOVA – Smart Attendance and Monitoring System (Group 9)
      </Box>
    </Box>
  );
}
