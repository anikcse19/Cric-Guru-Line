import React from "react";

const series = [
  "Tamil Nadu Premier League 2025",
  "India tour of England 2025",
  "Major League Cricket 2025",
  "Maharashtra Premier League 2025",
  "World Test Championship Final 2025",
  "West Indies tour of England 2025",
  "T20 Blast 2025",
  "West Indies tour of Ireland 2025",
  "Indian Premier League 2025",
  "USA Women tour of Netherlands 2025",
];

export default function PopularSeries() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">POPULAR SERIES</h2>
      <ul className="space-y-2">
        {series.map((item, idx) => (
          <li
            key={idx}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="mt-4 text-blue-500 hover:underline">See More</button>
    </div>
  );
}
