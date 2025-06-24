import React from "react";
import { PollCard } from "../../../common/PollCard";

const pollsData = [
  {
    id: 1,
    league: "Tamil Nadu Premier League 2025",
    match: "22nd Match | 24 Jun 2025 | 07:45 PM",
    options: ["Lyca Kovai Kings", "IDream Tiruppur Tamizhans"],
  },
  {
    id: 2,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
];



export default function LatestPolls() {
  return (
    <div className="bg-white p-6 rounded shadow mb-12">
      <h2 className="font-bold text-xl mb-4">LATEST POLLS</h2>
      <hr className="mb-6" />
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {pollsData.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
      <div className="text-center space-y-2">
        <button className="px-6 py-2 bg-gradient-to-r from-[#3d4375] via-[#4a2465] to-[#4d1e62] text-white font-bold rounded">
          LOAD MORE
        </button>
        <p className="text-blue-600 hover:underline cursor-pointer">See More</p>
      </div>
    </div>
  );
}
