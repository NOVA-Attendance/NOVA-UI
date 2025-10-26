// ============================================================================
// AvgTimeBarChart.jsx – NOVA Dashboard Component
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Displays each student's average attendance duration (0–90 min scale)
// ----------------------------------------------------------------------------
// Description:
// • Renders a bar chart showing average time spent per student in lectures.
// • Uses Recharts for visualization and MUI for styling.
// • Fixed Y-axis range (0–90 min) for consistency across datasets.
// • Fully responsive to viewport changes with NOVA dark-theme color palette.
// ----------------------------------------------------------------------------
// Inputs:
//    data → array of objects with { name: string, avgTime: number }
// Example:
//    [
//      { name: "Denzel", avgTime: 78 },
//      { name: "Manan", avgTime: 65 },
//      { name: "Rayane", avgTime: 83 },
//    ]
// ----------------------------------------------------------------------------
// Output:
//    Responsive Paper card containing a styled bar chart with tooltips.
// ----------------------------------------------------------------------------
// Notes for Team:
// • Bar size, colors, and Y-axis range can be easily customized.
// • Tooltip styling matches the dark-mode aesthetic used across Dashboard.
// ============================================================================

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography, Box } from "@mui/material";

export default function AvgTimeBarChart({ data }) {
  return (
    // ---------- Outer container (transparent for embedded charts) ----------
    <Paper sx={{ p: 2, bgcolor: "transparent", boxShadow: "none" }}>
      {/* ---------- Section title ---------- */}
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        sx={{ fontWeight: 600, color: "#E2E8F0" }}
      >
        Average Time per Student (min)
      </Typography>

      {/* ---------- Chart container ---------- */}
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
          >
            {/* Subtle background grid lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />

            {/* X-axis with student names */}
            <XAxis dataKey="name" tick={{ fill: "#94A3B8" }} />

            {/* Y-axis locked between 0 and 90 minutes */}
            <YAxis domain={[0, 90]} tick={{ fill: "#94A3B8" }} />

            {/* Tooltip styled for NOVA dark theme */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "none",
                borderRadius: 6,
                color: "#E2E8F0",
              }}
            />

            {/* Bars representing average attendance time */}
            <Bar
              dataKey="avgTime"
              fill="#42A5F5"        // NOVA blue accent
              radius={[8, 8, 0, 0]} // Rounded top corners
              barSize={50}          // Uniform bar width
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
