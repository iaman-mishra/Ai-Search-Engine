import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
import axios from "axios";
import { tr } from "framer-motion/client";
export const AppContextProvider = ({ children }) => {

  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [queryHead, setqueryHead]=useState("")
  const [qhead , setqhead] = useState("")
  const [isLoading , setIsLoading] = useState(true)
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const fetchSearchResults = async () => {
    try {
      const response = await axios.post(backendUrl + "/search",{query});
      setSearchResults(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  useEffect(()=>{
    console.log(searchResults);
  },[])
  
  console.log(searchResults);
  

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        backendUrl,
        query,
        setQuery,
        fetchSearchResults,
        qhead,
        setqhead,
        isLoading ,
        setIsLoading
      }}fetchSearchResults
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;