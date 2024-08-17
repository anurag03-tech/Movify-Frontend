import React from "react";

const BookTicket = () => {
  const imageUrl =
    "https://i0.wp.com/teaser-trailer.com/wp-content/uploads/2018/11/Wonder-Park-Movie-poster-1.jpg?resize=384%2C600&ssl=1";
  return (
    <div className="w-full h-auto p-10 flex">
      <div className="w-1/2 p-5">
        <img className="w-full" src={imageUrl}></img>
      </div>
      <div className="w-1/2 m-5 border-2 border-blue-700"></div>
    </div>
  );
};

export default BookTicket;
