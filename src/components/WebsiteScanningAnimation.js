import React, { useState, useRef, useEffect } from 'react';

const WebsiteScanningAnimation = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const stages = [
    {
      message: "Checking messaging clarity...",
      position: 25, // percentage down the page
      duration: 3000
    },
    {
      message: "Analyzing conversion potential...",
      position: 50,
      duration: 3000
    },
    {
      message: "Reviewing audience targeting...",
      position: 75,
      duration: 3000
    }
  ];

  const startAnalysis = () => {
    setCurrentStage(0);
    setIsComplete(false);
    setIsPaused(false);
    setScanProgress(0);

    // Run through each stage
    stages.forEach((stage, index) => {
      setTimeout(() => {
        if (!isPaused) {
          setCurrentStage(index);
          setScanProgress(stage.position);
        }
      }, index * stage.duration);
    });

    // Complete analysis after all stages
    setTimeout(() => {
      if (!isPaused) {
        setIsComplete(true);
      }
    }, stages.length * 3000);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const resetAnalysis = () => {
    setCurrentStage(0);
    setIsComplete(false);
    setIsPaused(false);
    setScanProgress(0);
  };

  useEffect(() => {
    // Auto-start on mount
    startAnalysis();
  }, []);

  if (isComplete) {
    return (
      <div className="w-full flex justify-center p-0">
        <div className="w-full">
          {/* Browser Mockup - Completion State */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="h-12 flex items-center px-5 border-b border-gray-200">
              <div className="flex space-x-2 mr-5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-500 text-center">
                @Byte/analysis
              </div>
            </div>

            {/* Completion Content */}
            <div className="relative bg-white p-16 min-h-96 flex flex-col items-center justify-center text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Completion Message */}
              <h2 className="text-3xl font-bold text-blue-500 mb-4">
                Maintenance Checked!
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Your website and apps are running smoothly.
              </p>

              {/* Action Button */}
              <button
                onClick={resetAnalysis}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-red-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center p-0">
      <div className="w-full">
        {/* Browser Mockup */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Browser Header */}
          <div className="h-12 flex items-center px-5 border-b border-gray-200">
            <div className="flex space-x-2 mr-5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-500 text-center">
              tagbyte.dev/analysis
            </div>
          </div>

          {/* Webpage Content */}
          <div className="relative bg-white p-8 min-h-96 overflow-hidden">
            {/* Hero Section */}
            <div className="h-15 bg-gray-200 rounded-lg mb-6"></div>

            {/* Content Row */}
            <div className="flex gap-5 mb-6">
              <div className="flex-1">
                <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full mb-2 w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded-full mb-4 w-3/5"></div>
                <div className="w-32 h-9 bg-blue-400 rounded-md"></div>
              </div>
              <div className="w-40 h-32 bg-gray-200 rounded-lg"></div>
            </div>

            {/* Bottom Section */}
            <div className="flex gap-5 mt-8">
              <div className="flex-1 h-20 bg-gray-50 rounded-lg border border-gray-200"></div>
              <div className="flex-1 h-20 bg-gray-50 rounded-lg border border-gray-200"></div>
              <div className="flex-1 h-20 bg-gray-50 rounded-lg border border-gray-200"></div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
              <div
                className="h-full bg-blue-500 transition-all duration-3000 ease-out"
                style={{ width: `${scanProgress}%` }}
              ></div>
            </div>

            {/* Scanning Line */}
            <div
              className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 transition-all duration-3000 ease-out"
              style={{
                top: `${scanProgress}%`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            />

            {/* Analysis Message Popup */}
            {!isPaused && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-3 flex items-center space-x-3 transition-all duration-500 ease-out"
                style={{
                  top: `${Math.max(scanProgress - 5, 10)}%`,
                  opacity: scanProgress > 0 ? 1 : 0
                }}
              >
                {/* Loading Indicator */}
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>

                {/* Message */}
                <span className="text-gray-700 text-sm font-medium">
                  {stages[currentStage]?.message || "Initializing analysis..."}
                </span>
              </div>
            )}

            {/* Subtle highlight overlay */}
            {!isPaused && (
              <div className="absolute inset-0 bg-blue-500 opacity-0 animate-highlight pointer-events-none" />
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3 p-4 border-t border-gray-200">
            <button
              onClick={startAnalysis}
              className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Restart Analysis
            </button>
            <button
              onClick={togglePause}
              className="px-4 py-2 bg-gray-500 text-white rounded-md text-sm font-medium hover:bg-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
        </div>

        {/* Progress Info */}
        <div className="mt-4 text-center text-gray-600 text-sm">
          <p>Stage {currentStage + 1} of {stages.length} • {Math.round(scanProgress)}% Complete</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes highlight {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.02; }
        }

        .animate-highlight {
          animation: highlight 3s ease-in-out infinite;
        }

        .duration-3000 {
          transition-duration: 3000ms;
        }
      `}</style>
    </div>
  );
};

export default WebsiteScanningAnimation;