import { createContext, useState } from "react";
import axios from 'axios';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [platform, setPlatform] = useState("ai");
  const [searchResults, setSearchResults] = useState([]);


  const fetchSearchResults = async () => {

  }
    

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        platform,
        setPlatform,
        searchResults,
        fetchSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
