import { Link } from "react-router-dom";

export default function Navbar() {
    const admin =
    sessionStorage.getItem("admin_logged_in");
  return (
    <nav
      style={{
        background: "#0f172a",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/register" style={{ color: "white" }}>
        Register
      </Link>

      <Link to="/participants" style={{ color: "white" }}>
        Participants
      </Link>

      {admin && (
    <Link to="/admin">
        Admin
    </Link>
)}
    </nav>
  );
}