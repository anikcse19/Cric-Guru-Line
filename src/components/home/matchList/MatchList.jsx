import React, { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import "./matchStylee.css"
import { BASE_URL } from "../../../../config";
// Dummy logo


// const matchess = [
//   {
//     id: "1",
//     title: "Madhya Pradesh League 2025, 1st Semi-Final",
//     time: "03:30 PM, 23-Jun",
//     location: "Gwalior, India",
//     teamA: { name: "Rewa Jaguars", logo: dummyLogo },
//     teamB: { name: "Bhopal Leopards", logo: dummyLogo },
//     status: "Upcoming",
//   },
//   {
//     id: "2",
//     title: "Tamil Nadu Premier League 2025, 21st Match",
//     time: "07:45 PM, 23-Jun",
//     location: "Tirunelveli, India",
//     teamA: { name: "Chepauk Super Gillies", logo: dummyLogo },
//     teamB: { name: "Trichy Grand Cholas", logo: dummyLogo },
//     status: "Live",
//   },
//   {
//     id: "3",
//     title: "T20 Match",
//     time: "08:00 PM, 23-Jun",
//     location: "Barbados, West Indies",
//     teamA: { name: "West Indies Women", logo: dummyLogo },
//     teamB: { name: "South Africa Women", logo: dummyLogo },
//     status: "Upcoming",
//   },
//   {
//     id: "4",
//     title: "Madhya Pradesh League 2025, 2nd Semi-Final",
//     time: "08:00 PM, 23-Jun",
//     location: "Gwalior, India",
//     teamA: { name: "TBC", logo: dummyLogo },
//     teamB: { name: "TBC", logo: dummyLogo },
//     status: "Live",
//   },
//   {
//     id: "5",
//     title: "Madhya Pradesh League 2025, 2nd Semi-Final",
//     time: "08:00 PM, 23-Jun",
//     location: "Gwalior, India",
//     teamA: { name: "TBC", logo: dummyLogo },
//     teamB: { name: "TBC", logo: dummyLogo },
//     status: "Upcoming",
//   },
//   {
//     id: "6",
//     title: "Madhya Pradesh League 2025, 2nd Semi-Final",
//     time: "08:00 PM, 23-Jun",
//     location: "Gwalior, India",
//     teamA: { name: "TBC", logo: dummyLogo },
//     teamB: { name: "TBC", logo: dummyLogo },
//     status: "Upcoming",
//   },
// ];

const MatchList = () => {
  const [matches, setMatches] = useState([]);


  useEffect(() => {
    const fetchMatchList = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/get-match-list`);

        const data = await response.json();
        setMatches(data?.res?.tM); // assuming data is an array
      } catch (err) {
        console.log(err);
      }
    };

    fetchMatchList();
  }, []);
  console.log(matches)
  return (
    <div className=" py-6 px-4">
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        
      >
        {matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
