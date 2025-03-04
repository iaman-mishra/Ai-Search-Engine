import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { AppContext } from "./AppContext";
import ResultCard from "./components/ResultCard";

const App = () => {
  const { platform, setPlatform, searchResults } = useContext(AppContext);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.id);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F4F1DE]">
        <div className="w-full flex flex-col md:flex-row gap-2 ">
          <div className="p-4 bg-gray-100 shadow-md md:min-h-screen w-full md:w-[20%]  ">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="platform"
                  id="ai"
                  className="w-4 h-4"
                  checked={platform === "ai"}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="ai" className="text-gray-700">
                  AI
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="platform"
                  id="google"
                  className="w-4 h-4"
                  checked={platform === "google"}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="google" className="text-gray-700">
                  Google
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="platform"
                  id="youtube"
                  className="w-4 h-4"
                  checked={platform === "youtube"}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="youtube" className="text-gray-700">
                  YouTube
                </label>
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col w-full shadow-md rounded-md bg-gray-100">
            <h1 className="text-xl font-semibold mb-6">Search Results</h1>
            <div
              className={`flex flex-col justify-between ${
                platform === "youtube"
                  ? "grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4"
                  : "flex-row"
              }`}
            >
              {searchResults.length > 0 ? (
                searchResults
                  .filter((result) => result.platform === platform)
                  .map((result, index) => (
                    <ResultCard key={index} {...result} />
                  ))
              ) : (
                <p className="text-gray-700">No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
