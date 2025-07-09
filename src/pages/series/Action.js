// action.js

import { BASE_URL } from "../../../config";

export const fetchRecentFutureSeries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/get-recent-future-series`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.res?.srs;
  } catch (error) {
    console.error("Failed to fetch recent future series:", error);
    return null;
  }
};
