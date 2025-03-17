import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[11%]">
        <Sidebar />
      </div>
      <div className="w-full h-screen bg-gray-300 p-2">
        <div className="flex items-center justify-center rounded-md bg-gray-200 w-full h-full">
          <div className="text-black w-[80%]">
            <div className=" flex flex-col gap-3">
              <h1 className="text-4xl font-bold">
                Hi there, <span className="text-blue-500">Aman</span>
                <br /> What would you like to know?
              </h1>
              <p className="text-gray-400 leading-5">
                Search for trending searches below
                <br />
                or search search your own
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-5 mb-5">
              <div  className=" hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md bg-gray-300">
                pakistan vs new zealand
              </div>
              <div className=" hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md bg-gray-300">
                severe heatwave alert
              </div>
              <div className=" hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md bg-gray-300">
                ar rahman
              </div>
              <div className=" hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md bg-gray-300">
                grok
              </div>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
