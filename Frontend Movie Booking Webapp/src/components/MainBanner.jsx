import React, { useState } from "react";
import SlidingMovies from "./SlidingMovies";
import moviesData from "../utils/mockData";

const MainBanner = () => {
  const data = moviesData;
  const [playMovie, setPlayMovie] = useState(data[7]?.trailerID);

  return (
    <div>
      <div className="relative w-full overflow-hidden aspect-[16/9] pointer-events-none">
        <iframe
          src={`https://www.youtube.com/embed/${playMovie}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${playMovie}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[300%] h-full ml-[-100%]"
        ></iframe>
      </div>
      <SlidingMovies CurrPlayingMovie={[playMovie, setPlayMovie]} />
    </div>
  );
};

export default MainBanner;
