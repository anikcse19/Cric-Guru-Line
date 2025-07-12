import React from "react";

export default function CommentaryItem({ item }) {
    console.log("item= ", item)
  return (
    <div className=" items-start gap-3 border-b py-6">
      <div className="flex  gap-2">
        <span className="font-bold">{item?.ov}</span>

        <p className="text-base" dangerouslySetInnerHTML={{ __html: item.c }} />
        {/* {item.c}
        </p> */}
      </div>
      {item.v && (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
            item?.v === "WK"
              ? "bg-red-500"
              : item?.v === "4"
              ? "bg-green-600"
              : item?.v === "6"
              ? "bg-purple-700"
              : "bg-purple-700"
          }`}
        >
          {item?.v === "WK"
            ? "WK"
            : item?.v === "4"
            ? "4"
            : item?.v === "6"
            ? "6"
            : item?.v}
        </div>
      )}
    </div>
  );
}
