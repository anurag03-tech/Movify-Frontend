import React from "react";
import MovieCard from "../components/MovieCard";
import moviesData from "../utils/mockData";

const AllMovies = ({ category }) => {
  return (
    <div className="w-full h-auto px-4 py-8">
      <div className="flex justify-between p-2 py-7">
        <span className="font-medium text-2xl">{category}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {moviesData.map((movie, index) => (
          <MovieCard
            key={index}
            url={movie.imageUrl}
            buttonText={category == "Currently Playing" ? "Book" : "Notify"}
          />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
