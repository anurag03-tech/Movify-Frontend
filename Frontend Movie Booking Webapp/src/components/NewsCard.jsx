import React from "react";

const NewsCard = () => {
  return (
    <div className="w-full h-20 flex ">
      <div className="w-1/6 h-full bg-red-600">
        <img></img>
      </div>
      <div className="w-5/6 p-2 flex flex-col self-center">
        <span className="block">25.03.2022</span>
        <span className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          commodi quasi, amet beatae
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
