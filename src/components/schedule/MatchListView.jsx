import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const MatchListView = ({matchData}) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-1/4 font-semibold text-gray-700">
              Date
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Match Detail
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matchData.map((dayBlock, idx) => (
            <TableRow key={idx} className="align-top hover:bg-white ">
              <TableCell className="text-purple-700 font-semibold">
                <div>{dayBlock.date}</div>
                <div className="text-sm text-gray-500">{dayBlock.day}</div>
              </TableCell>
              <TableCell className="space-y-6">
                {dayBlock.matches.map((match, mIdx) => (
                  <div
                    key={mIdx}
                    className="space-y-1 border-b pb-4 last:border-none"
                  >
                    <div className="text-blue-600 font-medium hover:underline cursor-pointer">
                      {match.title}
                    </div>
                    <div className="text-sm text-gray-600">{match.venue}</div>
                    <div className="flex flex-col  w-[40%] gap-6 my-2 bg-gray-50 p-3 rounded-md">
                      {match.teams.map((team, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2">
                          <img
                            src={team.logo}
                            alt={team.name}
                            className="w-6 h-6"
                          />
                          <span className="text-sm">{team.name}</span>
                        </div>
                      ))}
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

export default MatchListView;