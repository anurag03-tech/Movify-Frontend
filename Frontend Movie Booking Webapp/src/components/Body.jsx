import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import CommingSoon from "./CommingSoon";
import PealsOfAzerbaijani from "./PealsOfAzerbaijani";
import AboutUs from "./AboutUs";
import LatestNews from "./LatestNews";
import MainBanner from "./MainBanner";
import MoviesByDate from "./MoviesByDate";

const Body = () => {
  return (
    <>
      <div className="">
        <MainBanner></MainBanner>
        <MoviesByDate></MoviesByDate>
        <CurrentlyPlaying></CurrentlyPlaying>
        <CommingSoon></CommingSoon>
        <PealsOfAzerbaijani></PealsOfAzerbaijani>
        <LatestNews></LatestNews>
        <AboutUs></AboutUs>
      </div>
    </>
  );
};

export default Body;
