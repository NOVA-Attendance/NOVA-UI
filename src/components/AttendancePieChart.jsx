// ============================================================================
// AttendancePieChart.jsx – Centered & Symmetrical Pie Chart for NOVA Dashboard
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Displays the lecture attendance breakdown using a two-color donut chart.
// ----------------------------------------------------------------------------
// Description:
// • Visually represents “Attended” vs “Absent” using a donut-style pie chart.
// • Fully responsive – fits perfectly centered in its parent Paper container.
// • Uses NOVA's dark theme styling and Material UI layout system.
// ----------------------------------------------------------------------------
// Fixes Implemented:
// • Adjusted ResponsiveContainer width for better centering.
// • Tuned Pie radius and margin so the chart appears balanced at all screen sizes.
// • Added aligned summary stats below the chart.
// ----------------------------------------------------------------------------
// Inputs:
//    attended → number (students marked present)
//    absent   → number (students marked absent)
// Example:
//    <AttendancePieChart attended={22} absent={8} />
// ----------------------------------------------------------------------------
// Output:
//    Responsive donut chart with labeled segments and summary stats below.
// ============================================================================

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Typography, Box, Stack } from "@mui/material";

// NOVA color palette: green = attended, red = absent
const COLORS = ["#4CAF50", "#EF5350"];

export default function AttendancePieChart({ attended, absent }) {
  // ---------- Data Array for Chart Rendering ----------
  const data = [
    { name: "Attended", value: attended },
    { name: "Absent", value: absent },
  ];

  return (
    // ---------- Main Container (flex-centered column) ----------
    <Box
      sx={{
        width: "100%",
        height: 580,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* ---------- Title ---------- */}
      <Typography variant="h6" gutterBottom align="center">
        Lecture Attendance Today
      </Typography>

      {/* ---------- Pie Chart Container (Perfectly Centered) ---------- */}
      <Box
        sx={{
          width: "100%",
          height: 360,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ResponsiveContainer width="95%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              dataKey="value"
              label
            >
              {/* Dynamically color each slice */}
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "none",
                borderRadius: 6,
                color: "#E2E8F0",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* ---------- Summary Stats Below Chart ---------- */}
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ mt: 3, width: "80%" }}
      >
        <Typography color="success.main" fontWeight={600}>
          Attended: {attended}
        </Typography>
        <Typography color="error.main" fontWeight={600}>
          Absent: {absent}
        </Typography>
      </Stack>
    </Box>
  );
}
