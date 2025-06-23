import React from "react";

export default function DownloadApp() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">DOWNLOAD THE APP</h2>
      <ul className="space-y-2">
        <li className="text-blue-600 hover:underline cursor-pointer">
          Android App
        </li>
        <li className="text-blue-600 hover:underline cursor-pointer">
          iOS App
        </li>
      </ul>
    </div>
  );
}
