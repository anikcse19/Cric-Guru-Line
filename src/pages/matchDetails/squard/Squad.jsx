import React, { useEffect, useState } from "react";
import { fetchMatchSquad } from "./Action";
import { useParams } from "react-router-dom";
import { imageUrl } from "../../../../config";

const Squad = () => {
  const { id } = useParams();
  const [squadData, setSquadData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMatchSquad(id);
      if (data) {
        setSquadData(data);
      }
    };

    if (id) {
      loadData();
    }
  }, [id]);
  console.log("squarddata= ", squadData);
  if (!squadData) return <p>Loading squad...</p>;
  const getRole = (roleCode) => {
    const roles = [
      "Batter",
      "Bowler",
      "Batting All Rounder",
      "All Rounder",
      "Wicket Keeper",
    ];
    return roles[roleCode] || "Unknown";
  };
  return (
    <div className=" mx-auto px-20 p-4">
      {/* Team Names */}
      <div className="flex justify-between items-center border-b py-2 my-6">
        <div className="flex items-center gap-2 font-bold text-3xl">
          <img
            src={`${imageUrl}/teams/${squadData?.teams?.t1?.l}`}
            //   src={dummyLogo}
            alt={squadData?.teams?.t1?.n}
            className="w-10 h-10 rounded-full"
          />
          {squadData?.teams?.t1?.n}
        </div>

        <div className="flex items-center gap-2 font-bold text-3xl">
          {squadData?.teams?.t2?.n}
          <img
            src={`${imageUrl}/teams/${squadData?.teams?.t2?.l}`}
            //   src={dummyLogo}
            alt={squadData?.teams?.t2?.n}
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <div className="font-bold text-xl text-center underline my-4 text-gray-600">
        Playing XI
      </div>
      {/* Playing XI */}
      <div className="flex justify-between items-center border-y py-4">
        {/* Team 1 Playing XI */}
        <div className=" border-r w-1/2 pr-2 ">
          {squadData?.p1.map((player, idx) => (
            <div key={idx} className="flex items-center border-b gap-2 py-1">
              <img
                src={
                  player?.l
                    ? `${imageUrl}/players/${player?.l}`
                    : "/default-avatar.png"
                }
                alt={player?.n}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-base">{player?.n}</div>
                <div className="text-sm text-gray-500">
                  {getRole(player?.r)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team 2 Playing XI */}
        <div className="w-1/2 pl-2 ">
          {squadData?.p2.map((player, idx) => (
            <div
              key={idx}
              className="flex items-center border-b justify-end gap-2 py-1"
            >
              <div>
                <div className="font-semibold text-base">{player?.n}</div>
                <div className="text-sm text-gray-500">
                  {getRole(player?.r)}
                </div>
              </div>
              <img
                src={
                  player?.l
                    ? `${imageUrl}/players/${player?.l}`
                    : "/default-avatar.png"
                }
                alt={player?.n}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bench Title */}
      <div className="text-center my-4 text-gray-700 font-semibold border-b w-full">
        Bench
      </div>

      {/* Bench Players */}
      <div className="flex justify-between items-center border-y py-4">
        {/* Team 1 Bench */}
        <div className=" border-r w-1/2 pr-2 ">
          {squadData?.b1.map((player, idx) => (
            <div key={idx} className="flex items-center border-b gap-2 py-1">
              <img
                src={
                  player?.l
                    ? `${imageUrl}/players/${player?.l}`
                    : "/default-avatar.png"
                }
                alt={player?.n}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">{player?.n}</div>
                <div className="text-xs text-gray-500">
                  {getRole(player?.r)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team 2 Bench */}
        <div className="w-1/2 pl-2 ">
          {squadData?.b2.map((player, idx) => (
            <div
              key={idx}
              className="flex justify-end items-start border-b gap-2 py-1"
            >
              <img
                src={
                  player?.l
                    ? `${imageUrl}/players/${player?.l}`
                    : "/default-avatar.png"
                }
                alt={player?.n}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">{player?.n}</div>
                <div className="text-xs text-gray-500">
                  {getRole(player?.r)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Squad;
