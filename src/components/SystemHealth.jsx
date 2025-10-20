// --------------------------------------------------------------
// SystemHealth.jsx – Displays device metrics
// --------------------------------------------------------------
// Periodically fetches system data (temperature, CPU usage,
// and power state) from the backend to give admins insight
// into Jetson hardware performance.
// --------------------------------------------------------------

import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function SystemHealth() {
  // Local state to store health metrics from the backend
  const [d, setD] = useState({ temp: "--", cpu: "--", power: "ON" });

  // useEffect() runs once when the component mounts and sets
  // up an interval to refresh data every 5 seconds.
  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get("/api/system");
        setD(data); // update metrics if call succeeds
      } catch {
        // keep old data if backend temporarily unreachable
      }
    };

    load(); // run immediately on mount
    const id = setInterval(load, 5000); // refresh every 5s
    return () => clearInterval(id); // cleanup interval on unmount
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h3>System Health</h3>
      <p>Temp: {d.temp}°C</p>
      <p>CPU: {d.cpu}%</p>
      <p>Status: {d.power}</p>
    </div>
  );
}
