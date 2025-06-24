import { PollCard } from '@/components/common/PollCard';
import DownloadApp from '@/components/shared/DownloadApp';
import React from 'react';
const pollsData = [
  {
    id: 1,
    league: "Tamil Nadu Premier League 2025",
    match: "22nd Match | 24 Jun 2025 | 07:45 PM",
    options: ["Lyca Kovai Kings", "IDream Tiruppur Tamizhans"],
  },
  {
    id: 2,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
  {
    id: 3,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
  {
    id: 4,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
  {
    id: 4,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
  {
    id: 3,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
  {
    id: 4,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
  {
    id: 4,
    league: "Major League Cricket 2025",
    match: "15th Match | 25 Jun 2025 | 06:00 AM",
    options: ["Texas Super Kings", "Los Angeles Knight Riders"],
  },
];
const Polls = () => {
    return (
      <div className=" py-12">
        <h2 className=" text-xl uppercase font-semibold">Top Videos</h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-6">
          <div className=" col-span-3 bg-white px-4 py-4 rounded-xl">
            <div className="flex flex-col md:pb-4   md:flex-row overflow-x-auto gap-4 mb-6">
              {pollsData.map((poll) => (
                <PollCard key={poll.id} poll={poll} />
              ))}
            </div>
    
          </div>
          <div className="col-span-1  space-y-4">
            <DownloadApp></DownloadApp>
    
          </div>
        </div>
      </div>
    );
};

export default Polls;