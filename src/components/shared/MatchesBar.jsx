import React from "react";
import { ChevronDown } from "lucide-react"; // optional icon library

const matches = [
  "Rewa vs Bhopal",
  "Chepauk vs Trichy",
  "WIW vs RSAW",
  "Chambal vs Gwalior",
  "Lyca vs Tamizhans",
];

export default function MatchesBar() {
  return (
    <div className="hidden md:flex items-center justify-between bg-white shadow px-4 py-2 overflow-x-auto whitespace-nowrap">
      <span className="font-bold mr-4">MATCHES</span>
      {matches.map((match, idx) => (
        <span key={idx} className="flex items-center mr-6 text-sm">
          {match}
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-[#ffa000] text-sm font-semibold">Upcoming</span>
        </span>
      ))}
      <div className=" flex items-center font-bold cursor-pointer">
        All <ChevronDown size={16} className="ml-1" />
      </div>
    </div>
  );
}
