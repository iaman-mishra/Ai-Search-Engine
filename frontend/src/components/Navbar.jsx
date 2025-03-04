import React, { useContext } from "react";
import { AppContext } from "../AppContext"; 

const Navbar = () => {
  const { searchQuery, setSearchQuery, fetchSearchResults } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearchResults();
  };

  return (
    <div className="bg-[#3d405b] flex flex-col items-center justify-between w-full pb-5 py-2 px-5 gap-2 text-[#e07a5f] ">
      <h1 className="text-2xl font-bold">Ai Powered Seach Engine</h1>
      <form className="flex flex-row items-center justify-center gap-2 w-full" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-600 text-white p-2 rounded-md w-full max-w-[80%]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-[#e07a5f] text-white p-2 rounded-md" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
