import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const defaultPhotoUrl =
  "https://cdn.pixabay.com/photo/2017/08/30/06/29/avatar-2692173_960_720.gif"; // Animated GIF URL

const UserProfile = () => {
  // Sample state for demonstration
  const [user, setUser] = useState({
    photoUrl: "", // Set this to '' or null to use the default animated photo
    name: "Anurag Singh",
    email: "anurag@example.com",
    mobileNumber: "9999999999",
    bookedTickets: [
      {
        id: 1,
        ticketNumber: "T123456",
        movie: "Action Packed Thrills",
        date: "2024-08-26",
        time: "2:00 PM",
        price: "₹500",
        theater: "Theater 1",
        city: "Delhi",
        state: "Delhi",
        timeSlot: "2:00 PM - 4:00 PM",
        seatNumbers: ["A1", "A2"],
      },
      {
        id: 2,
        ticketNumber: "T654321",
        movie: "Another Movie",
        date: "2024-09-01",
        time: "6:00 PM",
        price: "₹700",
        theater: "Theater 2",
        city: "Noida",
        state: "Uttar Pradesh",
        timeSlot: "6:00 PM - 8:00 PM",
        seatNumbers: ["B5", "B6"],
      },
    ],
  });

  const handleDeleteAccount = () => {
    // Logic to handle account deletion
    alert("Account deleted");
  };

  const handleUpdateMobileNumber = (e) => {
    e.preventDefault();
    // Logic to update mobile number
    alert("Mobile number updated");
  };

  return (
    <div className="w-full h-auto bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* User Info Section */}
        <div className="flex items-center space-x-4 justify-center">
          <img
            src={user.photoUrl || defaultPhotoUrl}
            alt="User Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <div>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Update Mobile Number */}
        <form onSubmit={handleUpdateMobileNumber} className="mt-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            value={user.mobileNumber}
            onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your mobile number"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Update
          </button>
        </form>

        {/* Account Deletion */}
        <div className="mt-6 flex items-center space-x-2">
          <button
            onClick={handleDeleteAccount}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            <i className="fas fa-trash-alt mr-2"></i> Delete Account
          </button>
        </div>

        {/* Booked Tickets Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Booked Tickets</h2>
          <div className="space-y-4">
            {user.bookedTickets.length > 0 ? (
              user.bookedTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200"
                >
                  <div className="relative border border-gray-300 rounded-lg bg-white p-4 shadow-md">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-gray-300 rounded-lg"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col items-center mb-4">
                        <span className="text-2xl font-bold text-gray-800">
                          {ticket.movie}
                        </span>
                        <span className="text-sm text-gray-600 italic">
                          {ticket.date} | {ticket.time}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            Ticket Number:
                          </span>
                          <span className="text-gray-600">
                            {ticket.ticketNumber}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            Price:
                          </span>
                          <span className="text-gray-600">{ticket.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            Theater:
                          </span>
                          <span className="text-gray-600">
                            {ticket.theater}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            City:
                          </span>
                          <span className="text-gray-600">{ticket.city}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            State:
                          </span>
                          <span className="text-gray-600">{ticket.state}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            Time Slot:
                          </span>
                          <span className="text-gray-600">
                            {ticket.timeSlot}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            Seats:
                          </span>
                          <span className="text-gray-600">
                            {ticket.seatNumbers.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No tickets booked yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
