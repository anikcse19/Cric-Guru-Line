import React, { useEffect, useState } from 'react';
import CommentaryItem from './CommentaryItem';
import { useParams } from 'react-router-dom';
import { fetchHighlights } from './Action';



const tabs = ["All", "Fours", "Sixes", "Wickets", "Fifties", "Hundreds"];
const Highlights = () => {
    const { id } = useParams();
    const [commentaryData, setCommentaryData] = useState(null);
    const [activeTab, setActiveTab] = useState("All");
    useEffect(() => {
      const loadData = async () => {
        const data = await fetchHighlights(id);
        if (data) {
          setCommentaryData(data);
        }
      };

      if (id) {
        loadData();
      }
    }, [id]);
    console.log("comendatory =",commentaryData);
    const filteredData =
      activeTab === "All"
        ? commentaryData?.balls
        : commentaryData?.balls.filter((item) =>
            activeTab === "Fours" && item?.v === "4"
              ? true
              : activeTab === "Sixes" && item?.v === "6"
              ? true
              : activeTab === "Wickets" && item?.v === "WK"
              ? true
              : activeTab === "Fifties" && item?.v === "FT"
              ? true
              : activeTab === "Hundreds" && item?.v === "HD"
              ? true
              : false
          );
  
    return (
      <section className="  p-4">
        {/* Tabs */}
        <div className="grid lg:grid-cols-6 grid-cols-1 border  w-full mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`xl:px-12 px-8 py-4 font-medium border border-gray-200 ${
                activeTab === tab
                  ? "border-purple-900 text-white bg-purple-900"
                  : " text-gray-600 hover:bg-purple-900  hover:text-white "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Commentary Items */}
        {filteredData?.length > 0 ? (
          filteredData.map((item, index) => (
            <CommentaryItem key={index} item={item} />
          ))
        ) : (
          <p className="text-center text-red-500 text-xl font-semibold py-10">
            There are no highlights of this type in this innings
          </p>
        )}
      </section>
    );
};

export default Highlights;