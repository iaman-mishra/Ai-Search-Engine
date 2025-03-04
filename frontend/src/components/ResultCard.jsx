import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const ResultCard = ({ title, link, thumbnail, description }) => {
  const { platform } = useContext(AppContext);
  return platform === "youtube" ? (
    <div className="rounded overflow-hidden shadow-xl">
      <a href={link} target="_blank">
        <div className="w-full aspect-video overflow-hidden">
          <img src={thumbnail} className="object-cover h-full w-full" />
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-2  ">
          <div className="font-semibold text-sm mb-2 justify-normal">
            {title}
          </div>
        </div>
      </a>
    </div>
  ) : (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <a href={link} target="_blank">
        <div className="px-6 py-4">
          <div className="text-blue-700 font-semibold text-sm mb-2">{title}</div>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ResultCard;
