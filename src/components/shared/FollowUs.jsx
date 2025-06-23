import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom";
export default function FollowUs() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">FOLLOW US</h2>
      <ul className="space-y-4 border-b">
        <li className="hover:text-[#4c549a] flex items-center justify-between border-b pb-4 text-sm hover:underline hover:transition duration-500 cursor-pointer">
          <div className=" flex items-center gap-4">
            <img src="/youtube.png" className=" h-6 w-6" alt="" />
            YouTube
          </div>
          <Link to="#">
            {" "}
            <LuExternalLink color="gray" size={"1.2rem"} />
          </Link>
        </li>

        <li className="hover:text-[#4c549a] flex items-center justify-between border-b pb-4 text-sm hover:underline hover:transition duration-500 cursor-pointer">
          <div className=" flex items-center gap-4">
            <img src="/facebook.png" className=" h-6 w-6" alt="" />
            Facebook
          </div>
          <Link to="#">
            {" "}
            <LuExternalLink color="gray" size={"1.2rem"} />
          </Link>
        </li>
        <li className="hover:text-[#4c549a] flex items-center justify-between border-b pb-4 text-sm hover:underline hover:transition duration-500 cursor-pointer">
          <div className=" flex items-center gap-4">
            <img src="/instagram.png" className=" h-6 w-6" alt="" />
            Instagram
          </div>
          <Link to="#">
            {" "}
            <LuExternalLink color="gray" size={"1.2rem"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
