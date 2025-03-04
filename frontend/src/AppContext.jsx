import { createContext, useState } from "react";
import axios from 'axios';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [platform, setPlatform] = useState("ai");
  const [searchResults, setSearchResults] = useState([]);
  const [aiResponse, setAiResponse] = useState([]);

  const fetchSearchResults = async () => {

  
    try{
      if (searchQuery.length > 0) {
        const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        const googleApiKey = import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_ENGINE_KEY;
        const googleCx = import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_ENGINE_CX;
        const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;

        const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${youtubeApiKey}&maxResults=100`;
        const googleUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${googleApiKey}&cx=${googleCx}&maxResults=100`;
        const geminiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateText?key=${geminiApiKey}`;

        const [youtubeResponse, googleResponse] = await Promise.all([
          axios.get(youtubeUrl),
          axios.get(googleUrl),
          axios.get(geminiUrl)
        ]);

        const youtubeResults = youtubeResponse.data.items.map(item => ({
          title: item.snippet.title,
          description: item.snippet.description,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          platform: 'youtube',
          thumbnail: item.snippet.thumbnails.high.url
        }));

        const googleResults = googleResponse.data.items.map(item => ({
          title: item.title || "No Title",
          description: item.snippet || "No Description",
          link: item.link || "No Link",
          platform: 'google',
          thumbnail: item.pagemap?.cse_image?.[0]?.src || "No Thumbnail"
        }));

        setSearchResults([...youtubeResults, ...googleResults]);

        const response = await axios.post(geminiUrl, {
          prompt: {
            text: `User: ${searchQuery}\nAI:`
          }
        }); 
        
        setAiResponse(response.data.candidates[0].output);

      }else{
        return null;
      }

    }catch(error){
      console.error("Error fetching search results:", error);
    }
  }


  console.log(aiResponse);

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        platform,
        setPlatform,
        searchResults,
        fetchSearchResults,
        aiResponse
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
