import { BASE_URL } from "../../../config";

export const fetchPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/get-player-trending-app`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.res?.plrs;
  } catch (error) {
    console.error("Failed to fetch recent future series:", error);
    return null;
  }
};
