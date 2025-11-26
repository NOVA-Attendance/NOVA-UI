// --------------------------------------------------------------
// RecentPhoto.jsx – Shows the most recent recognized person
// --------------------------------------------------------------
// Displays the latest person who entered/exited, including
// their image and name. This component will later be updated
// with live photo feeds from the Jetson device.
// --------------------------------------------------------------

export default function RecentPhoto({ photoUrl, name }) {
  return (
    <div style={{ padding: 16 }}>
      <h3>Most Recent Person</h3>
      {/* Display the image returned from the backend */}
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={name}
          style={{ maxWidth: 240, borderRadius: 8 }}
        />
      ) : (
        <div
          style={{
            width: 240,
            height: 240,
            borderRadius: 8,
            backgroundColor: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
          }}
        >
          {name ? name.split(" ").map(n => n[0]).join("") : "?"}
        </div>
      )}
      {/* Label showing the name associated with this image */}
      <p style={{ marginTop: 8 }}>{name}</p>
    </div>
  );
}
