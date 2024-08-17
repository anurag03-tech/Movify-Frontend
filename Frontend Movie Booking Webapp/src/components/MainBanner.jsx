import React, { useState, useEffect, useRef } from "react";
import SlidingMovies from "./SlidingMovies";
import moviesData from "../utils/mockData";

const MainBanner = () => {
  const data = moviesData;
  const [playMovie, setPlayMovie] = useState(data[7]?.trailerID);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube IFrame API if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    } else {
      createPlayer();
    }

    return () => {
      // Cleanup the player when the component unmounts or playMovie changes
      if (playerRef?.current) {
        playerRef.current.destroy();
      }
    };
  }, [playMovie]);

  const createPlayer = () => {
    playerRef.current = new window.YT.Player("youtube-player", {
      videoId: playMovie,
      playerVars: {
        autoplay: 1,
        loop: 1,
        controls: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        fs: 0,
      },
      events: {
        onReady: (event) => {
          if (isMuted) {
            event.target.mute();
          }
        },
      },
    });
  };

  useEffect(() => {
    if (playerRef.current && typeof playerRef.current.mute === "function") {
      if (isMuted) {
        playerRef.current?.mute();
      } else {
        playerRef.current?.unMute();
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div>
      <div className="relative w-full overflow-hidden aspect-[16/9]">
        <div id="youtube-player" className="w-[300%] h-full ml-[-100%]"></div>
        <button
          onClick={toggleMute}
          className="absolute top-96 right-5 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"}`} />
        </button>
      </div>
      <SlidingMovies CurrPlayingMovie={[playMovie, setPlayMovie]} />
    </div>
  );
};

export default MainBanner;
