import DownloadApp from "@/components/shared/DownloadApp";
import FollowUs from "@/components/shared/FollowUs";
import TeamList from "@/components/teams/TeamList";
import React, { useEffect, useState } from "react";
import { fetchTeam } from "./Action";
// const teams = [
//   { name: "India", image: "https://flagcdn.com/in.svg" },
//   { name: "England", image: "https://flagcdn.com/gb-eng.svg" },
//   { name: "Australia", image: "https://flagcdn.com/au.svg" },
//   { name: "South Africa", image: "https://flagcdn.com/za.svg" },
//   { name: "West Indies", image: "https://flagcdn.com/jm.svg" },
//   { name: "India Women", image: "https://flagcdn.com/in.svg" },
//   { name: "India", image: "https://flagcdn.com/in.svg" },
//   { name: "England", image: "https://flagcdn.com/gb-eng.svg" },
//   { name: "Australia", image: "https://flagcdn.com/au.svg" },
//   { name: "South Africa", image: "https://flagcdn.com/za.svg" },
//   { name: "West Indies", image: "https://flagcdn.com/jm.svg" },
//   { name: "India Women", image: "https://flagcdn.com/in.svg" },
//   { name: "Pakistan", image: "https://flagcdn.com/pk.svg" },
//   { name: "Bangladesh", image: "https://flagcdn.com/bd.svg" },
//   { name: "Sri Lanka", image: "https://flagcdn.com/lk.svg" },
//   { name: "New Zealand", image: "https://flagcdn.com/nz.svg" },
//   { name: "Afghanistan", image: "https://flagcdn.com/af.svg" },
//   { name: "Ireland", image: "https://flagcdn.com/ie.svg" },
//   { name: "Scotland", image: "https://flagcdn.com/gb-sct.svg" },
//   { name: "Nepal", image: "https://flagcdn.com/np.svg" },
// ];
const Teams = () => {
     const [teamsData, setTeamsData] = useState([]);
 
     useEffect(() => {
       const loadData = async () => {
         const data = await fetchTeam();
         if (data) {
           // setSeriesData(data);
          //  const grouped = groupSeriesByMonth(data);
           setTeamsData(data);
         }
       };
 
       loadData();
     }, []);
     console.log(teamsData)
  return (
    <div className=" py-12">
      <h2 className=" text-xl font-semibold">Cricket Teams</h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-12">
        <div className=" col-span-3">
          <TeamList data={teamsData}></TeamList>
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
