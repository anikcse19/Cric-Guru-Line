import React, { useState } from "react";
import MatchListView from "./MatchListView";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import MatchDetailView from "./MatchDetailView";
// matchData.ts (mock data)
export const matchData = [
  {
    date: "Tue, 05 Aug 2025",
    day: "Tuesday",
    matches: [
      {
        series: "Bengal Pro T20 League 2025",
        title: "The Hundred Mens Competition 2025, 1st Match",
        time: "11:30 pm your time (05 Aug, 5:30 PM GMT)",
        venue: "Lord's, London, England",
        teams: [
          { name: "London Spirit", logo: "https://flagcdn.com/in.svg" },
          { name: "Oval Invincibles", logo: "https://flagcdn.com/in.svg" },
        ],
      },
      {
        series: "Bengal Pro T20 League 2025",
        title: "The Hundred Womens Competition 2025, 1st Match",
        time: "7:45 pm your time (05 Aug, 1:45 PM GMT)",
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
    date: "Wed, 06 Aug 2025",
    day: "Wednesday",
    matches: [
      {
        title: "The Hundred Mens Competition 2025, 2nd Match",
        time: "11:30 pm your time (06 Aug, 5:30 PM GMT)",
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

const MatchTypeList = () => {
  const [isDetailsView, setIsDetailsView] = useState(false);
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 ">
      <div className=" col-span-3 lg:order-1 order-2">
        {isDetailsView ? (
          <MatchDetailView matchData={matchData}></MatchDetailView>
        ) : (
          <MatchListView matchData={matchData}></MatchListView>
        )}
      </div>
      {/* 2nd div */}
      <div className=" col-span-1 lg:order-2 order-1">
        <div className="flex items-center space-x-3 mb-6">
          <Label htmlFor="view-toggle" className="text-gray-700 font-medium">
            {isDetailsView ? "Details View" : "List View"}
          </Label>
          <Switch
            id="view-toggle"
            checked={isDetailsView}
            onCheckedChange={setIsDetailsView}
          />
        </div>
        <div className="relative w-max rounded-lg">
          <input
            className="peer rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
            type="text"
            placeholder=""
            id="navigate_ui_input_33"
          />

          <label
            className="absolute -top-2 left-2 rounded-md font-bold  px-2 text-base text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-sm peer-focus:text-[#4c549a]"
            htmlFor="navigate_ui_input_33"
          >
            Teams
          </label>
        </div>
      </div>
    </div>
  );
};

export default MatchTypeList;
