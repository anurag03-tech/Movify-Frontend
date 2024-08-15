import React from "react";
import MainBanner from "./MainBanner";
import CurrentlyPlaying from "./CurrentlyPlaying";
import CommingSoon from "./CommingSoon";
import PealsOfAzerbaijani from "./PealsOfAzerbaijani";
import AboutUs from "./AboutUs";
import LatestNews from "./LatestNews";

const Body = () => {
  return (
    <>
      <div className="">
        <MainBanner></MainBanner>
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
