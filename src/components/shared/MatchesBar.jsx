import React from "react";
import { ChevronDown } from "lucide-react"; // optional icon library
import { FaSortDown } from "react-icons/fa";

const matches = [
  "Rewa vs Bhopal",
  "Chepauk vs Trichy",
  "WIW vs RSAW",
  "Chambal vs Gwalior",
  "Lyca vs Tamizhans",
];

export default function MatchesBar() {
  return (
    <div className="hidden md:flex md:flex-wrap items-center justify-between bg-white shadow px-4 py-2 ">
      <span className="font-bold text-sm mr-4">MATCHES</span>
      {matches.map((match, idx) => (
        <span key={idx} className="flex text-sm  items-center mr-6 ">
          {match}
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-[#ffa000] font-semibold">Upcoming</span>
        </span>
      ))}
      <div className=" flex items-center font-bold text-sm cursor-pointer">
        All <FaSortDown size={16} className="ml-1" />
      </div>
    </div>
  );
}
