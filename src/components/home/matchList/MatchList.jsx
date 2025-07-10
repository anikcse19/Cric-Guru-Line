import React, { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import "./matchStylee.css"
import { BASE_URL } from "../../../../config";

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
