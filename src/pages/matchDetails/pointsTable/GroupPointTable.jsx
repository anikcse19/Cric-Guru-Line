import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSortDown, FaSortUp } from "react-icons/fa";
import { imageUrl } from "../../../../config";

const GroupPointTable = ({ teams }) => {
  const [openTeamIndex, setOpenTeamIndex] = useState(null);

  const toggleTeam = (idx) => {
    setOpenTeamIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="mx-auto px-4 py-6">
      <table className="w-full text-sm text-left">
        <thead className="bg-[#3d4375] text-white text-lg">
          <tr>
            <th className="p-4">Teams</th>
            <th>M</th>
            <th>W</th>
            <th>L</th>
            <th>T</th>
            <th>NR</th>
            <th>PTS</th>
            <th>NRR</th>
            <th>For</th>
            <th>Against</th>
            <th></th>
          </tr>
        </thead>
        <tbody className=" px-4">
          {teams.map((team, idx) => (
            <React.Fragment key={idx}>
              <tr
                className={` text-base ${
                  idx % 2 === 0 ? "bg-[#f6f7ff]" : "bg-white"
                }`}
              >
                <td className="flex items-center gap-3 text-xl font-semibold text-[#3d4375] py-6 p-2">
                  <img
                    src={`${imageUrl}/teams/${team.l}`}
                    // src={`/${team.l}`}
                    alt={team.sN}
                    className="w-9 h-9 rounded-full border"
                  />
                  {team.sN}
                </td>
                <td>{team.m}</td>
                <td>{team.w}</td>
                <td>{team.lost}</td>
                <td>{team.t}</td>
                <td>{team.nr}</td>
                <td className="text-xl font-semibold text-[#3d4375]">
                  {team.pt}
                </td>
                <td>{team.nrr}</td>
                <td>
                  {team.f?.r}/{team.f?.ov}
                </td>
                <td>
                  {team.a?.rC}/{team.a?.ovB}
                </td>
                <td
                  className="hover:bg-[#ebedfb] rounded-full py-4 flex items-center  justify-center"
                  onClick={() => toggleTeam(idx)}
                >
                  {openTeamIndex === idx ? (
                    <FaSortUp size="1.5rem" className="" />
                  ) : (
                    <FaSortDown size="1.2rem" />
                  )}
                </td>
              </tr>

              {openTeamIndex === idx && (
                <tr className="bg-gray-50">
                  <td colSpan="11">
                    {/* Expanded Table for tM Matches */}
                    <table className="w-full mt-2 bg-[#eef0f4] text-sm border-t">
                      <thead className="bg-[#d6d6d6] text-base">
                        <tr>
                          <th className="p-3">Opponent</th>

                          <th>Date</th>
                          <th>Result</th>
                          {/* Add more headers if needed */}
                        </tr>
                      </thead>
                      <tbody>
                        {team?.tM?.map((match, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-3">{match?.op?.s}</td>

                            <td className="p-3">
                              {new Date(match?.t * 1000).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "short",
                                  day: "2-digit",
                                  month: "short",
                                }
                              )}
                              <br />
                              {new Date(match?.t * 1000).toLocaleTimeString(
                                "en-US",
                                {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}
                            </td>
                            <td
                              className={`p-1 font-medium ${
                                !match?.rl
                                  ? "text-yellow-600"
                                  : match?.rl?.msg
                                  ? match.rl.msg
                                      .toLowerCase()
                                      .includes("loss") ||
                                    match.rl.msg.toLowerCase().includes("lost")
                                    ? "text-red-600"
                                    : "text-green-600"
                                  : "text-green-600"
                              }`}
                            >
                              {!match?.rl
                                ? "Upcoming"
                                : match?.rl?.msg
                                ? match.rl.msg
                                : `${match.rl.wT} won by ${match.rl.sM}`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className=" my-8 text-[15px] px-10">
        <div className="grid grid-cols-3  gap-4">
          <p>
            <span className="font-bold">M:</span> The number of matches played
          </p>
          <p>
            <span className="font-bold">W:</span> The number of matches won
          </p>
          <p>
            <span className="font-bold">L:</span> The number of matches lost
          </p>
          <p>
            <span className="font-bold">T:</span> The number of matches tied
          </p>
          <p>
            <span className="font-bold">NR:</span> The number of matches
            abandoned
          </p>
          <p>
            <span className="font-bold">PTS:</span> Number of points awarded
          </p>
        </div>
        <div className=" my-4">
          <p>
            <span className="font-bold">NRR:</span> Net run rate
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">For:</span> The total runs scored by the
            team/The total no. of overs played
          </p>
        </div>
        <div className=" my-4">
          <p>
            <span className="font-bold">Against:</span> The total runs conceded
            by the team/The total no. of overs bowled
          </p>
        </div>
      </div>
      {/* Legends */}
    </div>
  );
};

export default GroupPointTable;
