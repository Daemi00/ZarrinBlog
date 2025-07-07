import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <div className="relative rounded-2xl w-full max-w-xl mx-auto flex flex-col items-center justify-center py-6 px-6 bg-[#7c4ee4] shadow-xl  transition-all duration-300 border border-gray-200">
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <div className="text-white text-[5rem] sm:text-[6rem] font-semibold leading-none mb-2">
            404
          </div>
          <div className="text-white text-l sm:text-xl font-light mb-2">
            Sorry!
          </div>
          <div className="text-white text-base sm:text-sm font-normal mb-8 text-center max-w-xs">
            The link is broken, try to refresh or go to home
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-primary-600 font-semibold rounded-lg px-8 py-3 shadow-md hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200 text-base focus:outline-none"
          >
            Go To Home
          </button>
        </div>
      </div>

      
    </main>
  );
};

export default NotFound;
