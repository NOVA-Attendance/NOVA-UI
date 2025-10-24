// ============================================================================
// Dashboard.jsx – NOVA Dashboard (Frontend Only, Mock Data Version)
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Full-screen responsive NOVA dashboard using mock data.
// ============================================================================

import { useState } from "react";
import LogTable from "../components/LogTable";
import RecentPhoto from "../components/RecentPhoto";
import SystemHealth from "../components/SystemHealth";
import CommentTagger from "../components/CommentTagger";
import novaLogo from "../assets/nova-logo.png";
import denzelPhoto from "../assets/denzelPhoto.png";

export default function Dashboard() {
  const [logs] = useState([
    { id: 1, name: "Denzel Shaka", time: "2025-10-09 10:20", status: "Entered" },
    { id: 2, name: "Manan Dayalani", time: "2025-10-09 10:25", status: "Exited" },
    { id: 3, name: "Rayane Chemsi", time: "2025-10-09 10:32", status: "Entered" },
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

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", // use full viewport width
        backgroundColor: "#F7F8FA",
        color: "#002D5B",
        fontFamily: "'Poppins', sans-serif",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          padding: "16px 48px",
          borderBottom: "3px solid #1CC5B7",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
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

      {/* Main Content */}
      <main
        style={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
          padding: "32px 64px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Log Table (Full Width Row) */}
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

        {/* Right: System Health + Comment Tagger */}
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

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#002D5B",
          color: "#FFFFFF",
          textAlign: "center",
          padding: "12px 0",
          fontSize: "0.9rem",
          letterSpacing: "0.5px",
          boxSizing: "border-box",
        }}
      >
        © 2025 NOVA – Smart Attendance and Monitoring System (Group 9)
      </footer>
    </div>
  );
}
