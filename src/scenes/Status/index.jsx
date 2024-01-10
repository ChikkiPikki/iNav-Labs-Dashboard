import React, { useState } from "react";

const OnlineStatusDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  const toggleStatus = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Device Status</h1>
      <div className="flex items-center mb-4">
        <p className="mr-4 text-lg font-semibold text-gray-700">Status:</p>
        <label
          htmlFor="toggleStatus"
          className={`relative w-14 h-8 transition-all duration-300 ${
            isOnline ? "bg-green-500" : "bg-red-500"
          } rounded-full cursor-pointer`}
        >
          <input
            type="checkbox"
            id="toggleStatus"
            className="absolute opacity-0 w-0 h-0"
            checked={isOnline}
            onChange={toggleStatus}
          />
          <span
            className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transform transition-transform ${
              isOnline ? "translate-x-full" : ""
            }`}
          ></span>
        </label>
        <span className="ml-2 text-lg text-gray-700">
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </div>
  );
};

export default OnlineStatusDashboard;
