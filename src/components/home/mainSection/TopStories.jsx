import React from "react";

const stories = [
  {
    title:
      "MLC 2025: WF vs TSK 13th Match PREDICTION | WHO WILL WIN? | MLC 2025 13th Match",
    time: "14 hrs ago",
    video: "https://www.youtube.com/embed/RGr0_uZXLik?si=_cA-XbKeks8Ig5sN", // replace with actual video
  },
  {
    title: "TNPL 2025: CSG vs TGC 21st Match Prediction | Who Will Win?",
    time: "1 day ago",
    video: "https://www.youtube.com/embed/URAoBWyHi4g?si=duNTKOFQyYx0qAmK", // replace with actual video
  },
  {
    title:
      "Cognizant Major League Cricket 2025 Match Highlights | MI New York vs Washington Freedom",
    time: "1 day ago",
    video: "https://www.youtube.com/embed/10XMnSmiehY?si=niafPt20qWa3bMZD", // replace with actual video
  },
];

export default function TopStories() {
  return (
    <div className="bg-white p-4 rounded shadow space-y-8">
      <h2 className="font-semibold text-xl mb-4">TOP STORIES</h2>
      {stories.map((story, idx) => (
        <div key={idx} className="space-y-2">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded"
              src={story.video}
              title={`video-${idx}`}
              allowFullScreen
            ></iframe>
          </div>
          <p className="font-semibold">{story.title}</p>
          <p className="text-gray-500 text-sm">{story.time}</p>
        </div>
      ))}
    </div>
  );
}
