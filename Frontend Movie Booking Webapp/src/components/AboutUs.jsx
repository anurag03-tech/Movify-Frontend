import React from "react";

const AboutUs = () => {
  return (
    <div className="">
      <div className="h-2 w-full bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50"></div>
      <div className="px-32 py-16 flex justify-between">
        <div className="w-[45%]">
          <img
            className="w-full"
            src="https://cdn.firespring.com/images/2823f1a1-a8b0-4986-a942-d4801e84d461.jpg"
          ></img>
        </div>
        <div className="w-[45%] flex-row self-center">
          <span className="block text-3xl font-medium ">About us</span>
          <span className="block pb-7 ">2008-2018</span>
          <span className="block font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            saepe soluta dicta ipsam pariatur repellat, animi at atque iste
            minus impedit. Aperiam eius perspiciatis aut ex repellat placeat.
            Perspiciatis, dolor?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Harum, sapiente.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
