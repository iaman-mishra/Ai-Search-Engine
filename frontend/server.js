import express from "express";
import "dotenv/config";
import cors from 'cors'

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Api is working");
});



app.get("/api/search", async (req, res) => {
  const { query } = req.query;

  try {
    const youtubeApiKey = process.env.YOUTUBE_API_KEY;
    const googleApiKey = process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_KEY;
    const googleCx = process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_CX;

    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${youtubeApiKey}`;
    const googleUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${googleApiKey}&cx=${googleCx}`;

    const [youtubeResponse, googleResponse] = await Promise.all([
      axios.get(youtubeUrl),
      axios.get(googleUrl)
    ]);

    const youtubeResults = youtubeResponse.data.items.map(item => ({
      title: item.snippet.title,
      link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      platform: 'youtube'
    }));

    const googleResults = googleResponse.data.items.map(item => ({
      title: item.title,
      link: item.link,
      platform: 'google'
    }));

    const results = [...youtubeResults, ...googleResults];

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching search results");
  }
});

app.listen(port, () => {
  console.log("listning on PORT :" + port);
});