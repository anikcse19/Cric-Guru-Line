import { BASE_URL } from "../../../../config";



export const fetchPointsTable = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/get-series-points-table?seriesId=${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.res?.srs;
  } catch (error) {
    console.error("Failed to fetch match highlight:", error);
    return null;
  }
};
