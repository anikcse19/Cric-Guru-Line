import {
  WomensAllRounderList,
  WomensBattingList,
  WomensBowlingList,
  WomensTeamList,
} from "@/Data";
import React from "react";

const WoWomenRankings = () => {
  return (
    <div className="py-12 w-full flex flex-col gap-12">
      {/* Womens team rankings */}
      <div>
        <h1 className="pb-4 border-b border-gray-200 w-full font-bold text-xl">
          Women&apos;s Team Ranking
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {WomensTeamList?.map((ranking) => (
            <div
              key={ranking.value}
              className="bg-white py-3 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-4 text-[#3A449B] px-2">
                {ranking.label}
              </h2>
              <table className="w-full text-left">
                <thead className="">
                  <tr className="border-b px-2 bg-gray-100 ">
                    <th className="pb-2 p-2">Rank</th>
                    <th className="pb-2 py-2">Team</th>
                    <th className="pb-2 text-right py-2">Ratings</th>
                    <th className="pb-2 text-right p-2">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.teams.map((team, index) => (
                    <tr
                      key={index}
                      className={`${
                        index === 0 ? "bg-[#3A449B] text-white" : "bg-white"
                      } border-b border-gray-200 `}
                    >
                      <td className="py-2 px-2">{index + 1}</td>
                      <td className="py-2">{team.team}</td>
                      <td className="py-2 text-right">{team.ratings}</td>
                      <td className="py-2 text-right px-2">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="m-3 border border-gray-200 p-3 text-center text-gray-400 rounded cursor-pointer group relative overflow-hidden hover:text-white">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to right, #3d4375 0%, #43356e 29%, #4a2565 53%, #4d1e62 100%)",
                    zIndex: 0,
                  }}
                ></div>
                <span className="relative z-10 ">View Full Table</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Womens batting rankings */}
      <div>
        <h1 className="pb-4 border-b border-gray-200 w-full font-bold text-xl">
          Women&apos;s Batting Ranking
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {WomensBattingList?.map((ranking) => (
            <div
              key={ranking.value}
              className="bg-white py-3 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-4 text-[#3A449B] px-2">
                {ranking.label}
              </h2>
              <table className="w-full text-left">
                <thead className="">
                  <tr className="border-b px-2 bg-gray-100 ">
                    <th className="pb-2 p-2">Rank</th>
                    <th className="pb-2 py-2">Team</th>
                    <th className="pb-2 text-right p-2">Ratings</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.players.map((team, index) => (
                    <tr
                      key={index}
                      className={`${
                        index === 0 ? "bg-[#3A449B] text-white" : "bg-white"
                      } border-b border-gray-200 `}
                    >
                      <td className="py-2 px-2">{index + 1}</td>
                      <td className="py-2">{team.player}</td>
                      <td className="py-2 text-right px-2">{team.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="m-3 border border-gray-200 p-3 text-center text-gray-400 rounded cursor-pointer group relative overflow-hidden hover:text-white">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to right, #3d4375 0%, #43356e 29%, #4a2565 53%, #4d1e62 100%)",
                    zIndex: 0,
                  }}
                ></div>
                <span className="relative z-10 ">View Full Table</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Womens Bowling Rating */}
      <div>
        <h1 className="pb-4 border-b border-gray-200 w-full font-bold text-xl">
          Women&apos;s Batting Ranking
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {WomensBowlingList?.map((ranking) => (
            <div
              key={ranking.value}
              className="bg-white py-3 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-4 text-[#3A449B] px-2">
                {ranking.label}
              </h2>
              <table className="w-full text-left">
                <thead className="">
                  <tr className="border-b px-2 bg-gray-100 ">
                    <th className="pb-2 p-2">Rank</th>
                    <th className="pb-2 py-2">Team</th>
                    <th className="pb-2 text-right p-2">Ratings</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.players.map((team, index) => (
                    <tr
                      key={index}
                      className={`${
                        index === 0 ? "bg-[#3A449B] text-white" : "bg-white"
                      } border-b border-gray-200 `}
                    >
                      <td className="py-2 px-2">{index + 1}</td>
                      <td className="py-2">{team.player}</td>
                      <td className="py-2 text-right px-2">{team.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="m-3 border border-gray-200 p-3 text-center text-gray-400 rounded cursor-pointer group relative overflow-hidden hover:text-white">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to right, #3d4375 0%, #43356e 29%, #4a2565 53%, #4d1e62 100%)",
                    zIndex: 0,
                  }}
                ></div>
                <span className="relative z-10 ">View Full Table</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Womens allrounding rating */}
      <div>
        <h1 className="pb-4 border-b border-gray-200 w-full font-bold text-xl">
          Women&apos;s All-Rounders Ranking
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {WomensAllRounderList?.map((ranking) => (
            <div
              key={ranking.value}
              className="bg-white py-3 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-4 text-[#3A449B] px-2">
                {ranking.label}
              </h2>
              <table className="w-full text-left">
                <thead className="">
                  <tr className="border-b px-2 bg-gray-100 ">
                    <th className="pb-2 p-2">Rank</th>
                    <th className="pb-2 py-2">Team</th>
                    <th className="pb-2 text-right p-2">Ratings</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.players.map((team, index) => (
                    <tr
                      key={index}
                      className={`${
                        index === 0 ? "bg-[#3A449B] text-white" : "bg-white"
                      } border-b border-gray-200 `}
                    >
                      <td className="py-2 px-2">{index + 1}</td>
                      <td className="py-2">{team.player}</td>
                      <td className="py-2 text-right px-2">{team.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="m-3 border border-gray-200 p-3 text-center text-gray-400 rounded cursor-pointer group relative overflow-hidden hover:text-white">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to right, #3d4375 0%, #43356e 29%, #4a2565 53%, #4d1e62 100%)",
                    zIndex: 0,
                  }}
                ></div>
                <span className="relative z-10 ">View Full Table</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WoWomenRankings;
