import api from "./api";

export const getPlayers = async () => {
  const response = await api.get("/players");
  return response.data;
};

export const registerPlayer = async (player) => {
  const response = await api.post("/register", player);
  return response.data;
};