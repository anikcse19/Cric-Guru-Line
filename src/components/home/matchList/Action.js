import { BASE_URL } from "../../../../config";

export const fetchMatchLists = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/get-match-list`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.res?.tM;
  } catch (error) {
    console.error("Failed to fetch match list:", error);
    return null;
  }
};
