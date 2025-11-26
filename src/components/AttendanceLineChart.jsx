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
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Chart container */}
      <Box sx={{ flex: 1, minHeight: 0, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data}
            margin={{ top: 30, right: 25, left: 5, bottom: 90 }}
          >
            {/* Grid lines */}
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#334155" 
              vertical={false}
              horizontal={true}
            />

            {/* X-axis with lecture numbers - cleaner and more readable */}
            <XAxis 
              dataKey="lecture"
              tick={{ fill: "#CBD5E1", fontSize: 12 }}
              angle={-30}
              textAnchor="end"
              height={90}
              interval={0}
              stroke="#64748B"
              tickLine={{ stroke: "#64748B" }}
              padding={{ left: 5, right: 5 }}
              label={{ 
                value: "Lecture Number", 
                position: "insideBottom", 
                offset: -10,
                style: { textAnchor: "middle", fill: "#94A3B8", fontSize: 12 }
              }}
            />

            {/* Y-axis with attendance count */}
            <YAxis 
              domain={[18, 26]}
              tick={{ fill: "#CBD5E1", fontSize: 12 }}
              width={45}
              stroke="#64748B"
              tickLine={{ stroke: "#64748B" }}
              allowDecimals={false}
              label={{ 
                value: "Attendance Count", 
                angle: -90, 
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#94A3B8", fontSize: 12 }
              }}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "1px solid #334155",
                borderRadius: 6,
                color: "#E2E8F0",
                padding: "8px 12px",
              }}
              formatter={(value) => [`${value} students`, "Attendance"]}
              labelFormatter={(label) => `Lecture ${label}`}
            />

            {/* Line with data points */}
            <Line
              type="monotone"
              dataKey="count"
              stroke="#26C6DA"
              strokeWidth={2}
              dot={{ r: 4, fill: "#26C6DA", strokeWidth: 2, stroke: "#0B1220" }}
              activeDot={{ r: 7, fill: "#26C6DA", stroke: "#0B1220", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
