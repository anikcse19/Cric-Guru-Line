import { BASE_URL } from "../../../../config";


export const fetchScoreboard = async (matchId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/get-match-scoreboard?matchId=${matchId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.res;
  } catch (error) {
    console.error("Failed to fetch match squad:", error);
    return null;
  }
};
