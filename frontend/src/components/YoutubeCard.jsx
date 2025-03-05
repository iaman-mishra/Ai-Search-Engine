import React from "react";

const YoutubeCard = ({result}) => {
  return (
    <div className="rounded overflow-hidden shadow-xl">
      <a href={`https://www.youtube.com/watch?v=${result.id.videoId}`} target="_blank">
        <div className="w-full aspect-video overflow-hidden">
          <img src={result.snippet.thumbnails.high.url} className="object-cover h-full w-full" />
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-2  ">
          <div className="font-semibold text-sm mb-2 justify-normal">
            {result.snippet.title}
          </div>
        </div>
      </a>
    </div>
  );
};

export default YoutubeCard;
