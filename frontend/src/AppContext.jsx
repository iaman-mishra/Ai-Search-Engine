import { createContext, useState } from "react";
export const AppContext = createContext();
import axios from "axios";
export const AppContextProvider = ({ children }) => {

  const [platform, setPlatform] = useState("ai");
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
  console.log(searchResults);

  const fetchSearchResults = async () => {
    try {
      const response = await axios.post(backendUrl + "/search",{query});
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }
  

  return (
    <AppContext.Provider
      value={{
        platform,
        setPlatform,
        searchResults,
        setSearchResults,
        backendUrl,
        query,
        setQuery,
        fetchSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
