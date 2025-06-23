import React from "react";
import { Link } from "react-router-dom";

const MatchCard = ({
  title,
  time,
  location,
  teamA,
  teamB,
  status = "Upcoming",
}) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-800 mb-2 w-[300px] whitespace-nowrap overflow-hidden truncate">
        {title}
      </h4>
      <div className="bg-white rounded-xl shadow-sm p-4 w-[300px] flex-shrink-0 border border-gray-200">
        <div className="">
          <p className="text-xs text-gray-600 mb-1">
            <span className="font-semibold">{time}</span> • {location}
          </p>

          <div className="space-y-2 mt-3">
            <div className="flex items-center gap-2">
              <img
                src={teamA.logo}
                alt={teamA.name}
                className="w-6 h-6 rounded-full"
              />
              <p className="text-sm text-[#3a64c5] font-medium">{teamA.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={teamB.logo}
                alt={teamB.name}
                className="w-6 h-6 rounded-full"
              />
              <p className="text-sm text-[#3a64c5]  font-medium">
                {teamB.name}
              </p>
            </div>
          </div>

          <div className="border-t mt-4 pt-2 flex gap-4 text-xs font-bold text-gray-800">
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
