// ============================================================================
// Dashboard.jsx – NOVA Dashboard (Frontend Only, Mock Data Version)
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose:
//   This file renders the initial dashboard UI for NOVA Attendance,
//   using mock data only. It matches the official presentation theme and
//   includes the project logo and color palette for consistent branding.
//
// Components:
//   1. LogTable – mock attendance logs
//   2. RecentPhoto – placeholder for latest recognition
//   3. SystemHealth – simulated system metrics
//   4. CommentTagger – user feedback form
//
// Styling: Full-width responsive layout using inline CSS.
//          Uses teal/navy NOVA color scheme for visual consistency.
// ============================================================================

import { useState } from "react";
import LogTable from "../components/LogTable";
import RecentPhoto from "../components/RecentPhoto";
import SystemHealth from "../components/SystemHealth";
import CommentTagger from "../components/CommentTagger";
import novaLogo from "../assets/nova-logo.png"; // NOVA branding logo

export default function Dashboard() {
  // --------------------------------------------------------------------------
  //  Mocked dashboard data (until backend integration)
  // --------------------------------------------------------------------------
  const [logs] = useState([
    { id: 1, name: "Eknoor", time: "2025-10-09 10:20", status: "Entered" },
    { id: 2, name: "Manan Dayalani", time: "2025-10-09 10:25", status: "Exited" },
    { id: 3, name: "Rayane Chemsi", time: "2025-10-09 10:32", status: "Entered" },
  ]);

  const [recent] = useState({
    id: 101,
    name: "Denzel Shaka",
    photoUrl: "https://picsum.photos/240?grayscale",
  });

  const [system] = useState({
    temp: 34.8,
    cpu: 41.2,
    status: "ON",
  });

  // --------------------------------------------------------------------------
  //  Layout
  // --------------------------------------------------------------------------
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", // Full viewport width
        backgroundColor: "#F7F8FA",
        color: "#002D5B",
        fontFamily: "'Poppins', sans-serif",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* --------------------------------------------------------------------
          Header Section with NOVA Logo & Tagline
         -------------------------------------------------------------------- */}
      <header
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          padding: "16px 48px",
          borderBottom: "3px solid #1CC5B7",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={novaLogo}
          alt="NOVA Logo"
          style={{ width: 70, height: 70, marginRight: 16 }}
        />
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: 700,
              color: "#002D5B",
            }}
          >
            NOVA Dashboard
          </h1>
          <p style={{ margin: 0, color: "#1CC5B7", fontWeight: 500 }}>
            Next-gen Online Verification for Attendance
          </p>
        </div>
      </header>

      {/* --------------------------------------------------------------------
          Main Content Area – 2 Column Grid Layout
         -------------------------------------------------------------------- */}
      <main
        style={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "2fr 1fr", // wide left, narrow right
          gap: "24px",
          padding: "32px 64px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Log Table (Full Width) */}
        <div style={{ gridColumn: "1 / span 2" }}>
          <LogTable rows={logs} />
        </div>

        {/* Left: Most Recent Photo */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            padding: "16px",
          }}
        >
          <RecentPhoto name={recent.name} photoUrl={recent.photoUrl} />
        </div>

        {/* Right: System Health & Comment Tagger */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            padding: "16px",
          }}
        >
          <SystemHealth {...system} />
          <div style={{ marginTop: "16px" }}>
            <CommentTagger photoId={recent.id} />
          </div>
        </div>
      </main>

      {/* --------------------------------------------------------------------
          Footer
         -------------------------------------------------------------------- */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#002D5B",
          color: "white",
          textAlign: "center",
          padding: "12px 0",
          fontSize: "0.9rem",
          letterSpacing: "0.5px",
        }}
      >
        © 2025 NOVA – Smart Attendance and Monitoring System (Group 9)
      </footer>
    </div>
  );
}
