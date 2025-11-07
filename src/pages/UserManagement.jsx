// ============================================================================
// UserManagement.jsx – NOVA User Management Page
// ----------------------------------------------------------------------------
// Author: NOVA Team 9
// Project: NOVA – Smart Attendance and Monitoring System
// ----------------------------------------------------------------------------
// Purpose:
//    Implements the user management interface for NOVA's Smart Attendance System.
//    Allows administrators to add users, view users, and add comments about users.
//    Currently uses mock data only (no backend integrations).
//
// Description:
//    • Displays a table of all users with their information
//    • Provides a form to add new users (RFID keys, faces, etc.)
//    • Allows adding comments to existing users
//    • Uses Material UI components matching NOVA's dark theme
//
// Features:
//    ✓ Add users with RFID keys, face images, and other details
//    ✓ View all users in a sortable, searchable table
//    ✓ Add comments about users
//    ✓ Connect to backend API for all operations
// ----------------------------------------------------------------------------
// Last Updated: October 2025
// ============================================================================

import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Chip,
  Alert,
  Snackbar,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import CommentIcon from "@mui/icons-material/Comment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import novaLogo from "../assets/nova-logo.png";

export default function UserManagement() {
  // ---------------- State Management ----------------
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openCommentDialog, setOpenCommentDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // ---------------- Form State ----------------
  const [newUser, setNewUser] = useState({
    name: "",
    studentNumber: "",
    email: "",
    rfidKey: "",
    faceImage: null,
    notes: "",
  });

  const [comment, setComment] = useState("");

  // ---------------- Data Grid Columns ----------------
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    { field: "studentNumber", headerName: "Student #", flex: 1, minWidth: 120 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
    { field: "rfidKey", headerName: "RFID Key", flex: 1, minWidth: 150 },
    {
      field: "hasFace",
      headerName: "Face Registered",
      width: 150,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Yes" : "No"}
          color={params.value ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            onClick={() => handleOpenCommentDialog(params.row)}
            color="primary"
          >
            <CommentIcon fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  // ---------------- Initialize Mock Users ----------------
  const initializeMockUsers = () => {
    setLoading(true);
    // Simulate network delay for realism
    setTimeout(() => {
      setUsers([
        {
          id: 1,
          name: "Denzel Shaka",
          studentNumber: "300187524",
          email: "denzel@example.com",
          rfidKey: "RFID-001",
          hasFace: true,
          comments: [],
        },
        {
          id: 2,
          name: "Manan Dayalani",
          studentNumber: "300205617",
          email: "manan@example.com",
          rfidKey: "RFID-002",
          hasFace: true,
          comments: [],
        },
        {
          id: 3,
          name: "Rayane Chemsi",
          studentNumber: "300216948",
          email: "rayane@example.com",
          rfidKey: "RFID-003",
          hasFace: false,
          comments: [],
        },
      ]);
      setLoading(false);
    }, 500);
  };

  // ---------------- Load Mock Users on Component Mount ----------------
  useEffect(() => {
    initializeMockUsers();
  }, []);

  // ---------------- Handle Add User ----------------
  const handleAddUser = async () => {
    if (!newUser.name || !newUser.studentNumber) {
      setSnackbar({
        open: true,
        message: "Name and Student Number are required",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    try {
      // Simulate a server delay
      setTimeout(() => {
        const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
        const created = {
          id: nextId,
          name: newUser.name,
          studentNumber: newUser.studentNumber,
          email: newUser.email,
          rfidKey: newUser.rfidKey,
          hasFace: Boolean(newUser.faceImage),
          comments: [],
        };
        setUsers((prev) => [created, ...prev]);
        setSnackbar({ open: true, message: "User added successfully!", severity: "success" });
        setOpenAddDialog(false);
        setNewUser({
          name: "",
          studentNumber: "",
          email: "",
          rfidKey: "",
          faceImage: null,
          notes: "",
        });
        setLoading(false);
      }, 400);
    } catch (e) {
      setLoading(false);
    }
  };

  // ---------------- Handle Add Comment ----------------
  const handleAddComment = async () => {
    if (!comment.trim()) {
      setSnackbar({
        open: true,
        message: "Comment cannot be empty",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    try {
      // Simulate server delay and update in-memory state
      setTimeout(() => {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === selectedUser.id
              ? { ...u, comments: [...(u.comments || []), comment.trim()] }
              : u
          )
        );
        setSnackbar({ open: true, message: "Comment added successfully!", severity: "success" });
        setOpenCommentDialog(false);
        setComment("");
        setSelectedUser(null);
        setLoading(false);
      }, 300);
    } catch (e) {
      setLoading(false);
    }
  };

  // ---------------- Handle Open Comment Dialog ----------------
  const handleOpenCommentDialog = (user) => {
    setSelectedUser(user);
    setComment("");
    setOpenCommentDialog(true);
  };

  // ---------------- Handle File Upload ----------------
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewUser({ ...newUser, faceImage: file });
    }
  };

  // ========================================================================
  // LAYOUT + STRUCTURE
  // ========================================================================
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* ---------------- HEADER BAR ---------------- */}
      <AppBar
        position="static"
        color="default"
        sx={{
          bgcolor: "background.paper",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar>
          <Avatar src={novaLogo} sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
            <Typography variant="h5" fontWeight={700}>
              User Management
            </Typography>
            <Typography variant="body2" color="primary.main">
              Manage users, RFID keys, faces, and comments
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAddDialog(true)}
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Add User
          </Button>
        </Toolbar>
      </AppBar>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <Container maxWidth={false} disableGutters>
        <Box sx={{ px: { xs: 2, sm: 3 }, py: 4 }}>
          {/* ---------------- Users Table ---------------- */}
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                All Users
              </Typography>
              <Button
                variant="outlined"
                startIcon={<PersonAddIcon />}
                onClick={() => setOpenAddDialog(true)}
              >
                Add New User
              </Button>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ height: 600, width: "100%" }}>
              <DataGrid
                rows={users}
                columns={columns}
                loading={loading}
                pageSizeOptions={[5, 10, 25]}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 10 },
                  },
                }}
                sx={{
                  "& .MuiDataGrid-cell": {
                    color: "text.primary",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "text.primary",
                  },
                  "& .MuiDataGrid-row:hover": {
                    backgroundColor: "rgba(255,255,255,0.02)",
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* ---------------- ADD USER DIALOG ---------------- */}
      <Dialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h6" fontWeight={600}>
            Add New User
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
            <TextField
              label="Name"
              required
              fullWidth
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              variant="outlined"
            />
            <TextField
              label="Student Number"
              required
              fullWidth
              value={newUser.studentNumber}
              onChange={(e) => setNewUser({ ...newUser, studentNumber: e.target.value })}
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              variant="outlined"
            />
            <TextField
              label="RFID Key"
              fullWidth
              value={newUser.rfidKey}
              onChange={(e) => setNewUser({ ...newUser, rfidKey: e.target.value })}
              variant="outlined"
              placeholder="e.g., RFID-001"
            />
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Face Image (Optional)
              </Typography>
              <Button variant="outlined" component="label" fullWidth>
                {newUser.faceImage ? newUser.faceImage.name : "Upload Face Image"}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Button>
            </Box>
            <TextField
              label="Notes"
              fullWidth
              multiline
              rows={3}
              value={newUser.notes}
              onChange={(e) => setNewUser({ ...newUser, notes: e.target.value })}
              variant="outlined"
              placeholder="Additional information about the user..."
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleAddUser} variant="contained" disabled={loading}>
            {loading ? "Adding..." : "Add User"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* ---------------- ADD COMMENT DIALOG ---------------- */}
      <Dialog
        open={openCommentDialog}
        onClose={() => setOpenCommentDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h6" fontWeight={600}>
            Add Comment
          </Typography>
          {selectedUser && (
            <Typography variant="body2" color="text.secondary">
              User: {selectedUser.name} ({selectedUser.studentNumber})
            </Typography>
          )}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              label="Comment"
              fullWidth
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="outlined"
              placeholder="Enter your comment about this user..."
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCommentDialog(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleAddComment} variant="contained" disabled={loading}>
            {loading ? "Adding..." : "Add Comment"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* ---------------- SNACKBAR FOR NOTIFICATIONS ---------------- */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      {/* ---------------- FOOTER ---------------- */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 2,
          bgcolor: "#0C1424",
          color: "text.secondary",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: "0.9rem",
          mt: 4,
        }}
      >
        © 2025 NOVA – Smart Attendance and Monitoring System (Group 9)
      </Box>
    </Box>
  );
}

