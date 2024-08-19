import React, { useRef, useCallback, useState } from "react";
import moviesData from "../utils/mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// Global styles for slider
const GlobalStyle = createGlobalStyle`
  .slider .slick-slide {
    transition: transform 0.5s ease;
  }
  .slider .slick-center {
    transform: scale(1.5);
  }
  .slider .slick-slide:not(.slick-center) {
    opacity: 0.8;
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

const PlayIcon = styled.i.attrs({
  className:
    "fas fa-play-circle absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100",
})``;

const Button = styled.button.attrs({
  className:
    "flex w-24 items-center justify-center px-2 py-1 text-base font-medium leading-6 text-white bg-black border border-white rounded-md shadow-sm hover:bg-white hover:text-black hover:border-black hover:font-semibold focus:outline-none absolute top-14 left-1/2 transform -translate-x-1/2 opacity-1 transition-opacity duration-300 ",
})``;

const SlidingMovies = ({ CurrPlayingMovie }) => {
  const data = moviesData;
  const [playMovie, setPlayMovie] = CurrPlayingMovie;
  const sliderRef = useRef(null);

  // Update playMovie based on the center slide
  const updatePlayMovie = useCallback(() => {
    const centerIndex = sliderRef.current.innerSlider.state.currentSlide;
    setPlayMovie(data[centerIndex].trailerID);
  }, [data, setPlayMovie]);

  // Handle slide change
  const handleAfterChange = useCallback(() => {
    updatePlayMovie();
  }, [updatePlayMovie]);

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
    afterChange: handleAfterChange,
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
        <SliderWrapper ref={sliderRef} {...settings}>
          {data.map((item) => (
            <SlideContainer key={item.movieId}>
              <SlideImage src={item.imageUrl} alt={item.movieId} />
              {playMovie == item.trailerID ? (
                <Link to="/book">
                  <Button>Book Now</Button>
                </Link>
              ) : (
                <PlayIcon />
              )}
            </SlideContainer>
          ))}
        </SliderWrapper>
      </Container>
    </>
  );
};

export default SlidingMovies;
