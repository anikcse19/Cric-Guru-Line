import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { scorecard } from "./scorecardData";
import { matchData } from "@/components/series/CurrentSeries";

const Scorecard = () => {
  return (
    <div>
      {scorecard.map((team) => (
        <Table>
          <TableHeader className="bg-[#413a71]">
            <TableRow className="hover:bg-[#413a71]">
              <TableHead className="w-1/4 py-4 text-lg font-semibold text-white">
                Batters
              </TableHead>
              <TableHead className="font-semibold text-lg text-white">
                R
              </TableHead>
              <TableHead className="font-semibold text-lg text-white">
                B
              </TableHead>
              <TableHead className="font-semibold text-lg text-white">
                4S
              </TableHead>
              <TableHead className="font-semibold text-lg text-white">
                6S
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {team.innings.batters.map((player, idx) => (
              <TableRow key={idx} className="align-top hover:bg-white ">
                <TableCell className="text-[#413a71] text-lg font-semibold">
                  <div>
                    {player.name} {player.dismissal}
                  </div>
                </TableCell>
                <TableCell className="">{player.runs}</TableCell>
                <TableCell className="">{player.balls}</TableCell>
                <TableCell className="">{player.fours}</TableCell>
                <TableCell className="">{player.sixes}</TableCell>
                <TableCell className="">{player.strike_rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
      <Table>
        <TableHeader className="bg-[#413a71]">
          <TableRow className="hover:bg-[#413a71]">
            <TableHead className="w-1/4 py-4 text-lg font-semibold text-white">
              AUS
            </TableHead>
            <TableHead className="font-semibold text-lg text-white">
              Series Name
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matchData.map((dayBlock, idx) => (
            <TableRow key={idx} className="align-top hover:bg-white ">
              <TableCell className="text-[#413a71] bg-[#e2e2e2] text-lg font-semibold">
                <div>{dayBlock.date}</div>
              </TableCell>
              <TableCell className="space-y-6">
                {dayBlock.matches.map((match, mIdx) => (
                  <div
                    key={mIdx}
                    className="space-y-1 border-b pb-4 last:border-none"
                  >
                    <div className="text-black font-semibold text-base cursor-pointer">
                      {match.title}
                    </div>
                    <div className="text-sm text-gray-500">{match.time}</div>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Scorecard;
