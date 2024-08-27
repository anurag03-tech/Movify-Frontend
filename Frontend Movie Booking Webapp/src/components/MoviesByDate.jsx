import React, { useState } from "react";
import Select from "react-select";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import Slider from "react-slick";
import moviesData from "../utils/mockData";

// Custom styles for react-select
const customStyles = {
  container: (provided) => ({
    ...provided,
    margin: "0.5rem",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #d1d5db", // Tailwind gray-300
    boxShadow: "none",
    borderRadius: "0.375rem", // Tailwind rounded-md
    "&:hover": {
      border: "1px solid #3b82f6", // Tailwind blue-500
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6b7280", // Tailwind gray-500
  }),
  input: (provided) => ({
    ...provided,
    margin: "0", // Remove any default margin to align text input correctly
    padding: "0", // Remove default padding if needed
  }),

  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#e5e7eb", // Tailwind gray-200
    margin: "2px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#1f2937", // Tailwind gray-800
    margin: "2px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#ef4444", // Tailwind red-500
    ":hover": {
      backgroundColor: "#fef2f2", // Tailwind red-50
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    flexWrap: "wrap", // Ensure values wrap properly
  }),
};

const DisplayDay = styled.div.attrs({
  className: "h-full px-4 flex items-center justify-center text-3xl ",
})``;

const MoviesByDate = () => {
  const data = moviesData;
  // Options for each select
  const slotOptions = [
    { value: "Morning", label: "Morning" },
    { value: "Afternoon", label: "Afternoon" },
    { value: "Evening", label: "Evening" },
    { value: "Night", label: "Night" },
  ];

  const theaterOptions = [
    { value: "Theater 1", label: "Theater 1" },
    { value: "Theater 2", label: "Theater 2" },
    { value: "Theater 3", label: "Theater 3" },
  ];

  const cityOptions = [
    { value: "Delhi", label: "Delhi" },
    { value: "Noida", label: "Noida" },
    { value: "Gurgaon", label: "Gurgaon" },
  ];

  // State for selected options
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedTheaters, setSelectedTheaters] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 6,
  };

  return (
    <div className="w-full h-auto mt-8 p-2 flex flex-col border-2 border-black">
      <div className="flex justify-center p-2">
        <div className=" w-auto mx-1 p-0 border-2 border-blue-100 flex rounded-lg bg-gray-200 ">
          <div className="grid grid-cols-2 grid-rows-1 gap-1 p-1 w-auto h-full">
            <div className="flex flex-col gap-1">
              <DisplayDay>25 August</DisplayDay>
              <DisplayDay>2024</DisplayDay>
            </div>
            <DisplayDay className="border-l-2 border-white">Sunday</DisplayDay>
          </div>
        </div>
        <div className="h-full bg-white flex justify-center">
          {[11, 12, 13, 14, 15, 16, 17].map((day) => (
            <div
              key={day}
              className="h-full bg-red-200 p-8 mx-2 rounded-lg cursor-pointer"
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto px-5 bg-slate-100 flex flex-col lg:flex-row lg:justify-between">
        <div className="flex items-center h-max m-2 pl-2 bg-gray-300 rounded-md">
          <i className="p-1 fas fa-search"></i>
          <input
            placeholder="Search Movies"
            className="h-full border w-full p-2 border-gray-300 ml-1 px-2 rounded-md bg-white text-gray-800 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex ">
          <div className=" flex">
            <label htmlFor="slots" className="self-center">
              Slots
            </label>
            <Select
              id="slots"
              isMulti
              options={slotOptions}
              value={selectedSlots}
              onChange={setSelectedSlots}
              styles={customStyles}
              placeholder="Select Slots"
            />
          </div>

          <div className=" flex">
            <label htmlFor="theaters" className="self-center">
              Theaters
            </label>
            <Select
              id="theaters"
              isMulti
              options={theaterOptions}
              value={selectedTheaters}
              onChange={setSelectedTheaters}
              styles={customStyles}
              placeholder="Select Theaters"
            />
          </div>

          <div className=" flex">
            <label htmlFor="city" className="self-center">
              City
            </label>
            <Select
              id="city"
              options={cityOptions}
              value={selectedCity}
              onChange={setSelectedCity}
              styles={customStyles}
              placeholder="Select City"
            />
          </div>
        </div>
      </div>

      <div className=" py-5 px-6 rounded-lg">
        <div className="w-full h-auto my-1 py-1 px-2 flex rounded-xl bg-slate-200">
          <div className="text-xl px-4">Theater Name</div>
          <div className="h-full flex px-2 border-l-2 border-white cursor-pointer">
            <i className="py-1 px-2 text-2xl fas fa-map-marker-alt"></i>
            <span className="self-center">Address</span>
          </div>
        </div>

        <div className="">
          <Slider {...settings} className="">
            {data.map((item, idx) => (
              <MovieCard url={item.imageUrl} id={idx} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MoviesByDate;
