// src/components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col h-70 w-full items-center justify-center py-10">
      {/* Background Blur Circle */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Spinner */}
        <div className="relative w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>

      {/* Text */}
      <p className="mt-5 text-lg font-medium text-gray-700 tracking-wide animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
