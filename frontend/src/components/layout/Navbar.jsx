import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="font-bold text-lg">
          🏸 Town Hall Tournament
        </Link>

        <nav className="hidden md:flex gap-6">

          <Link to="/">Home</Link>

          <Link to="/register">Register</Link>

          <Link to="/participants">Participants</Link>

        </nav>

      </div>
    </header>
  );
}