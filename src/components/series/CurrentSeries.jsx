import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { IoSearchSharp } from "react-icons/io5";;
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { fetchRecentFutureSeries } from "@/pages/series/Action";
import { groupSeriesByMonth } from "@/pages/series/formatSeriesData";
import { Link } from "react-router-dom";
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
const categories = ["International", "T20 Leagues", "Domestic & Others"];
const CurrentSeries = () => {
    const [activeCategory, setActiveCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [seriesData, setSeriesData] = useState([]);

    useEffect(() => {
      const loadData = async () => {
        const data = await fetchRecentFutureSeries();
        if (data) {
          // setSeriesData(data);
          const grouped = groupSeriesByMonth(data);
          setSeriesData(grouped);
        }
      };

      loadData();
    }, []);
console.log('series data =',seriesData)
    const isResetActive =
      activeCategory === "" && searchTerm === "" && selectedYear === "";

    const handleReset = () => {
      setActiveCategory("");
      setSearchTerm("");
      setSelectedYear("");
    };
  return (
    <div>
      <div className="flex flex-wrap items-center my-12 gap-4 border-b border-gray-200 pb-4">
        {/* Reset Button */}
        <button
          onClick={handleReset}
          className={cn(
            "px-4 py-2 text-base font-semibold flex items-center gap-2 transition-all",
            isResetActive
              ? " text-gray-400"
              : "text-[#6338b0] hover:bg-[#f9f7fc]"
          )}
        >
          {/* {isResetActive && <Check className="w-4 h-4" strokeWidth={3} />} */}
          Reset
        </button>

        {/* Vertical divider */}
        <div className="w-px h-5 bg-gray-300" />

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full border text-sm font-medium flex items-center gap-2 transition-all",
                activeCategory === cat
                  ? "bg-[#6338b0] text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              )}
            >
              {activeCategory === cat && (
                <Check className="w-4 h-4" strokeWidth={3} />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#413a71]"
          />
          <span className="absolute  p-2 rounded-r-full right-1 top-1 text-gray-500">
            <IoSearchSharp />
          </span>
        </div>

        {/* Year Select */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#413a71]"
        >
          <option value="">Select year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
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
          {seriesData.map((dayBlock, idx) => (
            <TableRow key={idx} className="align-top hover:bg-white">
              <TableCell className="text-[#413a71] bg-[#e2e2e2] text-lg font-semibold">
                <div>{dayBlock.date}</div>
              </TableCell>
              <TableCell className="space-y-6">
                {dayBlock.matches.map((match, mIdx) => (
                  <div
                    key={mIdx}
                    className="space-y-1 border-b pb-4 last:border-none"
                  >
                    <Link to={`/${match?.key}/overview`}>
                      <div
                        // onClick={() => handleRedirect(match.key)}
                        className="text-black font-semibold text-base cursor-pointer hover:text-[#413a71] transition"
                      >
                        {match.n}
                      </div>
                    </Link>

                    <div className="text-sm text-gray-500">
                      {match.formattedTime}
                    </div>

                    {/* Optional: show live status */}
                    {/* <div className="text-xs mt-1 font-semibold">
                      <span
                        className={`${
                          match.status === "L"
                            ? "text-green-600"
                            : match.status === "U"
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }`}
                      >
                        {match.status === "L"
                          ? "Live"
                          : match.status === "U"
                          ? "Upcoming"
                          : "Completed"}
                      </span>
                      {match.isPt && (
                        <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                          Primary
                        </span>
                      )}
                    </div> */}
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

export default CurrentSeries;
