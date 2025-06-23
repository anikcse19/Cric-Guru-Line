import DownloadApp from "@/components/shared/DownloadApp";
import FollowUs from "@/components/shared/FollowUs";
import TeamList from "@/components/teams/TeamList";
import React from "react";
const teams = [
  { name: "India", image: "https://flagcdn.com/in.svg" },
  { name: "England", image: "https://flagcdn.com/gb-eng.svg" },
  { name: "Australia", image: "https://flagcdn.com/au.svg" },
  { name: "South Africa", image: "https://flagcdn.com/za.svg" },
  { name: "West Indies", image: "https://flagcdn.com/jm.svg" },
  { name: "India Women", image: "https://flagcdn.com/in.svg" },
  { name: "India", image: "https://flagcdn.com/in.svg" },
  { name: "England", image: "https://flagcdn.com/gb-eng.svg" },
  { name: "Australia", image: "https://flagcdn.com/au.svg" },
  { name: "South Africa", image: "https://flagcdn.com/za.svg" },
  { name: "West Indies", image: "https://flagcdn.com/jm.svg" },
  { name: "India Women", image: "https://flagcdn.com/in.svg" },
  {
    name: "IPL Archive Stats",
    image: "https://upload.wikimedia.org/wikipedia/en/2/25/IPL_2022_logo.png",
  },
  {
    name: "IPL",
    image: "https://upload.wikimedia.org/wikipedia/en/2/25/IPL_2022_logo.png",
  },
];
const Teams = () => {
  return (
    <div className=" py-12">
      <h2 className=" text-xl font-semibold">Cricket Teams</h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-12">
        <div className=" col-span-3">
          <TeamList data={teams}></TeamList>
        </div>
        <div className="col-span-1 space-y-4">
          <DownloadApp></DownloadApp>
          <FollowUs></FollowUs>
        </div>
      </div>
    </div>
  );
};

export default Teams;
