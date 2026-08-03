import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Participants from "./pages/Participants";
import Schedule from "./pages/Schedule";
import Fixtures from "./pages/Fixtures";
import Results from "./pages/Results";
import Admin from "./pages/Admin";

import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/common/ProtectedRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;