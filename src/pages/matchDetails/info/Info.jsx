import React, { useEffect, useState } from 'react';
import { BASE_URL, imageUrl } from '../../../../config';
import { useParams } from 'react-router-dom';

const Info = () => {
  const { id } = useParams();
    const [matchInfo, setMatchInfo] = useState([]);
  
  
    useEffect(() => {
      const fetchMatchList = async () => {
        try {
          const response = await fetch(`${BASE_URL}/api/get-match-list`);
  
          const data = await response.json();
          const singleMatch = data?.res?.tM.find((match)=>match.key===id);
          setMatchInfo(singleMatch); // assuming data is an array
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchMatchList();
    }, [id]);
    console.log(matchInfo);
    return (
      <div className=" mx-auto bg-white shadow-sm rounded p-4 space-y-4">
        {/* Teams row */}
        <div className="flex justify-between max-w-2xl mx-auto items-center text-center">
          <div className=" flex flex-col items-center">
            <img
              src={`${imageUrl}/teams/${matchInfo?.teams?.t1?.l}`}
              alt={matchInfo?.teams?.t1?.n}
              className="w-14 h-14 rounded-full "
            />
            <p className="text-blue-600 font-medium">
              {matchInfo?.teams?.t1?.n}
            </p>
          </div>

          <div className="text-sm font-semibold bg-black text-white px-3 py-1 rounded-full">
            vs
          </div>

          <div className=" flex flex-col items-center">
            <img
              src={`${imageUrl}/teams/${matchInfo?.teams?.t2?.l}`}
              alt={matchInfo?.teams?.t2?.n}
              className="w-14 h-14 rounded-full"
            />
            <p className="text-blue-600 font-medium">
              {matchInfo?.teams?.t2?.n}
            </p>
          </div>
        </div>

        {/* Match details */}
        <div className="divide-y border rounded text-lg">
          <div className="flex p-3">
            <span className="font-medium w-1/2">Series:</span>
            <span className="text-blue-500">{matchInfo?.sr}</span>
          </div>
          <div className="flex  p-3">
            <span className="font-medium w-1/2">Match:</span>
            <span>{matchInfo?.n}</span>
          </div>
          <div className="flex p-3">
            <span className="font-medium w-1/2">Date & Time:</span>
            <span>
              {new Date(matchInfo?.t * 1000).toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            ,
              {new Date(matchInfo?.t * 1000).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
              {/* {matchInfo?.t} */}
            </span>
          </div>
          <div className="flex p-3">
            <span className="font-medium w-1/2">Venue :</span>
            <span>{matchInfo?.g}</span>
          </div>
          <div className="flex  p-3">
            <span className="font-medium w-1/2">Toss:</span>
            <span>{matchInfo?.toss}</span>
          </div>
          <div className="flex items-start justify-baseline p-3">
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