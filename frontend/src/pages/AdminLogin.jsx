import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    if (password === "townhall2026") {
      sessionStorage.setItem("admin_logged_in", "true");
      navigate("/admin");
    } else {
      alert("Incorrect Password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h1>

        <form onSubmit={login}>

          <input
            type="password"
            placeholder="Enter Admin Password"
            className="border rounded-lg p-3 w-full mb-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-slate-900 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}