import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const YoutubeAPI = process.env.YOUTUBE_API_KEY;
const SearchEngineKey = process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_KEY;
const SearchEngineCX = process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_CX;

async function searchYoutube(query){
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${YoutubeAPI}&maxResults=10`;
    const response = await axios.get(youtubeUrl);
    return response.data.items;
}

async function searchGoogle(query){
    const googleUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${SearchEngineKey}&cx=${SearchEngineCX}&maxResults=10`;
    const response = await axios.get(googleUrl);
    return response.data.items;
}

async function searchGemini(query){
    const response = await model.generateContent(query);
    return response.response.text();
}


app.post("/search", async (req,res) =>{
    const { query } = req.body;
    
    if (!query) {
        return res.json({success: false, message: "Enter a search query to search"});
    }
    try {
        const [youtubeData, googleData, geminiData] = await Promise.all([
            searchYoutube(query),
            searchGoogle(query),
            searchGemini(query)
        ])
        res.json({success: true, youtubeResults: youtubeData, googleResults: googleData, geminiResults: geminiData})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
});


app.get("/", (req, res) => {
  res.send("Welcome to the Mishra Ji Ka Gemini");
});

app.listen(port, () => {
    console.log("listning on PORT :" + port);
});
