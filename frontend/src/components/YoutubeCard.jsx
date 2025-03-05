import React from "react";

const YoutubeCard = () => {
  return (
    <div className="rounded overflow-hidden shadow-xl">
      <a href='#' target="_blank">
        <div className="w-full aspect-video overflow-hidden">
          <img src="https://i.ytimg.com/vi/jfTEvUTvDZQ/mqdefault.jpg" className="object-cover h-full w-full" />
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-2  ">
          <div className="font-semibold text-sm mb-2 justify-normal">
            {/* {title} */}
            How to Study Abroad For FREE in 2025 | Free Education | Cost Of Living | Best Country to Study ?
          </div>
        </div>
      </a>
    </div>
  );
};

export default YoutubeCard;
