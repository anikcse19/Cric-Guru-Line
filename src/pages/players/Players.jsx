import DownloadApp from "@/components/shared/DownloadApp";
import FollowUs from "@/components/shared/FollowUs";
import TeamList from "@/components/teams/TeamList";
import React, { useEffect, useState } from "react";
import { fetchPlayers } from "./Action";


const Players = () => {
       const [playerData, setPlayersData] = useState([]);
   
       useEffect(() => {
         const loadData = async () => {
           const data = await fetchPlayers();
           if (data) {
             // setSeriesData(data);
            //  const grouped = groupSeriesByMonth(data);
            setPlayersData(data);
           }
         };
   
         loadData();
       }, []);
       console.log("player data =",playerData);
  return (
    <div className=" py-12">
      <h2 className=" text-xl font-semibold">Cricket Players</h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-12">
        <div className=" col-span-3">
          <TeamList data={playerData}></TeamList>
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
