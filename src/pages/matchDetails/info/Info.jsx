import React from 'react';
const matchInfo = {
  team1: {
    name: "Munster Reds",
    logo: "/team_logos/mur.png",
  },
  team2: {
    name: "Northern Knights",
    logo: "/team_logos/nrks.png",
  },
  series: "Ireland Inter Provincial T20 Trophy 2025",
  matchTitle: "Munster Reds vs Northern Knights, 21st Match",
  dateTime: "Wed, 09 Jul, 03:45 PM your time",
  venue: "Mardyke Cricket Club, Cork, Ireland",
  toss: "Northern Knights opt to bowl",
  umpires: "-",
  thirdUmpire: "-",
  referee: "-",
};
const Info = () => {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded p-4 space-y-4">
        {/* Teams row */}
        <div className="flex justify-between items-center text-center">
          <div>
            <img
              src={matchInfo.team1.logo}
              alt={matchInfo.team1.name}
              className="w-14 h-14 mx-auto"
            />
            <p className="text-blue-600 font-medium">{matchInfo.team1.name}</p>
          </div>

          <div className="text-sm font-semibold bg-black text-white px-3 py-1 rounded-full">
            vs
          </div>

          <div>
            <img
              src={matchInfo.team2.logo}
              alt={matchInfo.team2.name}
              className="w-14 h-14 mx-auto"
            />
            <p className="text-blue-600 font-medium">{matchInfo.team2.name}</p>
          </div>
        </div>

        {/* Series name */}
        <p className="text-center text-blue-600 font-semibold">
          {matchInfo.series}
        </p>

        {/* Match details */}
        <div className="divide-y border rounded text-sm">
          <div className="flex justify-between p-3">
            <span className="font-medium">Series:</span>
            <span>{matchInfo.series}</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="font-medium">Match:</span>
            <span>{matchInfo.matchTitle}</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="font-medium">Date & Time:</span>
            <span>{matchInfo.dateTime}</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="font-medium">Venue :</span>
            <span>{matchInfo.venue}</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="font-medium">Toss:</span>
            <span>{matchInfo.toss}</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="font-medium">Umpires:</span>
            <span>{matchInfo.umpires}</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="font-medium">Third Umpire:</span>
            <span>{matchInfo.thirdUmpire}</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="font-medium">Match Referee:</span>
            <span>{matchInfo.referee}</span>
          </div>
        </div>
      </div>
    );
};

export default Info;