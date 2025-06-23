import React from "react";
import MatchCard from "./MatchCard";
import "./matchStylee.css"
// Dummy logo
const dummyLogo =
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

const matches = [
  {
    title: "Madhya Pradesh League 2025, 1st Semi-Final",
    time: "03:30 PM, 23-Jun",
    location: "Gwalior, India",
    teamA: { name: "Rewa Jaguars", logo: dummyLogo },
    teamB: { name: "Bhopal Leopards", logo: dummyLogo },
  },
  {
    title: "Tamil Nadu Premier League 2025, 21st Match",
    time: "07:45 PM, 23-Jun",
    location: "Tirunelveli, India",
    teamA: { name: "Chepauk Super Gillies", logo: dummyLogo },
    teamB: { name: "Trichy Grand Cholas", logo: dummyLogo },
  },
  {
    title: "T20 Match",
    time: "08:00 PM, 23-Jun",
    location: "Barbados, West Indies",
    teamA: { name: "West Indies Women", logo: dummyLogo },
    teamB: { name: "South Africa Women", logo: dummyLogo },
  },
  {
    title: "Madhya Pradesh League 2025, 2nd Semi-Final",
    time: "08:00 PM, 23-Jun",
    location: "Gwalior, India",
    teamA: { name: "TBC", logo: dummyLogo },
    teamB: { name: "TBC", logo: dummyLogo },
  },
  {
    title: "Madhya Pradesh League 2025, 2nd Semi-Final",
    time: "08:00 PM, 23-Jun",
    location: "Gwalior, India",
    teamA: { name: "TBC", logo: dummyLogo },
    teamB: { name: "TBC", logo: dummyLogo },
  },
  {
    title: "Madhya Pradesh League 2025, 2nd Semi-Final",
    time: "08:00 PM, 23-Jun",
    location: "Gwalior, India",
    teamA: { name: "TBC", logo: dummyLogo },
    teamB: { name: "TBC", logo: dummyLogo },
  },
];

const MatchList = () => {
  return (
    <div className=" py-6 px-4">
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        
      >
        {matches.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
