import React, { useContext } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useLocation ,useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

const SearchBar = () => {

    const {query,setQuery,fetchSearchResults,qhead , setqhead,setIsLoading} = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (e) => {
      e.preventDefault();
      setIsLoading(true)
      fetchSearchResults();
      setqhead(query);
      if(location.pathname === "/") {
        console.log("Currently on the search page");
        navigate("/search");
      }
      setQuery("")
    };

  return (
    <form className="mt-4 flex items-center bg-gray-800 rounded-xl px-4 py-3 w-full shadow-sm border border-gray-300" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Ask whatever you want..."
        className="w-full bg-transparent outline-none text-white placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-lg cursor-pointer">
          <span className="text-gray-800">Web</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
