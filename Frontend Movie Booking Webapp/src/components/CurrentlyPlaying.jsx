import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const CurrentlyPlaying = () => {
  return (
    <div className="w-full h-auto px-16 py-8">
      <div className="flex justify-between px-2 py-7">
        <span className="font-medium text-3xl">Currently playing</span>
        <span className="font-medium text-lg cursor-pointer">
          <Link to="/currently-playing">see more</Link>
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

export default CurrentlyPlaying;
