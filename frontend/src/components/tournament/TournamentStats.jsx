import { useEffect, useState } from "react";
import { getStats } from "../../services/statsService";

export default function TournamentStats() {

  const [stats, setStats] = useState({
    total: 0,
    singles: 0,
    doubles: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    try {
      const data = await getStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  }

  const cards = [
    {
      title: "Registered",
      value: stats.total,
      icon: "👥",
      color: "bg-blue-500",
    },
    {
      title: "Singles",
      value: stats.singles,
      icon: "🏸",
      color: "bg-orange-500",
    },
    {
      title: "Doubles",
      value: stats.doubles,
      icon: "👬",
      color: "bg-green-500",
    },
    {
      title: "Prize",
      value: "Aug 15",
      icon: "🏆",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <div className="text-5xl">{card.icon}</div>

            <div className="text-3xl font-bold mt-4">
              {card.value}
            </div>

            <div className="text-gray-600 mt-2">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}