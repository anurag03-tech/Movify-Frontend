import React, { useState } from "react";
import TrailerModal from "./TrailerModal"; // Ensure the path is correct
import moviesData from "../utils/mockData";
import { Link } from "react-router-dom";

const MovieCard = ({ url, title, buttonText }) => {
  const [showModal, setShowModal] = useState(false);
  const [trailerId, setTrailerId] = useState(null);

  // For demonstration, assuming trailerId is hardcoded or fetched
  const trailerData = moviesData[0]?.trailerID; // Replace with actual trailer ID fetching logic
  const movieName = title || "Movie Title";

  const handleTrailerClick = () => {
    console.log("Trailer button clicked"); // Debugging
    if (trailerData) {
      setTrailerId(trailerData); // Set the trailer ID
      setShowModal(true); // Show the modal
    } else {
      console.error("No trailer ID found"); // Debugging
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
    setTrailerId(null); // Clear the trailer ID
  };

  return (
    <div className="relative flex-1 bg-slate-500 m-2 max-h-[350px] group cursor-pointer">
      <img
        src={url || moviesData[0].imageUrl}
        alt={title || "Movie"}
        className="w-full h-full object-cover"
      />
      <div className="p-3 absolute inset-0 flex flex-col justify-between items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl mb-4 text-center">
          {title || "Movie Title"}
        </h3>
        <div className="w-full flex flex-col items-center">
          <button
            className="bg-red-500 text-white py-2 px-5 rounded hover:bg-red-600"
            onClick={handleTrailerClick}
          >
            <i className="fas fa-play fa-lg"></i> <span>Trailer</span>
          </button>
          <div>
            <Link to={buttonText == "Book" ? "/book" : ""}>
              <button className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-600">
                <i className="fas fa-ticket-alt fa-lg pr-1"> </i>
                <span>{buttonText}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <TrailerModal
          trailerId={trailerId}
          movieName={movieName}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MovieCard;
