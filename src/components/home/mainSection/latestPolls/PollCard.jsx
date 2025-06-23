import React, { useState } from "react";

export function PollCard({ poll }) {
  const [selected, setSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      alert(`You voted for: ${selected}`);
    } else {
      alert("Please select an option.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex-1">
      <div className="bg-gradient-to-r from-[#3d4375] via-[#4a2465] to-[#4d1e62] text-white rounded-t-md p-4 mb-4 text-center">
        <h3 className="font-semibold">{poll.league}</h3>
        <p className="text-sm">{poll.match}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="font-semibold text-center">Who will win?</p>
        <div className="space-y-2">
          {poll.options.map((option, idx) => (
            <label
              key={idx}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`poll-${poll.id}`}
                value={option}
                checked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-[#3d4375] via-[#4a2465] to-[#4d1e62] text-white font-bold rounded"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
