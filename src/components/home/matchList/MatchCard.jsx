import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../../../../config";

const MatchCard = ({match}) => {
  const formatMatchTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds

    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const datePart = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });

    return `${time}, ${datePart}`;
  };

  return (
    <div className=" w-[400px]">
      <Link
        to="/#"
        className="text-[13px] font-semibold text-black hover:underline hover:text-[#4c549a] w-[400px] whitespace-nowrap overflow-hidden truncate"
      >
        {match?.sr},{match?.n}
      </Link>
      {/* add pt-1 if status is Live or pt-4 */}
      <Link
        to={`/match-details/commentary/${match?.key}`}
        className=" cursor-pointer"
      >
        <div
          className={clsx(
            "bg-white rounded-xl shadow-sm mt-2 px-4 pb-4 w-[330px] flex-shrink-0 border border-gray-200",
            status === "Live" ? "pt-0.5" : "pt-4"
          )}
        >
          <div className="">
            {!match?.rl && match?.isPt && (
              <div className="flex items-center text-red-600 font-bold justify-end text-xs">
                <p className="w-2 h-2 mr-1 rounded-full bg-red-600 animate-pulse inline-block" />
                Live
              </div>
            )}

            <p className="text-[13px]  text-black font-semibold mb-1">
              <span className="">{formatMatchTime(match?.t)}</span> •{" "}
              {match?.g?.split(" ").slice(-2).join(" ")}
            </p>

            <div className="space-y-2 mt-3">
              <div className="flex items-center gap-12">
                <div className=" flex items-center gap-2">
                  <img
                    src={`${imageUrl}/teams/${match?.teams?.t1?.l}`}
                    // src={dummyLogo}
                    alt={match?.teams?.t1?.k}
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-[13px]  text-[#3a64c5] font-medium">
                    {match?.teams?.t1?.k}
                  </p>
                </div>

                <p className="text-[13px]  text-[#3a64c5]  font-medium">
                  {match?.teams?.t1?.sc}
                </p>
              </div>
              <div className="flex items-center gap-12">
                <div className=" flex items-center gap-2">
                  <img
                    src={`${imageUrl}/teams/${match?.teams?.t2?.l}`}
                    alt={match?.teams?.t2?.k}
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-[13px]  text-[#3a64c5]  font-medium">
                    {match?.teams?.t2?.k}
                  </p>
                </div>

                <p className="text-[13px]  text-[#3a64c5]  font-medium">
                  {match?.teams?.t2?.sc}
                </p>
              </div>
            </div>

            <div className="border-t mt-4 pt-2 flex gap-4 text-[13px]  font-bold text-gray-800">
              <Link to={"/"} className="cursor-pointer ">
                Series
              </Link>
              <Link to={"/"} className="cursor-pointer ">
                Table
              </Link>
              <Link to={"/"} className="cursor-pointer">
                Schedule
              </Link>
              <Link to={"/"} className="cursor-pointer">
                News
              </Link>
            </div>
          </div>
        </div>
      </Link>

      <p
        className={`text-sm font-semibold mt-3 ${
          match?.rl?.msg === "Abandoned"
            ? "text-red-500"
            : match?.rl?.msg
            ? "text-green-500"
            : "text-yellow-500"
        }`}
      >
        {match?.rl?.msg ? match.rl.msg : "Upcoming"}
      </p>
    </div>
  );
};

export default MatchCard;
