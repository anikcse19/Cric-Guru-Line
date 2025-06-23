import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const MatchCard = ({
  title,
  time,
  location,
  teamA,
  teamB,
  status,
}) => {
  return (
    <div>
      <Link
        to="#"
        className="text-[13px] font-semibold text-black hover:underline hover:text-[#4c549a] w-[300px] whitespace-nowrap overflow-hidden truncate"
      >
        {title}
      </Link>
      {/* add pt-1 if status is Live or pt-4 */}
      <div
        className={clsx(
          "bg-white rounded-xl shadow-sm mt-2 px-4 pb-4 w-[300px] flex-shrink-0 border border-gray-200",
          status === "Live" ? "pt-0.5" : "pt-4"
        )}
      >
        <div className="">
          <div
            className={clsx(
              status === "Live"
                ? " flex items-center text-red-600 font-bold  justify-end text-xs"
                : " hidden"
            )}
          >
            <p className="w-2 h-2 mr-1 rounded-full bg-red-600 animate-pulse inline-block" />
            Live{" "}
          </div>

          <p className="text-[13px]  text-black font-semibold mb-1">
            <span className="">{time}</span> • {location}
          </p>

          <div className="space-y-2 mt-3">
            <div className="flex items-center gap-2">
              <img
                src={teamA.logo}
                alt={teamA.name}
                className="w-6 h-6 rounded-full"
              />
              <p className="text-[13px]  text-[#3a64c5] font-medium">
                {teamA.name}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={teamB.logo}
                alt={teamB.name}
                className="w-6 h-6 rounded-full"
              />
              <p className="text-[13px]  text-[#3a64c5]  font-medium">
                {teamB.name}
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
      <p className="text-[#ffa000] text-sm font-semibold mt-3">{status}</p>
    </div>
  );
};

export default MatchCard;
