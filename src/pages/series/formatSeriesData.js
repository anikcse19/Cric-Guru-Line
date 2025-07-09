// utils/formatSeriesData.js

export const groupSeriesByMonth = (data) => {
  const grouped = {};

  data.forEach((item) => {
    const startDate = new Date(item.sD * 1000);
    const endDate = new Date(item.eD * 1000);

    const month = startDate.toLocaleString("default", { month: "long" });
    const year = startDate.getFullYear();
    const monthYear = `${month} ${year}`;

    const formattedItem = {
      ...item,
      formattedTime: `${startDate.toDateString()} - ${endDate.toDateString()}`,
    };

    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }

    grouped[monthYear].push(formattedItem);
  });

  return Object.entries(grouped).map(([date, matches]) => ({
    date,
    matches,
  }));
};
