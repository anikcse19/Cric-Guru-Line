import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentary } from './action';
import { imageUrl } from '../../../../config';

const Commentary = () => {
    const { id } = useParams();
    const [commentaryData, setCommentaryData] = useState(null);

    useEffect(() => {
      const loadData = async () => {
        const data = await fetchCommentary(id);
        if (data) {
          setCommentaryData(data);
        }
      };

      if (id) {
        loadData();
      }
    }, [id]);
    console.log("comendatory =", commentaryData);
    const batters = [commentaryData?.score?.str, commentaryData?.score?.n_str]; // striker and non-striker
    const bowler = commentaryData?.score?.bw;
    const partnership = commentaryData?.score?.pt;
    const lastWicket = commentaryData?.score?.lw;
    return (
      <div>
        {commentaryData? (
          <>
            {" "}
            {/* team details */}
            <div className="my-12  ">
              <div className=" flex w-1/2 mb-6">
                <div className=" flex items-center gap-6 w-full">
                  <img
                    src={`${imageUrl}/teams/${commentaryData?.score?.teams?.t1?.l}`}
                    alt={commentaryData?.score?.teams?.t1?.s}
                    className="w-14 h-14 rounded-full border "
                  />
                  <p className=" text-xl font-medium">
                    {commentaryData?.score?.teams?.t1?.s}
                  </p>
                </div>
                <div className=" w-full">
                  <h2 className=" text-xl font-semibold text-gray-800">
                    {commentaryData?.score?.teams?.t1?.i1?.r}-
                    {commentaryData?.score?.teams?.t1?.i1?.w}{" "}
                    <span className="text-base font-medium text-gray-500">
                      {" "}
                      ({commentaryData?.score?.teams?.t1?.i1?.r})
                    </span>
                  </h2>
                </div>
              </div>
              <div className=" flex w-1/2">
                <div className="flex items-center gap-6 w-full">
                  <img
                    src={`${imageUrl}/teams/${commentaryData?.score?.teams?.t2?.l}`}
                    alt={commentaryData?.score?.teams?.t2?.s}
                    className="w-14 h-14 border  rounded-full"
                  />
                  <p className="text-xl font-medium">
                    {commentaryData?.score?.teams?.t2?.s}
                  </p>
                </div>
                <div className=" w-full">
                  <h2 className=" text-xl font-semibold text-gray-800">
                    {commentaryData?.score?.teams?.t1?.i1?.r}-
                    {commentaryData?.score?.teams?.t1?.i1?.w}{" "}
                    <span className="text-base font-medium text-gray-500">
                      {" "}
                      ({commentaryData?.score?.teams?.t1?.i1?.r})
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            {/* current scoreboard table */}
            <div className=" p-4 grid grid-cols-3 gap-4">
              {(commentaryData?.score?.str || commentaryData?.score?.n_str) && (
                <div className="col-span-2 ">
                  {/* Batters */}
                  <table className="w-full text-sm">
                    <thead className="bg-[#3d4375] text-white">
                      <tr>
                        <th className="text-left py-3 px-2">Batter</th>
                        <th>R</th>
                        <th>B</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>SR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {batters.map((batter, idx) => (
                        <tr key={idx} className="bg-gray-50">
                          <td className="text-blue-600 py-3 px-2">
                            {batter?.n} {idx === 0 && "*"}
                          </td>
                          <td className="text-center">{batter?.r}</td>
                          <td className="text-center">{batter?.b}</td>
                          <td className="text-center">{batter?._4}</td>
                          <td className="text-center">{batter?._6}</td>
                          <td className="text-center">{batter?.sr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Bowler */}
                  <table className="w-full text-sm mt-1">
                    <thead className="bg-[#3d4375] text-white">
                      <tr>
                        <th className="text-left py-3 px-2">Bowler</th>
                        <th>O</th>
                        <th>M</th>
                        <th>R</th>
                        <th>W</th>
                        <th>ECO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="text-blue-600 py-3 px-2">{bowler?.n}</td>
                        <td className="text-center">{bowler?.ov}</td>
                        <td className="text-center">{bowler?.mdn}</td>
                        <td className="text-center">{bowler?.r}</td>
                        <td className="text-center">{bowler?.w}</td>
                        <td className="text-center">{bowler?.er}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Recent */}
                  <div className="p-2">
                    <span className="font-semibold">Recent :</span> ...
                  </div>
                </div>
              )}
              {/* Batters & Bowler */}

              {/* Key Stats */}
              {(partnership || lastWicket) && (
                <div className="">
                  <table className="w-full text-base">
                    <thead className="bg-[#3d4375] text-white">
                      <tr>
                        <th className="text-left py-3 px-2">Key Stats</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-2">
                          <p>
                            <span className="font-semibold">Partnership :</span>{" "}
                            {partnership?.r}({partnership?.b})
                          </p>
                          <p className="mt-2">
                            <span className="font-semibold">Last Wicket :</span>{" "}
                            {lastWicket?.n} {lastWicket?.wkI}
                            <br />
                            {lastWicket?.r}({lastWicket?.b}) - {lastWicket?.sc}{" "}
                            in {lastWicket?.ov} ov
                          </p>
                          <p className="mt-2">
                            <span className="font-semibold">Toss :</span> - (-)
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            {/* commentary details per ball by ball */}
            <div className=" p-4 space-y-4">
              {commentaryData?.balls.map((item, idx) => {
                if (item.t === "info") {
                  // Stumps or summary info
                  return (
                    <div className="border-y">
                      <div
                        key={idx}
                        className=" py-6 px-8 w-3/4 leading-8 text-base "
                        dangerouslySetInnerHTML={{ __html: item?.c }}
                      />
                    </div>
                  );
                } else if (item?.t === "ball" && item?.ovsum) {
                  // Over summary table
                  return (
                    <div className=" bg-[#f5f5f5]">
                      <div key={idx} className="  w-2/3">
                        <div className=" w-full justify-between flex px-6 py-3 font-semibold">
                          Over {item?.ovsum?.oN}{" "}
                          <div className=" w-1/2 px-3">
                            <h2>
                              {Array.isArray(item.ovsum?.oS)
                                ? item?.ovsum?.oS.join(" ")
                                : ""}{" "}
                              ({item?.ovsum?.r} RUNS)
                            </h2>
                          </div>
                        </div>
                        <div className="p-2 w-full justify-between border-t flex text-sm">
                          <div className="font-semibold mb-2 text-lg p-3 ">
                            <p>{item?.ovsum?.bT}</p>
                            <p>
                              {item?.ovsum?.sc}-{item?.ovsum?.w}
                            </p>
                          </div>

                          <div className=" border-l w-1/2 text-lg font-medium p-3">
                            <div className=" flex w-full justify-between mb-3">
                              <p className=" w-1/2">{item?.ovsum?.bt?.b1?.n}</p>
                              <p className=" w-1/2">
                                {" "}
                                {item?.ovsum?.bt?.b1?.r}(
                                {item?.ovsum?.bt?.b1?.b})
                              </p>
                            </div>
                            <div className=" flex w-full justify-between items-start mb-3">
                              <p className=" w-1/2">{item?.ovsum?.bt?.b2?.n}</p>
                              <p className=" w-1/2 text-start">
                                {" "}
                                {item?.ovsum?.bt?.b2?.r}(
                                {item?.ovsum?.bt?.b2?.b})
                              </p>
                            </div>
                            <div className=" flex w-full justify-between mb-3">
                              <p className=" w-1/2">{item?.ovsum?.bw?.n}</p>
                              <p className=" w-1/2">
                                {" "}
                                {item?.ovsum?.bw?.ov}-{item?.ovsum?.bw?.mdn}-
                                {item?.ovsum?.bw?.r}-{item?.ovsum?.bw?.w}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else if (item?.t === "ball") {
                  // Ball-by-ball
                  return (
                    <div key={idx} className=" items-start gap-3 border-b py-4">
                      <div className=" flex items-center gap-6">
                        <div className=" font-semibold">
                          {item?.ov}.{item?.b}
                        </div>
                        <div
                          className="text-base"
                          dangerouslySetInnerHTML={{ __html: item?.c }}
                        />
                      </div>
                      {item.v && (
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
                            item?.v === "WK"
                              ? "bg-red-500"
                              : item?.v === "4"
                              ? "bg-green-600"
                              : item?.v === "6"
                              ? "bg-purple-700"
                              : item?.v === "1" ||
                                item?.v === "2" ||
                                item?.v === "3"
                              ? "bg-blue-500"
                              : item?.v === "NB" ||
                                item?.v === "L1" ||
                                item?.v === "B1" ||
                                item?.v === "WD"
                              ? "bg-[#6f7172]"
                              : "bg-[#90a4ae]"
                          }`}
                        >
                          {item?.v}
                        </div>
                      )}
                      {/* <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                         {item?.v === "0" ? "0" : item?.v}
                       </div> */}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </>
        ) : (
          <p className="text-center text-red-500 text-xl font-semibold py-10">
            Match hasn't started yet!
          </p>
        )}
      </div>
    );
};

export default Commentary;