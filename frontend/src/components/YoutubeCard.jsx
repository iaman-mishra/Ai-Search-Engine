import React from "react";
import { motion } from "framer-motion";

const YoutubeCard = ({ result }) => {
  return (
    <motion.div
      className="rounded overflow-hidden shadow-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }} 
    >
      <a
        href={`https://www.youtube.com/watch?v=${result.id.videoId}`}
        target="_blank"
      >
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={result.snippet.thumbnails.high.url}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-2  ">
          <div className="font-semibold text-sm mb-2 justify-normal">
            {result.snippet.title}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default YoutubeCard;
