import React from "react";
import MovieCard from "./MovieCard";

const CurrentlyPlaying = () => {
  return (
    <div className="w-full h-auto p-16">
      <div className="flex justify-between px-2 py-7">
        <span className="font-medium text-3xl">Currently playing</span>
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

export default CurrentlyPlaying;
