import React, { useState } from "react";
import moviesData from "../utils/mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled, { createGlobalStyle } from "styled-components";

// Global styles for slider
const GlobalStyle = createGlobalStyle`
  .slider .slick-slide {
    transition: transform 0.5s ease; /* Smooth transition for scaling */
  }
  .slider .slick-center {
    transform: scale(1.5); /* Enlarge the center slide */
  }
  .slider .slick-slide:not(.slick-center) {
    opacity: 1; /* Slightly dim non-center slides for emphasis */
  }
`;

// Styled components with Tailwind classes
const Container = styled.div.attrs({
  className: "h-72 w-full absolute z-10 top-3/4",
})``;

const SliderWrapper = styled(Slider).attrs({
  className: "slider",
})``;

const SlideContainer = styled.div.attrs({
  className:
    "relative h-72 px-6 transition-transform duration-500 ease-in-out group",
})``;

const SlideImage = styled.img.attrs({
  className: "absolute bottom-5 w-[70%] h-52 cursor-pointer object-cover",
})``;

const Button = styled.button.attrs({
  className:
    "flex w-24 items-center justify-center px-2 py-1 text-base font-medium leading-6 text-white bg-black border border-white rounded-md shadow-sm hover:bg-white hover:text-black hover:border-black focus:outline-none absolute top-14 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
})``;

const SlidingMovies = () => {
  const data = moviesData;
  const [playMovie, setPlayMovie] = useState(data[4]?.imageUrl);

  const handleMovieChange = (item) => {
    console.log(item.imageUrl);
    setPlayMovie(item.imageUrl);
  };

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "5%",
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SliderWrapper {...settings}>
          {data.map((item) => (
            <SlideContainer
              key={item.movieId}
              onClick={() => handleMovieChange(item)}
            >
              <SlideImage src={item.imageUrl} alt={item.movieId} />
              <Button>Book Now</Button>
            </SlideContainer>
          ))}
        </SliderWrapper>
      </Container>
    </>
  );
};

export default SlidingMovies;
