import { useEffect, useState } from "react";
import { getPlayers } from "../services/playerService";

export default function Participants() {

  const [players, setPlayers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    try {
      const data = await getPlayers();
      setPlayers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Registered Participants
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {players.map((player) => (

          <div
            key={player.id}
            className="bg-white rounded-xl shadow-lg p-5"
          >

            <h2 className="text-xl font-bold">
              {player.name}
            </h2>

            <p className="mt-2">
              📱 {player.mobile}
            </p>

            <p>
              🏸 {player.category}
            </p>

            {player.partner_name && (
              <p>
                👥 {player.partner_name}
              </p>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}