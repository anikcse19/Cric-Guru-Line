import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MatchTypeList from "@/components/schedule/MatchTypeList";
const recentTabs = [
  { name: "ALL", path: "/cricket-schedule/upcoming/all" },
  { name: "T-20", path: "/cricket-schedule/upcoming/t20" },
  { name: "ODI", path: "/cricket-schedule/upcoming/odi" },
  { name: "TEST", path: "/cricket-schedule/upcoming/test" },
  { name: "T-10", path: "/cricket-schedule/upcoming/t10" },
];

const Upcoming = () => {
  const [activeTab, setActiveTab] = useState("ALL"); // Match case with tab.name
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-md mt-6">
        {/* Tabs without overriding parent border */}
        <div className="relative flex gap-4 mb-6">
          {recentTabs.map((tab) => (
            <div
              key={tab.name}
              className="relative px-4 py-2 cursor-pointer"
              onClick={() => {
                setActiveTab(tab.name);
                navigate(tab.path);
              }}
            >
              <span
                className={`transition-colors duration-300 ${
                  activeTab === tab.name
                    ? "text-purple-700 font-semibold"
                    : "text-gray-800"
                }`}
              >
                {tab.name}
              </span>

              {/* Underline only under active tab text */}
              {activeTab === tab.name && (
                <motion.div
                  layoutId="recent-underline"
                  className="absolute bottom-0 left-0 h-[3px] w-full bg-purple-700 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Tab Content Transition */}
        <div className="min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3 }}
              className="px-2"
            >
              <MatchTypeList></MatchTypeList>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
