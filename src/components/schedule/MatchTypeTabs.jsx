import React, { useState } from 'react';


const MatchTypeTabs = () => {
    //   const [currentTab, setCurrentTab] = useState("Recent");
    const [activeTab, setActiveTab] = useState("All");
    return (
      <div className=" ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex  gap-4 mb-6">
            {["All", "T-20", "ODI", "TEST", "T-10", "100-BALLs"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 transition-all duration-300 ${
                  activeTab === tab
                    ? "font-semibold border-b-3 border-purple-700 transition-all ease-in-out duration-300"
                    : "text-gray-800 "
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MatchTypeTabs;