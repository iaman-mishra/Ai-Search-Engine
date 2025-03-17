import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import AppContext from "../AppContext";
import YoutubeCard from "../components/YoutubeCard";
import LoadingDots from "../components/LoadingDots.jsx";
import { motion } from "framer-motion";

const Search = () => {
  const { qhead, query, searchResults, isLoading } = useContext(AppContext);
  const youtubeResults = searchResults.youtubeResults || [];

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="w-[11%]">
        {/* Set a fixed width for Sidebar */}
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-[calc(100%-11%)] h-full bg-gray-900 p-2">
        <div className="flex-1 text-white px-10 py-7 rounded-md bg-gray-950 overflow-hidden">
          <div className="h-[90%] flex flex-col overflow-y-auto scroll-smooth">
            <h1 className="text-3xl font-semibold mb-5">{qhead}</h1>
            <div className="flex items-center justify-center">
              {isLoading ? (
                qhead ? (
                  <LoadingDots />
                ) : (
                  "No results found,"
                )
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
                  {youtubeResults.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <YoutubeCard result={result} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Search;
