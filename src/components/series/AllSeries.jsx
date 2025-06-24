import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CurrentSeries from "./CurrentSeries";
import SeriesAcheive from "./SeriesAcheive";

const tabs = ["Current & future series", "Series archive"];

const AllSeries = () => {
  const [currentTab, setCurrentTab] = useState("Current & future series");

  return (
    <div className="">
      <div className="p-6 bg-white rounded-lg shadow-md  ">
        {/* Tabs */}
        <div className="relative flex items-center gap-x-6 text-lg mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="relative pb-3 px-3 cursor-pointer"
              onClick={() => {
                setCurrentTab(tab);
              }}
            >
              <span
                className={`transition-colors duration-300 ${
                  currentTab === tab ? " font-semibold" : "text-gray-600"
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
        <div className="min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3 }}
              className="px-2"
            >
              {currentTab === "Current & future series" ? (
                <CurrentSeries></CurrentSeries>
              ) : (
                <SeriesAcheive></SeriesAcheive>
              )}
       </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AllSeries;
