import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const ResultCard = ({ title, link, thumbnail }) => {
  const { platform } = useContext(AppContext);
  return (
    platform === "youtube" ? (
 
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <a href={link} target="_blank">
          <div className="w-full aspect-video overflow-hidden">
            <img src={thumbnail} className="object-cover h-full w-full" />
          </div>
          <div className="flex flex-col justify-center items-center px-2 py-2  ">
            <div className="font-semibold text-sm mb-2 justify-normal">{title}</div>
          </div>
        </a>
      </div>

    ) : (
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
          <a href={link} target="_blank">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
          </a>
        </div>
      </div>
    )
  );
};

export default ResultCard;
