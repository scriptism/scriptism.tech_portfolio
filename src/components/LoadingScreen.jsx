import React from "react";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    setTimeout(() => setShowText(true), 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 mb-8">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className="text-blue-500"
            strokeWidth="8"
            strokeDasharray={251.2}
            strokeDashoffset={251.2 - (251.2 * progress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xl font-bold">
          {progress}%
        </div>
      </div>
      <div
        className={`text-2xl font-mono transition-opacity duration-500 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        Welcome to my portfolio
      </div>
    </div>
  );
};

export default LoadingScreen;
