import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { fetchMatchLists } from "../home/matchList/Action";

export default function MatchesBar() {
  const [matches, setMatches] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await fetchMatchLists();
        if (data) {
          // Priority: Live (1) > Upcoming (0) > Finished (2)
          const priority = { 1: 0, 0: 1, 2: 2 };
          const sorted = [...data].sort(
            (a, b) => priority[a.st] - priority[b.st]
          );
          setMatches(sorted);
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadMatches();
  }, []);

  const getMatchStatus = (match) => {
    switch (match.st) {
      case 1:
        return { text: "Live", color: "text-red-500" };
      case 0:
        return { text: "Upcoming", color: "text-[#ffa000]" }; // orange
      case 2:
        return { text: "Finished", color: "text-green-600" };
      default:
        return { text: "Unknown", color: "text-gray-500" };
    }
  };

  return (
    <div className="bg-white shadow px-4 py-2">
      {/* Top Matches Bar */}
      <div className="hidden md:flex md:flex-wrap items-center justify-between">
        <span className="font-bold text-sm mr-4">MATCHES</span>
        {matches.slice(0, 4).map((match, idx) => {
          const status = getMatchStatus(match);
          return (
            <span key={idx} className="flex text-sm items-center mr-6">
              {match?.teams?.t1?.s} vs {match?.teams?.t2?.s}
              <span className="mx-1 text-gray-400">•</span>
              <span className={`${status.color} font-semibold`}>
                {status.text}
              </span>
            </span>
          );
        })}
        <div
          onClick={() => setShowAll(!showAll)}
          className="flex items-center font-bold text-sm cursor-pointer"
        >
          All <FaSortDown size={16} className="ml-1" />
        </div>
      </div>

      {/* Expanded Match List */}
      {showAll && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-4">
          {matches.map((match, idx) => {
            const status = getMatchStatus(match);
            return (
              <div key={idx}>
                <p className="text-xs text-gray-500">{match.sr}</p>
                <p className="text-sm font-semibold">
                  {match.teams?.t1?.n} vs {match.teams?.t2?.n}, {match.n}{" "}
                  <span className={`${status.color} font-semibold ml-1`}>
                    {status.text}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
