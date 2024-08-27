import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import moviesData from "../utils/mockData";

const CommingSoon = () => {
  const data = moviesData;
  return (
    <div className="w-full h-auto px-16 py-8">
      <div className="flex justify-between p-2 py-7">
        <span className="font-medium text-3xl">Comming soon</span>
        <span className="font-medium text-lg cursor-pointer">
          <Link to="/comming-soon">
            see more
            <i className="fas fa-arrow-right fa-1x px-2" />
          </Link>
        </span>
      </div>

      <div className="h-full flex justify-between">
        <MovieCard
          url={data[0].imageUrl}
          title="movie Name"
          buttonText="Notify"
        ></MovieCard>
        <MovieCard
          url={data[1].imageUrl}
          title="movie Name"
          buttonText="Notify"
        ></MovieCard>
        <MovieCard
          url={data[2].imageUrl}
          title="movie Name"
          buttonText="Notify"
        ></MovieCard>
        <MovieCard
          url={data[3].imageUrl}
          title="movie Name"
          buttonText="Notify"
        ></MovieCard>
        <MovieCard
          url={data[4].imageUrl}
          title="movie Name"
          buttonText="Notify"
        ></MovieCard>
      </div>
    </div>
  );
};

export default CommingSoon;
