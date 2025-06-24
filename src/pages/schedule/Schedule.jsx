import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Recent from "@/pages/schedule/recent/Recent";
import Upcoming from "@/pages/schedule/upcoming/Upcoming";
import { AnimatePresence, motion } from "framer-motion";

const tabs = ["Recent", "Upcoming"];

const Schedule = () => {
  const [currentTab, setCurrentTab] = useState("Recent");
  const navigate = useNavigate();

  return (
    <div className="py-12">
      <div className="p-6 rounded-lg mt-6">
        {/* Tabs */}
        <div className="relative flex items-center gap-x-6 text-lg mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="relative pb-3 px-3 cursor-pointer"
              onClick={() => {
                setCurrentTab(tab);
                navigate(`/cricket-schedule/${tab.toLowerCase()}/all`);
              }}
            >
              <span
                className={`transition-colors duration-300 ${
                  currentTab === tab
                    ? " font-semibold"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </span>

              {/* Animated Underline */}
              {currentTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[3px] w-full bg-purple-700 rounded"
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
        {/* Tab Content with Transition */}
          {currentTab === "Recent" ? (

              <Recent />
   
          ) : (
    
              <Upcoming />
    
          )}
   
      </div>
    </div>
  );
};

export default Schedule;
