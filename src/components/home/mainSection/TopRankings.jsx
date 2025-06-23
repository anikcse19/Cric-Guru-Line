import React, { useState } from "react";

// Example dynamic ranking data
const rankings = {
  ODI: {
    batter: "Shubman Gill",
    bowler: "Mohammed Siraj",
  },
  TEST: {
    batter: "Joe Root",
    bowler: "Pat Cummins",
  },
  T20: {
    batter: "Suryakumar Yadav",
    bowler: "Rashid Khan",
  },
};

export default function TopRankings() {
  const tabs = ["ODI", "TEST", "T20"];
  const [activeTab, setActiveTab] = useState("ODI");

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">TOP RANKINGS</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#3d4375] via-[#4a2465] to-[#4d1e62] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Ranking details */}
      <div>
        <p className="font-semibold">No.1 Batter</p>
        <p className="text-[#4a2465]">{rankings[activeTab].batter}</p>
      </div>
      <div className="mt-4">
        <p className="font-semibold">No.1 Bowler</p>
        <p className="text-[#4a2465]">{rankings[activeTab].bowler}</p>
      </div>
      <div className=" flex items-center justify-center">
        <button className="mt-4 text-[#4c549a] hover:underline">
          See More
        </button>
      </div>
    </div>
  );
}
