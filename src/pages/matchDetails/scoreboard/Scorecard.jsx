import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";

// import { matchData } from "@/components/series/CurrentSeries";
import { useParams } from "react-router-dom";
import { fetchScoreboard } from "./Action";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { scorecard } from "@/components/matchDetails/match-scorecard/scorecardData";

const Scorecard = () => {
  const { id } = useParams();
  const [scoreboardData, setScoreboardData] = useState(null);
  const [openInnings, setOpenInnings] = useState([true, false]);
  const toggleInnings = (idx) => {
    setOpenInnings((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchScoreboard(id);
      if (data) {
        setScoreboardData(data);
      }
    };

    if (id) {
      loadData();
    }
  }, [id]);
  console.log("scoreddata= ", scoreboardData);
  return (
    <div className="mx-auto space-y-4">
      {scoreboardData?.innO?.[0]?.bt && scoreboardData?.innO?.[0]?.bw ? (
        <>
          {" "}
          {scoreboardData?.innO.map((inn, idx) => (
            <div key={idx} className="border rounded overflow-hidden">
              {/* Header bar */}
              <div
                className="bg-[#413970] text-white text-lg px-4 py-4 flex justify-between cursor-pointer"
                onClick={() => toggleInnings(idx)}
              >
                <div className="font-semibold">{inn?.tI?.s}</div>
                <div className=" flex items-center gap-12">
                  <div className="font-semibold">
                    {inn?.tI?.r}-{inn?.tI?.w} ({inn?.tI?.ov})
                  </div>
                  <div>
                    {openInnings[idx] ? (
                      <FaAngleUp size={"1.5rem"} />
                    ) : (
                      <FaAngleDown size={"1.5rem"} />
                    )}
                  </div>
                </div>
              </div>

              {/* Collapsible content */}
              {openInnings[idx] && (
                <div className="p-4 bg-white space-y-6">
                  {/* Batting */}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Batters</h3>
                    <table className="w-full text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-2 py-1">Name</th>
                          <th className="px-2 py-4">R</th>
                          <th className="px-2 py-1">B</th>
                          <th className="px-2 py-1">4s</th>
                          <th className="px-2 py-1">6s</th>
                          <th className="px-2 py-1">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inn?.bt.map((p, i) => (
                          <tr key={i} className="border-b  last:border-none">
                            <td className="px-2 flex  py-1 ">
                              <div className="text-blue-600 w-full">{p?.n}</div>
                              {p?.outS && (
                                <div className="text-red-600 w-full">
                                  {p?.outS}
                                </div>
                              )}
                            </td>
                            <td className="px-2 text-center   py-1">{p?.r}</td>
                            <td className="px-2 text-center  py-4">{p?.b}</td>
                            <td className="px-2 text-center  py-1">{p?._4}</td>
                            <td className="px-2 text-center  py-1">{p?._6}</td>
                            <td className="px-2 text-center py-1">{p?.sr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="text-gray-800 text-lg mt-2">
                      Extras {inn?.tI?.ex}( {inn?.tI?.exI})
                    </div>
                    <div className="font-semibold mt-1">
                      Total {inn?.tI?.r} - {inn?.tI?.w} , Run Rate: {inn?.tI?.w}
                      man pai nai
                    </div>

                    {inn?.yB && (
                      <div className="text-lg text-gray-700 mt-1">
                        Did not bat:{" "}
                        <span className="text-blue-600">
                          {inn?.yB.map((player) => (
                            <span key={player?.k} className="text-blue-600">
                              {player?.n} ,
                              {/* {index !== innings.yB.length - 1 ? ", " : ""} */}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bowling */}
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Bowlers</h3>
                    <table className="w-full text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-2 py-4">Name</th>
                          <th className="px-2 py-1">O</th>
                          <th className="px-2 py-1">M</th>
                          <th className="px-2 py-1">R</th>
                          <th className="px-2 py-1">W</th>
                          <th className="px-2 py-1">ER</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inn?.bw ? (
                          <>
                            {" "}
                            {inn?.bw.map((b, i) => (
                              <tr key={i} className="border-b last:border-none">
                                <td className="px-2 py-1 text-blue-600">
                                  {b?.n}
                                </td>
                                <td className="px-2 text-center py-4">
                                  {b?.ov}
                                </td>
                                <td className="px-2 text-center py-1">
                                  {b?.mdn}
                                </td>
                                <td className="px-2 text-center py-1">
                                  {b?.r}
                                </td>
                                <td className="px-2 text-center py-1">
                                  {b?.w}
                                </td>
                                <td className="px-2 text-center py-1">
                                  {b?.er}
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Fall of Wickets */}
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">
                      Fall of Wickets
                    </h3>
                    <table className="w-full text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-2 py-4">Batter</th>
                          <th className="px-2 py-1">Score</th>
                          <th className="px-2 py-1">Over</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inn?.fow.map((f, i) => (
                          <tr key={i} className="border-b last:border-none">
                            <td className="px-2 py-1 text-blue-600">{f?.n}</td>
                            <td className="px-2 text-center py-4">{f?.sc}</td>
                            <td className="px-2 text-center py-1">{f?.ov}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          <p className="text-center text-red-500 text-xl font-semibold py-10">
            Match hasn't started yet!
          </p>
        </>
      )}
    </div>
  );
};

export default Scorecard;
