// ============================================================================
// TapMonitor.jsx – Live Tap-In Monitoring View for Professors
// ----------------------------------------------------------------------------
// Author: GPT-5 Codex (NOVA Team 9)
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

import { useMemo, useState } from "react";
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
  TextField,
  Button,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import denzelPhoto from "../assets/denzelPhoto.png";
import farisPhoto from "../assets/farisPhoto.png";
import chrisPhoto from "../assets/chrisPhoto.png";
import eknoorPhoto from "../assets/eknoorPhoto.png";
import mananPhoto from "../assets/mananPhoto.png";
import rayanePhoto from "../assets/rayanePhoto.png";

const MOCK_TAP_LOGS = [
  {
    id: 300,
    name: "Christopher King",
    studentNumber: "300226522",
    timestamp: "08:04 AM",
    status: "In",
    photoUrl: chrisPhoto,
  },
  {
    id: 301,
    name: "Denzel Shaka",
    studentNumber: "300185848",
    timestamp: "08:05 AM",
    status: "In",
    photoUrl: denzelPhoto,
  },
  {
    id: 302,
    name: "Fareis Canoe",
    studentNumber: "300299663",
    timestamp: "08:06 AM",
    status: "In",
    photoUrl: farisPhoto,
  },
  {
    id: 303,
    name: "Manan Dayalani",
    studentNumber: "300256144",
    timestamp: "08:07 AM",
    status: "In",
    photoUrl: mananPhoto,
  },
  {
    id: 304,
    name: "Eknoor Goraya",
    studentNumber: "300278785",
    timestamp: "08:08 AM",
    status: "In",
    photoUrl: eknoorPhoto,
  },
  {
    id: 305,
    name: "Rayane Chemsi",
    studentNumber: "300324494",
    timestamp: "08:09 AM",
    status: "In",
    photoUrl: rayanePhoto,
  },
];

export default function TapMonitor() {
  const [comment, setComment] = useState("");
  const [lastSavedNote, setLastSavedNote] = useState("");

  const tapLog = useMemo(() => MOCK_TAP_LOGS.slice(0, 20), []);

  const recentTwo = useMemo(() => tapLog.slice(0, 2), [tapLog]);

  const handleSaveComment = () => {
    if (!comment.trim()) {
      return;
    }

    setLastSavedNote(`Comment saved at ${new Date().toLocaleTimeString()}`);
    setComment("");
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        Live Tap-In Monitor
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <Typography variant="h6" fontWeight={600}>
                Recent Tap Activity
              </Typography>
              <Chip
                icon={<AccessTimeIcon fontSize="small" />}
                label="Last 20 tap-ins"
                variant="outlined"
                sx={{
                  borderColor: "rgba(38,198,218,0.5)",
                  color: "text.secondary",
                }}
              />
            </Stack>

            <List
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                pr: 1,
              }}
            >
              {tapLog.map((entry, index) => (
                <Box key={entry.id}>
                  <ListItem
                    sx={{
                      px: 0,
                      alignItems: "flex-start",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={entry.photoUrl}
                        alt={entry.name}
                        sx={{ width: 56, height: 56 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={1.5}
                          alignItems={{ sm: "center" }}
                        >
                          <Typography variant="subtitle1" fontWeight={600}>
                            {entry.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            #{entry.studentNumber}
                          </Typography>
                        </Stack>
                      }
                      secondary={
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={1.5}
                          alignItems={{ sm: "center" }}
                          mt={0.5}
                        >
                          <Chip
                            size="small"
                            label={`Tapped ${entry.status}`}
                            color={
                              entry.status === "In" ? "success" : "warning"
                            }
                            icon={
                              <CheckCircleOutlineIcon
                                fontSize="small"
                                sx={{ ml: "2px !important" }}
                              />
                            }
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {entry.timestamp}
                          </Typography>
                        </Stack>
                      }
                    />
                  </ListItem>
                  {index < tapLog.length - 1 && (
                    <Divider
                      component="li"
                      sx={{ borderColor: "rgba(255,255,255,0.08)" }}
                    />
                  )}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Stack spacing={3} height="100%">
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Verification - Most Recent Students
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Large images for easy verification of student identity
              </Typography>

              <Grid container spacing={3}>
                {recentTwo.map((student, idx) => (
                  <Grid item xs={12} key={student.id}>
                    <Box
                      sx={{
                        borderRadius: 2,
                        overflow: "hidden",
                        position: "relative",
                        bgcolor: "rgba(15,23,42,0.6)",
                        border: idx === 0 ? "2px solid rgba(38,198,218,0.5)" : "1px solid rgba(255,255,255,0.1)",
                        boxShadow: idx === 0 ? "0 0 20px rgba(38,198,218,0.2)" : "none",
                      }}
                    >
                      <Box
                        component="img"
                        src={student.photoUrl}
                        alt={student.name}
                        sx={{
                          width: "100%",
                          height: { xs: 280, sm: 320, md: 380 },
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: 16,
                          bottom: 16,
                          bgcolor: "rgba(15,23,42,0.9)",
                          px: 2.5,
                          py: 1.5,
                          borderRadius: 1.5,
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <Typography variant="h6" fontWeight={600}>
                          {student.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                          #{student.studentNumber}
                        </Typography>
                        <Chip
                          size="small"
                          label={`Tapped ${student.status}`}
                          color={student.status === "In" ? "success" : "warning"}
                          sx={{ mt: 1 }}
                          icon={
                            <CheckCircleOutlineIcon
                              fontSize="small"
                              sx={{ ml: "2px !important" }}
                            />
                          }
                        />
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            <Paper sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                Add Comment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Add notes or observations about the tap-in session
              </Typography>
              <TextField
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Add context or follow-up notes for this session…"
                multiline
                minRows={5}
                maxRows={8}
                fullWidth
                variant="outlined"
                sx={{
                  mb: 2,
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255,255,255,0.05)",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(38,198,218,0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#26C6DA",
                    },
                  },
                }}
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                alignItems={{ sm: "center" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveComment}
                  disabled={!comment.trim()}
                  sx={{
                    minWidth: 140,
                  }}
                >
                  Save Comment
                </Button>
                {lastSavedNote && (
                  <Typography variant="body2" color="success.main">
                    {lastSavedNote}
                  </Typography>
                )}
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}


