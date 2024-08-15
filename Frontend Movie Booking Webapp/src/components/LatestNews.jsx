import React from "react";
import NewsCard from "./NewsCard";

const LatestNews = () => {
  return (
    <div className="px-16 py-6">
      <span className="px-16 font-medium text-3xl">Latest News</span>
      <div className="p-16 flex justify-between">
        <div className="w-[50%] h-[400px] flex flex-col justify-evenly">
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
        </div>
        <div className="w-[45%] h-[400px] bg-slate-900">
          <img
            className="w-full h-full object-cover"
            src="https://www.geeky-gadgets.com/wp-content/uploads/2017/09/Jumanji-Wlecome-To-The-Jungle.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
