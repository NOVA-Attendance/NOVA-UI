// ============================================================================
// TapMonitorContext.jsx – Shared State for Tap Monitor Data
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose: Provides shared tap-in data that updates in real-time across pages.
// ----------------------------------------------------------------------------
// Description:
//    • Maintains a rotating list of tap-ins that updates every 5 seconds.
//    • Shared between TapMonitor and Dashboard pages.
//    • Automatically rotates the order to simulate real-time updates.
// ============================================================================

import { createContext, useContext, useState, useEffect, useMemo } from "react";

// Import team member photos
import chrisPhoto from "../assets/chrisPhoto.png";
import denzelPhoto from "../assets/denzelPhoto.png";
import farisPhoto from "../assets/farisPhoto.png";
import eknoorPhoto from "../assets/eknoorPhoto.png";
import mananPhoto from "../assets/mananPhoto.png";

const TapMonitorContext = createContext();

// Initial tap-in data - Lecture time: 10:00 AM - 11:20 AM
const initialTapLogs = [
  {
    id: 1,
    name: "Christopher King",
    studentNumber: "300226522",
    walkIn: "09:52 AM", // Before 10:00 AM
    walkOut: "11:20 AM",
    status: "success",
    photo: chrisPhoto,
  },
  {
    id: 2,
    name: "Denzel Shaka",
    studentNumber: "300185848",
    walkIn: "09:55 AM", // Before 10:00 AM
    walkOut: "11:20 AM",
    status: "success",
    photo: denzelPhoto,
  },
  {
    id: 3,
    name: "Fareis Canoe",
    studentNumber: "300299663",
    walkIn: "09:58 AM", // Before 10:00 AM
    walkOut: "11:20 AM",
    status: "success",
    photo: farisPhoto,
  },
  {
    id: 4,
    name: "Manan Dayalani",
    studentNumber: "300256144",
    walkIn: "09:50 AM", // Before 10:00 AM (not late, but left early)
    walkOut: "10:45 AM", // Walked out early
    status: "success",
    photo: mananPhoto,
  },
  {
    id: 5,
    name: "Eknoor Goraya",
    studentNumber: "300278785",
    walkIn: "09:55 AM", // Before 10:00 AM
    walkOut: "11:20 AM",
    status: "success",
    photo: eknoorPhoto,
  },
  {
    id: 6,
    name: "Rayane Chemsi",
    studentNumber: "300324494",
    walkIn: "10:15 AM", // Late arrival (after 10:00 AM)
    walkOut: "11:20 AM",
    status: "success",
    photo: null, // Rayane photo not available - will show initials
  },
];

export function TapMonitorProvider({ children }) {
  const [tapLogs, setTapLogs] = useState(initialTapLogs);

  // Rotate the tap logs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTapLogs((prevLogs) => {
        // Move the first item to the end, shift everyone else up
        const newLogs = [...prevLogs];
        const firstItem = newLogs.shift(); // Remove first item
        newLogs.push(firstItem); // Add it to the end
        return newLogs;
      });
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Get the most recent tap-in (first item in the array)
  const mostRecent = useMemo(() => tapLogs[0] || null, [tapLogs]);

  const value = {
    tapLogs,
    mostRecent,
  };

  return (
    <TapMonitorContext.Provider value={value}>
      {children}
    </TapMonitorContext.Provider>
  );
}

export function useTapMonitor() {
  const context = useContext(TapMonitorContext);
  if (!context) {
    throw new Error("useTapMonitor must be used within TapMonitorProvider");
  }
  return context;
}
