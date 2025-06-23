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
      <h2 className="font-semibold text-xl mb-6">POPULAR SERIES</h2>
      <ul className="space-y-4 border-b">
        {series.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-[#4c549a] border-b pb-4 text-sm hover:underline hover:transition duration-500 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className=" flex items-center justify-center">
        <button className="mt-4 text-[#4c549a] hover:underline">
          See More
        </button>
      </div>
    </div>
  );
}
