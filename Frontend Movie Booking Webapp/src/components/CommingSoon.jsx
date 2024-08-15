import React from "react";
import MovieCard from "./MovieCard";

const CommingSoon = () => {
  return (
    <div className="w-full h-auto px-16">
      <div className="flex justify-between p-2 py-7">
        <span className="font-medium text-3xl">Comming soon</span>
        <span className="font-medium text-lg">see more</span>
      </div>

      <div className="flex justify-between">
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </div>
  );
};

export default CommingSoon;
