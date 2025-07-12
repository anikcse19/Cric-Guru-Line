import { BASE_URL } from "../../../../config";



export const fetchCommentary = async (matchId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/get-match-bally-ball?matchId=${matchId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.res;
  } catch (error) {
    console.error("Failed to fetch match Commentary:", error);
    return null;
  }
};
