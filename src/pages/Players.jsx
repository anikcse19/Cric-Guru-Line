import DownloadApp from "@/components/shared/DownloadApp";
import FollowUs from "@/components/shared/FollowUs";
import TeamList from "@/components/teams/TeamList";
import React from "react";

const players = [
  {
    name: "Virat Kohli",
    country: "India",
    image: "/shakib.jpg",
  },
  {
    name: "Joe Root",
    country: "England",
    image: "/shakib.jpg",
  },
  {
    name: "Steve Smith",
    country: "Australia",
    image: "/shakib.jpg",
  },
  {
    name: "Kane Williamson",
    country: "New Zealand",
    image: "/shakib.jpg",
  },
  {
    name: "Babar Azam",
    country: "Pakistan",
    image: "/babar.webp",
  },
  {
    name: "Shakib Al Hasan",
    country: "Bangladesh",
    image: "/shakib.jpg",
  },
  {
    name: "Rashid Khan",
    country: "Afghanistan",

    image: "/babar.webp",
  },
  {
    name: "Ben Stokes",
    country: "England",
    image: "/babar.webp",
  },
];

const Players = () => {
  return (
    <div className=" py-12">
      <h2 className=" text-xl font-semibold">Cricket Players</h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-12">
        <div className=" col-span-3">
          <TeamList data={players}></TeamList>
        </div>
        <div className="col-span-1 space-y-4">
          <DownloadApp></DownloadApp>
          <FollowUs></FollowUs>
        </div>
      </div>
    </div>
  );
};

export default Players;
