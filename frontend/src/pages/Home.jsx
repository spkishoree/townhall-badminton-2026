import poster from "../assets/poster.jpg";

import TournamentStats from "../components/tournament/TournamentStats";
import QuickActions from "../components/tournament/QuickActions";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Poster */}
      <section className="max-w-6xl mx-auto pt-6 px-4">
        <img
          src={poster}
          alt="Tournament Poster"
          className="w-full rounded-2xl shadow-2xl"
        />
      </section>

      <TournamentStats />

      <QuickActions />

    </div>
  );
}