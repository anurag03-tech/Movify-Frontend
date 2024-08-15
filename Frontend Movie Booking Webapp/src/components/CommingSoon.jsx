import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="w-full h-auto px-16 py-8">
      <div className="flex justify-between p-2 py-7">
        <span className="font-medium text-3xl">Comming soon</span>
        <span className="font-medium text-lg cursor-pointer">
          <Link to="/comming-soon">see more</Link>
        </span>
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
