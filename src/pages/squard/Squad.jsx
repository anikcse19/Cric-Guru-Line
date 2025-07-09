import React, { useEffect, useState } from 'react';
import { fetchMatchSquad } from './Action';
import { useParams } from 'react-router-dom';
import { dummyLogo } from '@/components/home/matchList/MatchCard';

const Squad = () => {
    const{id}=useParams();
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
console.log("squarddata= ",squadData)
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
              //   src={`/team_logos/${squadData?.teams?.t1?.l}`}
              src={dummyLogo}
              alt={squadData?.teams?.t1?.n}
              className="w-6 h-6"
            />
            {squadData?.teams?.t1?.n}
          </div>

          <div className="flex items-center gap-2 font-bold text-3xl">
            {squadData?.teams?.t2?.n}
            <img
              //   src={`/team_logos/${squadData?.teams?.t2?.l}`}
              src={dummyLogo}
              alt={squadData?.teams?.t2?.n}
              className="w-6 h-6"
            />
          </div>
        </div>

        <div className="font-bold text-xl text-center underline my-4 text-gray-600">
          Playing XI
        </div>
        {/* Playing XI */}
        <div className="flex justify-between items-center border-y py-4">
          {/* Team 1 Playing XI */}
          <div className=" border-r w-1/2 ">
            {squadData?.p1.map((player, idx) => (
              <div key={idx} className="flex items-center border-b gap-2 py-1">
                <img
                  src={
                    player?.l
                      ? `/player_images/${player?.l}`
                      : "/default-avatar.png"
                  }
                  alt={player?.n}
                  className="w-8 h-8 rounded-full object-cover"
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

          {/* Team 2 Playing XI */}
          <div className="w-1/2 ">
            {squadData?.p2.map((player, idx) => (
              <div key={idx} className="flex items-center justify-end gap-2 py-1">
                <img
                  src={
                    player?.l
                      ? `/player_images/${player?.l}`
                      : "/default-avatar.png"
                  }
                  alt={player?.n}
                  className="w-8 h-8 rounded-full object-cover"
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

        {/* Bench Title */}
        <div className="text-center my-4 text-gray-700 font-semibold border-b w-full">
          Bench
        </div>

        {/* Bench Players */}
        <div className="grid grid-cols-2 gap-4">
          {/* Team 1 Bench */}
          <div>
            {squadData?.b1.map((player, idx) => (
              <div key={idx} className="flex items-center gap-2 py-1">
                <img
                  src={
                    player?.l
                      ? `/player_images/${player?.l}`
                      : "/default-avatar.png"
                  }
                  alt={player?.n}
                  className="w-8 h-8 rounded-full object-cover"
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
          <div>
            {squadData?.b2.map((player, idx) => (
              <div key={idx} className="flex items-center gap-2 py-1">
                <img
                  src={
                    player?.l
                      ? `/player_images/${player?.l}`
                      : "/default-avatar.png"
                  }
                  alt={player?.n}
                  className="w-8 h-8 rounded-full object-cover"
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