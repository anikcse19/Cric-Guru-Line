// action.js

import { BASE_URL } from "../../../config";

export const fetchMatchSquad = async (matchId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/get-match-squad?matchId=${matchId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.res?.match;
  } catch (error) {
    console.error("Failed to fetch match squad:", error);
    return null;
  }
};
