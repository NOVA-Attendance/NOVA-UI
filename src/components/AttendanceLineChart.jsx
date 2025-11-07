// ============================================================================
// AttendanceLineChart.jsx – NOVA Dashboard Component
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Displays attendance trends across lectures using a smooth line chart.
// Dependencies: Recharts (for graph rendering), Material UI (for layout + styling)
// ----------------------------------------------------------------------------
// Description:
// • Renders a responsive line chart showing attendance counts per lecture.
// • Fits inside a Paper card with NOVA dark-theme styling.
// • Supports dynamic resizing and smooth data transitions.
// ----------------------------------------------------------------------------
// Inputs:
//    data → array of objects containing { lecture: string, count: number }
// Example:
//    [
//      { lecture: "Lec 1", count: 20 },
//      { lecture: "Lec 2", count: 22 },
//      ...
//    ]
// ----------------------------------------------------------------------------
// Output:
//    Responsive MUI Paper component displaying a Recharts line chart
// ============================================================================

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography, Box } from "@mui/material";

export default function AttendanceLineChart({ data }) {
  return (
    // ---------- Outer container card ----------
    <Paper sx={{ p: 2 }}>
      {/* ---------- Section title ---------- */}
      <Typography variant="h6" gutterBottom>
        Attendance per Lecture
      </Typography>

      {/* ---------- Chart container ---------- */}
      <Box sx={{ height: 250 }}>
        {/* ResponsiveContainer ensures chart scales with screen size */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Subtle dark gridlines for visual clarity */}
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />

            {/* Axis labels + tick color aligned to NOVA theme */}
            <XAxis dataKey="lecture" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />

            {/* Hover tooltip for data inspection */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "none",
                borderRadius: 6,
                color: "#E2E8F0",
              }}
            />

            {/* Smooth teal line indicating attendance per lecture */}
            <Line
              type="monotone"
              dataKey="count"
              stroke="#80DEEA"
              strokeWidth={2}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
