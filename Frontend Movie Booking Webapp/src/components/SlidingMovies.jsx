import MovieCard from "./MovieCard";
import moviesData from "../utils/mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlidingMovies = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 7,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 500,
    className: "slider",
    arrows: false,
  };

  return (
    <div className="h-72 w-[98%] absolute z-10 top-[420px]">
      <Slider {...settings}>
        {moviesData.map((item, idx) => (
          <div
            key={item.movieId}
            className="relative h-72 px-8  transition-transform duration-500 ease-in-out"
          >
            <div className="absolute bottom-0 w-[70%] h-52  bg-white opacity-50"></div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slider .slick-slide {
          transition: transform 0.5s ease; /* Smooth transition for scaling */
        }
        .slider .slick-center {
          transform: scale(1.5, 2.2); /* Enlarge the center slide */
        }
        .slider .slick-slide:not(.slick-center) {
          opacity: 1; /* Slightly dim non-center slides for emphasis */
        }
      `}</style>
    </div>
  );
};

export default SlidingMovies;
