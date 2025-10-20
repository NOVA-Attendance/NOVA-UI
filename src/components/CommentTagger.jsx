// --------------------------------------------------------------
// CommentTagger.jsx – Allows tagging a photo with comments
// --------------------------------------------------------------
// Lets instructors or admins write a note for the most recent
// scanned picture (e.g. "Absent today but entered late").
// Sends the data to the backend using a POST request.
// --------------------------------------------------------------

import { useState } from "react";
import { api } from "../services/api";

export default function CommentTagger({ photoId }) {
  // Local state variable to hold current comment text
  const [comment, setComment] = useState("");

  // Function to send comment to backend API
  const save = async () => {
    // Ignore empty strings
    if (!comment.trim()) return;

    // POST comment + associated photo ID to the backend
    await api.post("/api/comments", { photoId, comment });

    // Clear the textbox and show quick confirmation
    setComment("");
    alert("Saved");
  };

  return (
    <div style={{ padding: 16 }}>
      <h3>Tag a Picture</h3>

      {/* Text area for user input */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter comment…"
        rows={3}
        style={{ width: "100%" }}
      />

      {/* Submit button triggers the save() call */}
      <button onClick={save} style={{ marginTop: 8 }}>
        Submit
      </button>
    </div>
  );
}
