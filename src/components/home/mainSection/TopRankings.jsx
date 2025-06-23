import React from "react";

export default function TopRankings() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">TOP RANKINGS</h2>
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded">
          ODI
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded">TEST</button>
        <button className="px-4 py-2 bg-gray-200 rounded">T20</button>
      </div>
      <div>
        <p className="font-semibold">No.1 Batter</p>
        <p className="text-purple-600">Shubman Gill</p>
      </div>
      <div className="mt-4">
        <p className="font-semibold">No.1 Bowler</p>
        <p className="text-purple-600">Player Name</p>
      </div>
    </div>
  );
}
