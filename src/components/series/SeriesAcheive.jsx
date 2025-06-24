import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
export const matchData = [
  {
    date: "Aug 2025",
    day: "Tuesday",
    matches: [
      {
        series: "Bengal Pro T20 League 2025",
        title: "The Hundred Mens Competition 2025, 1st Match",
        time: "15 Feb - 30 Mar 2027",
        venue: "Lord's, London, England",
        teams: [
          { name: "London Spirit", logo: "https://flagcdn.com/in.svg" },
          { name: "Oval Invincibles", logo: "https://flagcdn.com/in.svg" },
        ],
      },
    ],
  },
  {
    date: "Aug 2025",
    day: "Tuesday",
    matches: [
      {
        series: "Bengal Pro T20 League 2025",
        title: "The Hundred Womens Competition 2025, 1st Match",
        time: "15 Feb - 30 Mar 2027",
        venue: "Lord's, London, England",
        teams: [
          {
            name: "London Spirit Women",
            logo: "https://flagcdn.com/in.svg",
          },
          {
            name: "Oval Invincibles Women",
            logo: "https://flagcdn.com/in.svg",
          },
        ],
      },
      {
        series: "Bengal Pro T20 League 2025",
        title: "The Hundred Womens Competition 2025, 1st Match",
        time: "15 Feb - 30 Mar 2027",
        venue: "Lord's, London, England",
        teams: [
          {
            name: "London Spirit Women",
            logo: "https://flagcdn.com/in.svg",
          },
          {
            name: "Oval Invincibles Women",
            logo: "https://flagcdn.com/in.svg",
          },
        ],
      },
    ],
  },
  {
    date: "Feb 2025",
    day: "Wednesday",
    matches: [
      {
        title: "The Hundred Mens Competition 2025, 2nd Match",
        time: "15 Feb - 30 Mar 2027",
        venue: "Emirates Old Trafford, Manchester, England",
        teams: [
          {
            name: "Manchester Originals",
            logo: "https://flagcdn.com/in.svg",
          },
          { name: "Southern Brave", logo: "https://flagcdn.com/in.svg" },
        ],
      },
    ],
  },
];
const SeriesAcheive = () => {
    return (
      <div>
        <div className=" flex justify-end mb-6">
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Year</SelectLabel>
                <SelectItem value="2024">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader className="bg-[#413a71]">
            <TableRow className="hover:bg-[#413a71]">
              <TableHead className="w-1/4 py-4 text-lg font-semibold text-white">
                Month
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

export default SeriesAcheive;