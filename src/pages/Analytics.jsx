// ============================================================================
// Analytics.jsx – NOVA Analytics Dashboard (Dark Themed, Full-width Analytics Layout)
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Project: NOVA – Smart Attendance and Monitoring System
// ----------------------------------------------------------------------------
// Purpose:
//    Implements the analytics dashboard view for NOVA's Smart Attendance System.
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
import { useTapMonitor } from "../context/TapMonitorContext.jsx";

// ---------------- Asset Imports ----------------
import novaLogo from "../assets/nova-logo.png";

export default function Analytics() {
  // Get most recent tap-in from shared context (auto-updates every 5 seconds)
  const { mostRecent } = useTapMonitor();

  // ---------------- Mock Data (Temporary Backend Placeholder) ----------------
  // All 6 team members with data aligned (15 lectures total)
  const allLogs = [
    {
      id: 1,
      name: "Christopher King",
      studentNumber: "300226522",
      status: "In Class",
      totalAttendance: "14 / 15",
      avgTime: 88,
    },
    {
      id: 2,
      name: "Denzel Shaka",
      studentNumber: "300185848",
      status: "In Class",
      totalAttendance: "12 / 15",
      avgTime: 82,
    },
    {
      id: 3,
      name: "Eknoor Goraya",
      studentNumber: "300278785",
      status: "In Class",
      totalAttendance: "15 / 15",
      avgTime: 92,
    },
    {
      id: 4,
      name: "Fareis Canoe",
      studentNumber: "300299663",
      status: "In Class",
      totalAttendance: "13 / 15",
      avgTime: 85,
    },
    {
      id: 5,
      name: "Manan Dayalani",
      studentNumber: "300256144",
      status: "Left",
      totalAttendance: "11 / 15",
      avgTime: 76,
    },
    {
      id: 6,
      name: "Rayane Chemsi",
      studentNumber: "300324494",
      status: "In Class",
      totalAttendance: "14 / 15",
      avgTime: 90,
    },
  ];
  
  // Sort alphabetically by name
  const [logs] = useState([...allLogs].sort((a, b) => a.name.localeCompare(b.name)));

  // Use most recent from TapMonitor context (updates in real-time)
  const recent = mostRecent ? {
    id: mostRecent.id,
    name: mostRecent.name,
    photoUrl: mostRecent.photo,
  } : {
    id: 101,
    name: "No recent tap-ins",
    photoUrl: null,
  };

  // System health now uses real-time metrics

  // Attendance data for last 5 lectures (11-15) - cleaner and more readable
  const attendanceData = [
    { lecture: "11", count: 25 },
    { lecture: "12", count: 24 },
    { lecture: "13", count: 21 },
    { lecture: "14", count: 23 },
    { lecture: "15", count: 24 },
  ];

  // Average time data matching the logs above (alphabetical order)
  const avgTimeData = [
    { name: "Christopher", avgTime: 88 },
    { name: "Denzel", avgTime: 82 },
    { name: "Eknoor", avgTime: 92 },
    { name: "Fareis", avgTime: 85 },
    { name: "Manan", avgTime: 76 },
    { name: "Rayane", avgTime: 90 },
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
              NOVA Analytics
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
          <Grid container spacing={3}>
            {/* Chart 1 – Attendance per Lecture */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: 850, display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "1.1rem", fontWeight: 600, mb: 2 }}>
                  Attendance per Lecture
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    minHeight: 0,
                    width: "100%",
                  }}
                >
                  <AttendanceLineChart data={attendanceData} />
                </Box>
              </Paper>
            </Grid>

            {/* Chart 2 – Lecture Attendance (Pie) */}
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  height: 850,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "scale(1.01)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <AttendancePieChart attended={5} absent={1} />
              </Paper>
            </Grid>

            {/* Chart 3 – Avg Time per Student */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: 850, display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "1.1rem", fontWeight: 600, mb: 2 }}>
                  Average Time per Student (min)
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    minHeight: 0,
                    width: "100%",
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
                <SystemHealth />
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
