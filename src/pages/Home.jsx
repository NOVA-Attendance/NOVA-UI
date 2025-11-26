// ============================================================================
// Home.jsx – NOVA Project Introduction Page
// ----------------------------------------------------------------------------
// Author: NOVA Team 9
// Project: NOVA – Smart Attendance and Monitoring System
// Course: CEG4912 - Group 9
// ----------------------------------------------------------------------------
// Purpose:
//    Welcome/introduction page that explains what NOVA is, why it's being
//    developed, who developed it, and key project information.
// ============================================================================

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import { GlobalStyles } from "@mui/material";
import novaLogo from "../assets/nova-logo.png";
import SchoolIcon from "@mui/icons-material/School";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Home() {
  const teamMembers = [
    { name: "Christopher King", studentNumber: "300226522", email: "cking028@uottawa.ca", role: "Project Manager & Embedded Hardware" },
    { name: "Denzel Shaka", studentNumber: "300185848", email: "dshak053@uottawa.ca", role: "Backend Developer" },
    { name: "Eknoor Goraya", studentNumber: "300278785", email: "egora090@uottawa.ca", role: "Frontend Developer" },
    { name: "Fareis Canoe", studentNumber: "300299663", email: "fcano068@uottawa.ca", role: "Hardware & AI Model" },
    { name: "Manan Dayalani", studentNumber: "300256144", email: "mdaya049@uottawa.ca", role: "Frontend Developer" },
    { name: "Rayane Chemsi", studentNumber: "300324494", email: "rchem099@uottawa.ca", role: "Backend Developer" },
  ];

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "#26C6DA" }} />,
      title: "Secure Verification",
      description: "RFID/NFC cards combined with facial recognition ensure accurate identity verification and prevent proxy attendance.",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "#26C6DA" }} />,
      title: "Real-Time Tracking",
      description: "Instant attendance logging with automatic synchronization to a central database. View live attendance data through our web dashboard.",
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: "#26C6DA" }} />,
      title: "Smart Automation",
      description: "Proximity sensors activate the system automatically when users approach, saving power and streamlining the check-in process.",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#26C6DA" }} />,
      title: "Educational Focus",
      description: "Designed specifically for classrooms, universities, and training centers to eliminate manual roll calls and reduce administrative burden.",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <GlobalStyles
        styles={{
          ".MuiContainer-root": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
        }}
      />
      <Container maxWidth={false} disableGutters>
        <Box 
          sx={{ 
            px: { xs: 2, sm: 3 }, 
            py: 6,
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              textAlign: "center",
              mb: 8,
              py: 6,
              ml: -2, // Move a little to the left for better centering
            }}
          >
            <Avatar
              src={novaLogo}
              sx={{
                width: 240, // 2x larger (120 * 2)
                height: 240, // 2x larger (120 * 2)
                mx: "auto",
                mb: 4,
                border: "4px solid",
                borderColor: "primary.main",
              }}
            />
            <Typography
              component="div"
              sx={{
                fontSize: { xs: "4.5rem", sm: "5.5rem", md: "6.5rem" },
                color: "#FFFFFF",
                fontWeight: 900,
                letterSpacing: "0.4rem",
                textTransform: "uppercase",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                textShadow: "4px 4px 0px rgba(38,198,218,0.4), 8px 8px 0px rgba(38,198,218,0.25)",
                mb: 2,
                lineHeight: 1,
                fontStyle: "normal",
                WebkitTextStroke: "3px rgba(38,198,218,0.4)",
                transform: "translateZ(0)",
              }}
            >
              NOVA
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 1 }}>
              Next-gen Online Verification for Attendance
            </Typography>
            <Chip
              label="CEG4912 - Group 9"
              color="primary"
              sx={{ mt: 2, fontSize: "0.9rem", py: 2.5, px: 1 }}
            />
          </Box>

          {/* Project Description */}
          <Paper
            sx={{
              p: 5,
              mb: 6,
              bgcolor: "background.paper",
              borderRadius: 3,
              ml: -2, // Move a little to the left for better centering
            }}
          >
            <Typography variant="h4" fontWeight={600} gutterBottom sx={{ mb: 3 }}>
              About NOVA
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}>
              NOVA is a smart, automated attendance and monitoring system designed to revolutionize how
              attendance is tracked in educational and professional environments. Traditional manual roll calls
              and sign-in sheets are time-consuming, prone to errors, and vulnerable to misuse. NOVA addresses
              these challenges by combining <strong>RFID/NFC technology</strong> with <strong>facial recognition</strong> to provide
              a secure, efficient, and reliable attendance verification system.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}>
              Built around an <strong>NVIDIA Jetson Nano</strong>, NOVA uses proximity sensors to automatically activate when
              users approach. Students can check in by tapping their ID card or through facial recognition. The
              system displays their photo and name on an LCD screen for verification, logs attendance in real-time,
              and synchronizes data with a central PostgreSQL database. Teachers and administrators can access
              live attendance data, statistics, and reports through a React-based web dashboard.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              While initially designed for classrooms, NOVA has applications across various sectors including
              corporate offices, healthcare facilities, libraries, conferences, and events—making it a versatile
              solution for any environment requiring automated attendance and access management.
            </Typography>
          </Paper>

          {/* Features Grid */}
          <Typography variant="h4" fontWeight={600} gutterBottom sx={{ mb: 4, textAlign: "center", mr: 2 }}>
            Key Features
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8, mr: -1 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
                <Paper
                  sx={{
                    p: 4,
                    width: "100%",
                    height: 300, // Fixed equal height for all cards
                    textAlign: "center",
                    bgcolor: "background.paper",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 24px rgba(38,198,218,0.2)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>{feature.icon}</Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Team Section */}
          <Paper
            sx={{
              p: 5,
              bgcolor: "background.paper",
              borderRadius: 3,
              ml: -2, // Move a little to the left for consistency
            }}
          >
            <Typography variant="h4" fontWeight={600} gutterBottom sx={{ mb: 4, textAlign: "center" }}>
              Developed By Group 9
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ textAlign: "center", mb: 5 }}>
              University of Ottawa - CEG4912 Capstone Project
            </Typography>
            <Grid container spacing={3}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: "rgba(38,198,218,0.05)",
                      borderRadius: 2,
                      border: "1px solid rgba(38,198,218,0.2)",
                      height: "100%",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {member.studentNumber}
                    </Typography>
                    <Typography variant="body2" color="primary.main" sx={{ mb: 1, wordBreak: "break-word" }}>
                      {member.email}
                    </Typography>
                    <Chip
                      label={member.role}
                      size="small"
                      sx={{
                        mt: 1,
                        bgcolor: "rgba(38,198,218,0.15)",
                        color: "primary.main",
                        fontSize: "0.75rem",
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Footer Note */}
          <Box sx={{ textAlign: "center", mt: 6, py: 4 }}>
            <Typography variant="body2" color="text.secondary">
              © 2025 NOVA – Smart Attendance and Monitoring System
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Department of Electrical Engineering and Computer Science | University of Ottawa
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

