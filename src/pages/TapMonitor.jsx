// ============================================================================
// TapMonitor.jsx – Live Tap-In Monitoring View for Professors
// ----------------------------------------------------------------------------
// Author: Eknoor Goraya (NOVA Team 9)
// Purpose:
//    Provides a focused monitoring interface for instructors during class.
//    Displays a rolling log of recent tap-ins with quick visual verification
//    through large profile photos and an area for situational comments.
// ----------------------------------------------------------------------------
// Notes:
//    • Uses mock data until backend integration is ready.
//    • Limits the log to the 20 most recent tap events.
//    • Designed for always-on display during class sessions.
// ============================================================================

import { useMemo } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Chip,
  Stack,
  Container,
  GlobalStyles,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTapMonitor } from "../context/TapMonitorContext.jsx";

export default function TapMonitor() {
  // Get tap-in data from shared context (auto-updates every 5 seconds)
  const { tapLogs, mostRecent } = useTapMonitor();

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        bgcolor: "#0B1220", // Match Dashboard blue background
        color: "text.primary",
      }}
    >
      {/* Global Styles to ensure consistent background */}
      <GlobalStyles
        styles={{
          ".MuiContainer-root": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
          ".MuiPaper-root": {
            backgroundColor: "#0f172a !important",
            borderRadius: "12px !important",
          },
        }}
      />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ px: { xs: 2, sm: 3 }, py: 4, bgcolor: "#0B1220" }}>
          {/* Header */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Tap Monitor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Live monitoring of student tap-ins during class session
            </Typography>
            <Typography variant="body2" color="primary.main" sx={{ mt: 1, fontWeight: 600 }}>
              Lecture Time: 10:00 AM - 11:20 AM
            </Typography>
          </Box>

          <Grid container spacing={2.5} sx={{ height: "calc(100vh - 180px)", mb: 0 }}>
            {/* Left Column - Recent Tap-In Display */}
            <Grid item xs={12} md={5}>
              <Paper
                sx={{
                  p: 2.4, // 20% smaller (3 * 0.8)
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mb: 2.4, fontSize: "1rem" }}>
                  Most Recent Tap-In
                </Typography>
                {mostRecent && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                      width: "100%",
                    }}
                  >
                    <Avatar
                      src={mostRecent.photo || undefined}
                      sx={{
                        width: 180, // 20% smaller (225 * 0.8)
                        height: 180, // 20% smaller (225 * 0.8)
                        mb: 2.4, // 20% smaller (3 * 0.8)
                        border: "2.4px solid", // 20% smaller (3 * 0.8)
                        borderColor: "primary.main",
                        fontSize: mostRecent.photo ? "inherit" : "3.6rem", // 20% smaller (4.5rem * 0.8)
                      }}
                    >
                      {mostRecent.photo ? null : mostRecent.name.split(" ").map(n => n[0]).join("")}
                    </Avatar>
                    <Typography variant="h6" fontWeight={600} gutterBottom sx={{ fontSize: "1.25rem" }}>
                      {mostRecent.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.6, fontSize: "0.875rem" }}>
                      {mostRecent.studentNumber}
                    </Typography>
                    <Stack direction="column" spacing={1.2} alignItems="center">
                      <Stack direction="row" spacing={0.8} alignItems="center">
                        <AccessTimeIcon fontSize="small" sx={{ fontSize: 16 }} color={(mostRecent.walkIn === "10:10 AM" || mostRecent.walkIn === "10:15 AM") ? "error" : "action"} />
                        <Typography variant="body2" sx={{ fontSize: "0.875rem" }} color={(mostRecent.walkIn === "10:10 AM" || mostRecent.walkIn === "10:15 AM") ? "error.main" : "text.secondary"}>
                          Walk-in: {mostRecent.walkIn}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.8} alignItems="center">
                        <ExitToAppIcon fontSize="small" sx={{ fontSize: 16 }} color={mostRecent.walkOut === "10:45 AM" ? "error" : "action"} />
                        <Typography variant="body2" sx={{ fontSize: "0.875rem" }} color={mostRecent.walkOut === "10:45 AM" ? "error.main" : "text.secondary"}>
                          Walk-out: {mostRecent.walkOut}
                        </Typography>
                      </Stack>
                      <Chip
                        icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
                        label={
                          mostRecent.walkOut === "10:45 AM" ? "Left Early" : 
                          (mostRecent.walkIn === "10:10 AM" || mostRecent.walkIn === "10:15 AM") ? "Late Arrival" : 
                          "Verified"
                        }
                        color={
                          mostRecent.walkOut === "10:45 AM" ? "warning" : 
                          (mostRecent.walkIn === "10:10 AM" || mostRecent.walkIn === "10:15 AM") ? "error" : 
                          "success"
                        }
                        size="small"
                        sx={{ mt: 0.8, fontSize: "0.7rem" }}
                      />
                    </Stack>
                  </Box>
                )}
              </Paper>
            </Grid>

            {/* Right Column - Tap-In Log */}
            <Grid item xs={12} md={7}>
              <Paper
                sx={{
                  p: 2, // 20% smaller (2.5 * 0.8)
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mb: 1.2, fontSize: "1rem" }}>
                  Recent Tap-Ins
                </Typography>
                <Box sx={{ flexGrow: 1, overflow: "auto" }}>
                  <List>
                    {tapLogs.map((log, index) => (
                      <Box key={log.id}>
                        <ListItem
                          sx={{
                            py: 1.8, // 20% smaller (2.25 * 0.8)
                            px: 1.2, // 20% smaller (1.5 * 0.8)
                            "&:hover": {
                              bgcolor: "rgba(255,255,255,0.05)",
                              borderRadius: 1,
                            },
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              src={log.photo || undefined}
                              sx={{
                                width: 48, // 20% smaller (60 * 0.8)
                                height: 48, // 20% smaller (60 * 0.8)
                                border: "1.6px solid", // 20% smaller (2 * 0.8)
                                borderColor: "primary.main",
                              }}
                            >
                              {log.photo ? null : log.name.split(" ").map(n => n[0]).join("")}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="subtitle2" fontWeight={600} sx={{ fontSize: "0.9rem" }}>
                                {log.name}
                              </Typography>
                            }
                            secondary={
                              <Stack direction="column" spacing={0.4} sx={{ mt: 0.6 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.75rem" }}>
                                  {log.studentNumber}
                                </Typography>
                                <Stack direction="row" spacing={1.6} alignItems="center" sx={{ flexWrap: "wrap" }}>
                                  <Stack direction="row" spacing={0.4} alignItems="center">
                                    <AccessTimeIcon 
                                      fontSize="small" 
                                      sx={{ 
                                        fontSize: 11.2, // 20% smaller (14 * 0.8)
                                        color: (log.walkIn === "10:10 AM" || log.walkIn === "10:15 AM") ? "#ef5350" : "inherit" 
                                      }} 
                                    />
                                    <Typography 
                                      variant="body2" 
                                      color={(log.walkIn === "10:10 AM" || log.walkIn === "10:15 AM") ? "error.main" : "text.secondary"}
                                      sx={{ fontSize: "0.75rem" }}
                                    >
                                      In: {log.walkIn}
                                    </Typography>
                                  </Stack>
                                  <Stack direction="row" spacing={0.4} alignItems="center">
                                    <ExitToAppIcon 
                                      fontSize="small" 
                                      sx={{ 
                                        fontSize: 11.2, // 20% smaller (14 * 0.8)
                                        color: log.walkOut === "10:45 AM" ? "#ef5350" : "inherit" 
                                      }} 
                                    />
                                    <Typography 
                                      variant="body2" 
                                      color={log.walkOut === "10:45 AM" ? "error.main" : "text.secondary"}
                                      sx={{ fontSize: "0.75rem" }}
                                    >
                                      Out: {log.walkOut}
                                    </Typography>
                                  </Stack>
                                </Stack>
                              </Stack>
                            }
                            sx={{ ml: 1.2 }} // 20% smaller (1.5 * 0.8)
                          />
                          <Box sx={{ ml: 1.2 }}>
                            {log.status === "success" ? (
                              <Chip
                                icon={<CheckCircleIcon />}
                                label={
                                  log.walkOut === "10:45 AM" ? "Left Early" : 
                                  (log.walkIn === "10:10 AM" || log.walkIn === "10:15 AM") ? "Late Arrival" : 
                                  "Verified"
                                }
                                color={
                                  log.walkOut === "10:45 AM" ? "warning" : 
                                  (log.walkIn === "10:10 AM" || log.walkIn === "10:15 AM") ? "error" : 
                                  "success"
                                }
                                size="small"
                              />
                            ) : (
                              <Chip
                                icon={<CancelIcon />}
                                label="Failed"
                                color="error"
                                size="small"
                              />
                            )}
                          </Box>
                        </ListItem>
                        {index < tapLogs.length - 1 && <Divider variant="inset" component="li" />}
                      </Box>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
