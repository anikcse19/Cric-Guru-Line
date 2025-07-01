import MenRankings from "@/components/rankings/MenRankings";
import WoWomenRankings from "@/components/rankings/WomenRanking";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WomensRankingPage = () => {
  const [currentTab, setCurrentTab] = useState("Womens");
  const navigate = useNavigate();
  return (
    <div className="py-12">
      <h1 className="font-semibold text-xl">Cricket Ranking</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        {/* tabs */}
        <div className="flex items-center gap-x-6 text-lg">
          <span
            onClick={() => {
              setCurrentTab("Mens");
              navigate("/rankings/mens");
            }}
            className={`cursor-pointer pb-3 px-3 ${
              currentTab === "Mens" &&
              "font-semibold border-b-3 border-purple-700 transition-all ease-in-out duration-300"
            }`}
          >
            Men's
          </span>
          <span
            onClick={() => {
              setCurrentTab("Womens");
              navigate("/rankings/womens");
            }}
            className={`cursor-pointer pb-3 px-3 ${
              currentTab === "Womens" &&
              " font-semibold border-b-3 border-purple-700 transition-all ease-in-out duration-300"
            }`}
          >
            Women's
          </span>
        </div>
        {/* tab content */}
        {currentTab === "Mens" ? <MenRankings /> : <WoWomenRankings />}
      </div>
    </div>
  );
};

export default WomensRankingPage;
