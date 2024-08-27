// SeatMatrix.js
import React, { useState } from "react";

// Mock Data
const mockData = [
  {
    row: "A",
    seats: Array.from({ length: 8 }, (_, i) => ({
      id: `A${i + 1}`,
      number: `A${i + 1}`,
      status: "available",
    })),
  },
  {
    row: "B",
    seats: Array.from({ length: 15 }, (_, i) => ({
      id: `B${i + 1}`,
      number: `B${i + 1}`,
      status: i % 4 === 0 ? "taken" : "available",
    })),
  },
  {
    row: "C",
    seats: Array.from({ length: 14 }, (_, i) => ({
      id: `C${i + 1}`,
      number: `C${i + 1}`,
      status: i % 5 === 0 ? "taken" : "available",
    })),
  },
  {
    row: "D",
    seats: Array.from({ length: 15 }, (_, i) => ({
      id: `D${i + 1}`,
      number: `D${i + 1}`,
      status: i % 6 === 0 ? "taken" : "available",
    })),
  },
];

const SeatMatrix = ({ onClose, seatDetails }) => {
  const [selectedSeats, setSelectedSeats] = seatDetails;

  const handleSeatClick = (seat) => {
    if (seat.status === "taken") return;

    setSelectedSeats((prev) => {
      const updated = new Set(prev);
      updated.has(seat.id) ? updated.delete(seat.id) : updated.add(seat.id);
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full relative overflow-y-auto">
        <button
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold mb-4">Select Your Seats</h2>
        <div className="space-y-4">
          {mockData.map((rowData) => (
            <div
              key={rowData.row}
              className="flex items-center justify-center mb-2"
            >
              <span className="font-bold mr-2">{rowData.row}</span>
              <div className="flex flex-wrap gap-1">
                {rowData.seats.map((seat) => (
                  <div
                    key={seat.id}
                    className={`w-12 h-12 flex items-center justify-center border cursor-pointer ${
                      seat.status === "available"
                        ? selectedSeats.has(seat.id)
                          ? "bg-yellow-300 border-blue-500 border-2"
                          : "bg-green-300"
                        : "bg-red-300 cursor-not-allowed"
                    }`}
                    onClick={() => handleSeatClick(seat)}
                    style={{
                      pointerEvents: seat.status === "taken" ? "none" : "auto",
                    }}
                  >
                    {seat.number}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="font-semibold">Selected Seats:</p>
          <div className="flex flex-wrap gap-2">
            {[...selectedSeats].map((seatId) => (
              <span
                key={seatId}
                className="bg-blue-300 px-3 py-1 rounded text-white"
              >
                {
                  mockData
                    .flatMap((row) => row.seats)
                    .find((seat) => seat.id === seatId)?.number
                }
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
