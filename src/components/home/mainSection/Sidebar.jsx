import React from "react";
import PopularSeries from "./PopularSeries";
import TopRankings from "./TopRankings";

export default function Sidebar() {
  return (
    <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
      <PopularSeries />
      <TopRankings />
    </div>
  );
}
