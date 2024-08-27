import React, { useState, useEffect } from "react";
import styled from "styled-components";
import calendarIcon from "../assets/calendarIcon.png";
import SeatMatrix from "./SeatMatrix"; // Import the SeatMatrix component
import SelectDetails from "./bookTicket/SelectDetails";
import TicketHeader from "./bookTicket/ticketHeader";

const mockDataSeats = [
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

const mockData = {
  movie: {
    name: "Action Packed Thrills",
    imageUrl:
      "https://i0.wp.com/teaser-trailer.com/wp-content/uploads/2018/11/Wonder-Park-Movie-poster-1.jpg?resize=384%2C600&ssl=1",
    description:
      "An exciting action film with thrilling sequences and edge-of-your-seat moments.",
  },
  cities: [
    {
      value: "Delhi",
      label: "Delhi",
      theaters: [
        {
          value: "Theater 1",
          label: "Theater 1",
          availableDates: [
            {
              day: "12",
              month: "Aug",
              weekday: "Mon",
              slots: [
                { value: "10-12", label: "10:00 AM - 12:00 PM" },
                { value: "2-4", label: "2:00 PM - 4:00 PM" },
              ],
            },
            {
              day: "13",
              month: "Aug",
              weekday: "Tue",
              slots: [
                { value: "12-2", label: "12:00 PM - 2:00 PM" },
                { value: "4-6", label: "4:00 PM - 6:00 PM" },
              ],
            },
          ],
        },
        {
          value: "Theater 2",
          label: "Theater 2",
          availableDates: [
            {
              day: "14",
              month: "Aug",
              weekday: "Wed",
              slots: [
                { value: "10-12", label: "10:00 AM - 12:00 PM" },
                { value: "6-8", label: "6:00 PM - 8:00 PM" },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "Noida",
      label: "Noida",
      theaters: [
        {
          value: "Theater 3",
          label: "Theater 3",
          availableDates: [
            {
              day: "15",
              month: "Aug",
              weekday: "Thu",
              slots: [
                { value: "2-4", label: "2:00 PM - 4:00 PM" },
                { value: "6-8", label: "6:00 PM - 8:00 PM" },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "Gurgaon",
      label: "Gurgaon",
      theaters: [
        {
          value: "Theater 4",
          label: "Theater 4",
          availableDates: [
            {
              day: "16",
              month: "Aug",
              weekday: "Fri",
              slots: [
                { value: "10-12", label: "10:00 AM - 12:00 PM" },
                { value: "2-4", label: "2:00 PM - 4:00 PM" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const DateContainer = styled.div.attrs({
  className:
    "h-16 w-16 bg-white rounded-lg self-center grid grid-rows-3 border-2 border-black font-medium",
})``;

const DateBox = styled.div.attrs({
  className: "flex items-center rounded-lg justify-center bg-red-50",
})``;

const MonthBox = styled.div.attrs({
  className: "flex items-center justify-center pb-2 bg-red-50",
})``;

const DayBox = styled.div.attrs({
  className:
    "flex items-center rounded-b-lg justify-center pt-[2px] border-t-[1px] border-black bg-white",
})``;

const BookTicket = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState(null);
  const [showSeatMatrix, setShowSeatMatrix] = useState(false);
  const [isPayButtonDisabled, setIsPayButtonDisabled] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  useEffect(() => {
    // Enable the pay button only when all selections are made and seats are selected
    if (
      selectedCity &&
      selectedTheater &&
      selectedDate &&
      selectedSlots &&
      selectedSeats.size > 0
    ) {
      setIsPayButtonDisabled(false);
    } else {
      setIsPayButtonDisabled(true);
    }
  }, [
    selectedCity,
    selectedTheater,
    selectedDate,
    selectedSlots,
    selectedSeats,
  ]);

  const { movie, cities } = mockData;

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setSelectedTheater(null);
    setSelectedDate(null);
    setSelectedSlots(null);
    setSelectedSeats(new Set()); // Reset seats when city changes
  };

  const handleTheaterChange = (selectedOption) => {
    setSelectedTheater(selectedOption);
    setSelectedDate(null);
    setSelectedSlots(null);
    setSelectedSeats(new Set()); // Reset seats when theater changes
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedSlots(null);
    setSelectedSeats(new Set()); // Reset seats when date changes
  };

  const handleSlotChange = (selectedOption) => {
    setSelectedSlots(selectedOption);
  };

  const currentCity = cities.find((city) => city.value === selectedCity?.value);
  const currentTheaterOptions = currentCity ? currentCity.theaters : [];
  const currentTheater = currentTheaterOptions.find(
    (theater) => theater.value === selectedTheater?.value
  );
  const currentDateOptions = currentTheater
    ? currentTheater.availableDates
    : [];
  const currentDate = currentDateOptions.find(
    (date) =>
      date.day === selectedDate?.day && date.month === selectedDate?.month
  );
  const currentSlotOptions = currentDate ? currentDate.slots : [];

  return (
    <div className="w-full h-auto px-10 py-16 flex">
      <div className="w-1/3 px-4">
        <img className="w-full" src={movie.imageUrl} alt="Movie Poster" />
      </div>
      <div className="w-3/4 border-2 flex flex-col border-blue-700">
        <TicketHeader />

        <div className="w-full py-5 px-5 text-2xl flex justify-center font-semibold">
          <span className="py-1">Movie Name:</span>
          <span className="font-bold px-2 py-1 rounded-lg bg-green-100">
            {movie.name}
          </span>
        </div>

        <div className="flex justify-evenly font-medium py-3 px-2">
          <SelectDetails
            label="City"
            id="city"
            options={cities}
            value={selectedCity}
            onChange={handleCityChange}
            placeholder="Select City"
          />
          <SelectDetails
            label="Theater"
            id="theater"
            options={currentTheaterOptions}
            value={selectedTheater}
            onChange={handleTheaterChange}
            placeholder="Select Theater"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex gap-3 p-2">
            <div className="h-16 rounded-lg">
              <img src={calendarIcon} className="h-full" alt="Calendar Icon" />
            </div>
            {currentDateOptions.map((date, index) => (
              <button
                key={index}
                className={`p-1 rounded-lg ${
                  selectedDate === date ? "bg-blue-300" : ""
                }`}
                onClick={() => handleDateClick(date)}
              >
                <DateContainer>
                  <DateBox>{date.day}</DateBox>
                  <MonthBox>{date.month}</MonthBox>
                  <DayBox>{date.weekday}</DayBox>
                </DateContainer>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-evenly font-medium py-3 px-2">
          <SelectDetails
            label="Slot"
            id="slot"
            options={currentSlotOptions}
            value={selectedSlots}
            onChange={handleSlotChange}
            placeholder="Select Slot"
          />
        </div>

        <div className="p-1 flex justify-center ">
          <button
            className="p-2 bg-gray-200 rounded-md flex gap-2"
            onClick={() => setShowSeatMatrix(true)}
          >
            <span className="flex pl-2 self-cente text-lg font-semibold">
              Seats
            </span>
            <div className="flex">
              <div className="flex flex-wrap gap-2">
                {[...selectedSeats].map((seatId) => (
                  <span
                    key={seatId}
                    className="bg-black px-3 py-1 rounded text-white self-center"
                  >
                    {
                      mockDataSeats
                        .flatMap((row) => row.seats)
                        .find((seat) => seat.id === seatId)?.number
                    }
                  </span>
                ))}
              </div>
            </div>
          </button>
        </div>

        <div className="p-4 flex justify-center font-bold">
          <button
            className={`py-2 px-5 rounded-md border-2 border-black ${
              isPayButtonDisabled
                ? "bg-gray-200 cursor-not-allowed opacity-40"
                : "bg-yellow-200"
            }`}
            disabled={isPayButtonDisabled}
          >
            Pay ₹{selectedSeats.size == 0 ? 500 : 500 * selectedSeats.size}
          </button>
        </div>

        <div className="bg-blue-100 p-2 flex justify-center">
          <i className="py-1 px-2 text-2xl fas fa-map-marker-alt self-center"></i>
          <span className="self-center">Address</span>
        </div>
      </div>
      {showSeatMatrix && (
        <SeatMatrix
          onClose={() => setShowSeatMatrix(false)}
          seatDetails={[selectedSeats, setSelectedSeats]}
        />
      )}
    </div>
  );
};

export default BookTicket;
