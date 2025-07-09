import Commentary from "@/pages/matchDetails/Commentary";
import Highlights from "@/pages/matchDetails/Highlights";
import Info from "@/pages/matchDetails/info/Info";
import Squad from "@/pages/matchDetails/squard/Squad";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DownloadApp from "@/components/shared/DownloadApp";
import FollowUs from "@/components/shared/FollowUs";
import Scorecard from "./scoreboard/Scorecard";
// import Scorecard from "./scoreboard/Scorecard";


const tabs = [
  { label: "Commentary", key: "commentary" },
  { label: "Scorecard", key: "scorecard" },
  { label: "Info", key: "info" },
  { label: "Squad", key: "squad" },
  { label: "Highlights", key: "highlights" },
];

const MatchDetails = () => {
  const navigate = useNavigate();
  const { tab = "commentary", id } = useParams();

  const handleTabChange = (newTab) => {
    navigate(`/match-details/${newTab}/${id}`);
  };

  const renderTabContent = () => {
    switch (tab) {
      case "commentary":
        return <Commentary id={id} />;
      case "scorecard":
        return <Scorecard id={id} />;
      case "info":
        return <Info id={id} />;
      case "squad":
        return <Squad id={id} />;
      case "highlights":
        return <Highlights id={id} />;
      default:
        return <div>Tab not found</div>;
    }
  };

  return (
    <div className="py-12">
      <h1 className="font-semibold text-xl">Match Details</h1>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-12">
        <div className=" col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            {/* Tabs */}
            <div className="flex items-center gap-x-6 text-lg">
              {tabs.map((t) => (
                <span
                  key={t.key}
                  onClick={() => handleTabChange(t.key)}
                  className={`cursor-pointer pb-3 px-3 ${
                    tab === t.key
                      ? "font-semibold border-b-3 border-purple-700 transition-all ease-in-out duration-300"
                      : ""
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>
            <div className="mt-6">{renderTabContent()}</div>
          </div>
          {/* <TeamList data={players}></TeamList> */}
        </div>
        <div className="col-span-1 space-y-4">
          <DownloadApp></DownloadApp>
          <FollowUs></FollowUs>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
