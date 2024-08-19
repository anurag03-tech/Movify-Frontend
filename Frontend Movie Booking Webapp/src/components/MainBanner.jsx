import React, { useState, useEffect, useRef } from "react";
import SlidingMovies from "./SlidingMovies";
import moviesData from "../utils/mockData";

const textOutline = {
  textShadow: `
    1px 1px 0 #000, 
    -1px -1px 0 #000, 
    1px -1px 0 #000, 
    -1px 1px 0 #000
  `,
};

const MainBanner = () => {
  const data = moviesData;
  const [playMovie, setPlayMovie] = useState(data[0]?.trailerID);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    // load the YouTube IFrame API if not loaded
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
      // cleanup the player when the component unmount or playMovie changes
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
        playlist: playMovie, // for looping
        controls: 1,
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
      <div className="relative w-full overflow-hidden aspect-[16/9] -top-10">
        <div id="youtube-player" className="w-[300%] h-full ml-[-100%]"></div>
        <div className=" absolute top-52 w-2/5 p-5 h-auto flex flex-col text-white">
          <span className="text-6xl font-bold py-5 " style={textOutline}>
            The Grand Adventure
          </span>
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            error vero, rem, magni eveniet excepturi est impedit vitae eligendi
            cum molestiae.
          </span>
        </div>
        <button
          onClick={toggleMute}
          className="absolute top-48 left-44 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"}`} />
        </button>
      </div>
      <SlidingMovies CurrPlayingMovie={[playMovie, setPlayMovie]} />
    </div>
  );
};

export default MainBanner;
