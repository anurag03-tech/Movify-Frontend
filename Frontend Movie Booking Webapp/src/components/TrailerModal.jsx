import React from "react";

const TrailerModal = ({
  trailerId = "kQDd1AhGIHk",
  movieName = "Movie Title",
  onClose,
}) => {
  if (!trailerId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative max-w-3xl w-full">
        <button
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">{movieName}</h2>
        <iframe
          className="w-full h-[450px] rounded-lg"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&modestbranding=1&rel=0`}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
