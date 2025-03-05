# AI Powered Search Engine

This project is an AI-powered search engine that integrates with Google Custom Search, YouTube Data API, and Google Generative AI to provide search results from multiple platforms.

## Project Structure
```
backend/
  .env
  .gitignore
  package.json
  server.js
frontend/
  .env
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  public/
    vite.svg
  src/
    App.jsx
    AppContext.jsx
    assets/
      react.svg
    components/
      GoogleCard.jsx
      Navbar.jsx
      YoutubeCard.jsx
    index.css
    main.jsx
    pages/
      Ai.jsx
      Goggle.jsx
      Youtube.jsx
  tailwind.config.js
  vite.config.js
```

## Getting Started

### Cloning the Repository
To clone the repository, run the following command:
```sh
git clone https://github.com/iaman-mishra/Ai-Search-Engine.git
```

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setting Up Environment Variables

Create a `.env` file in the `backend` directory with the following content:
```
PORT=3000
GEMINI_API_KEY=your_gemini_api_key
YOUTUBE_API_KEY=your_youtube_api_key
GOOGLE_CUSTOM_SEARCH_ENGINE_KEY=your_google_custom_search_engine_key
GOOGLE_CUSTOM_SEARCH_ENGINE_CX=your_google_custom_search_engine_cx
```

Create a `.env` file in the `frontend` directory with the following content:
```
VITE_BACKEND_URL=http://localhost:3000
```

### API Keys

- **Google Generative AI**: Obtain your API key from the Google Cloud Console.
- **YouTube Data API**: Obtain your API key from the Google Cloud Console.
- **Google Custom Search**: Obtain your API key and CX from the Google Cloud Console.

### Installing Dependencies

Navigate to the `backend` directory and install the dependencies:
```sh
cd backend
npm install
```

Navigate to the `frontend` directory and install the dependencies:
```sh
cd frontend
npm install
```

### Running the Project

#### Backend
To start the backend server, run:
```sh
cd backend
npm run server
```

#### Frontend
To start the frontend development server, run:
```sh
cd frontend
npm run dev
```

### Project Overview

#### Backend
The backend is built using Express.js and provides an API endpoint to search across YouTube, Google, and Google Generative AI.

- **server.js**: Main server file that sets up the Express server and defines the API endpoints.

#### Frontend
The frontend is built using React and Vite, and it provides a user interface to search and display results from multiple platforms.

- **App.jsx**: Main application component.
- **AppContext.jsx**: Context provider for managing global state.
- **components/**: Contains reusable components like Navbar, GoogleCard, and YoutubeCard.
- **pages/**: Contains page components like Ai, Goggle, and Youtube.

## Functionalities
- Search across multiple platforms (Google, YouTube, etc.)
- Integration with Google Custom Search, YouTube Data API, and Google Generative AI
- User-friendly interface for displaying search results

## Technologies Used
- Node.js
- Express.js
- React
- Vite
- Tailwind CSS
- Axios

## License
This project is licensed under the ISC License.

## Author
Aman Mishra  
Email: amanmishra.5272@gmail.com
