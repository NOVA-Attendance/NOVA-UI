// --------------------------------------------------------------
// LogTable.jsx – Displays the log of people entering/exiting
// --------------------------------------------------------------
// Uses Material UI's DataGrid component to render a responsive
// table with rows representing attendance logs. Each log
// includes the person's name, timestamp, and status.
// --------------------------------------------------------------

import { DataGrid } from "@mui/x-data-grid";

export default function LogTable({ rows }) {
  // Define table column headers and which object fields they map to
  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "time", headerName: "Time", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  // Render a DataGrid table that automatically adjusts its height
  // to fit contents and supports pagination.
  return (
    <div style={{ height: 360, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]} // allows user to view 5 or 10 entries per page
      />
    </div>
  );
}
