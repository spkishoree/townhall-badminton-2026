import { useEffect, useState } from "react";
import { getPlayers, deletePlayer } from "../services/playerService";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadPlayers();
  }, []);

  async function loadPlayers() {
    const data = await getPlayers();
    setPlayers(data);
  }

  function logout() {
    sessionStorage.removeItem("admin_logged_in");
    navigate("/admin-login");
}

  async function removePlayer(id) {
    const confirmDelete = window.confirm(
      "Delete this participant?"
    );

    if (!confirmDelete) return;

    await deletePlayer(id);

    loadPlayers();
  }

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  <div className="flex justify-between mb-6">

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>

<button
onClick={logout}
className="bg-red-600 text-white px-5 py-2 rounded-lg"
>
Logout
</button>

</div>

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <input
        className="border rounded-lg p-3 w-full mb-6"
        placeholder="Search Player..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-auto">

        <table className="min-w-full bg-white rounded-xl shadow">

          <thead>

            <tr className="bg-slate-900 text-white">

              <th className="p-3">ID</th>

              <th>Name</th>

              <th>Mobile</th>

              <th>Category</th>

              <th>Partner</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((player) => (

              <tr
                key={player.id}
                className="border-b"
              >

                <td className="p-3">{player.id}</td>

                <td>{player.name}</td>

                <td>{player.mobile}</td>

                <td>{player.category}</td>

                <td>{player.partner_name || "-"}</td>

                <td>

                  <button
                    onClick={() =>
                      removePlayer(player.id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}