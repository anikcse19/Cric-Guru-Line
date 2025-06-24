import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
const MatchDetailView = ({ matchData }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-1/3 font-semibold text-gray-700">
              Series
            </TableHead>
            <TableHead className="w-1/2 font-semibold text-gray-700">
              Match Detail
            </TableHead>
            <TableHead className="w-1/6 font-semibold text-gray-700">
              Time
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matchData.map((day, dIdx) =>
            day.matches.map((match, mIdx) => (
              <TableRow key={`${dIdx}-${mIdx}`}>
                {/* Series */}
                <TableCell className="text-[4c549a] font-medium">
                  <h2>{match.series}</h2>
                  {/* <h2>{date}</h2>
                  <h2>{day}</h2> */}
                </TableCell>

                {/* Match Detail */}
                <TableCell>
                  <h2 className="">{match.title}</h2>
                  <div className="text-sm text-gray-600 mb-2">
                    {match.venue}
                  </div>
                </TableCell>

                {/* Time */}
                <TableCell className="text-sm text-gray-600">
                  {match.time}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MatchDetailView;