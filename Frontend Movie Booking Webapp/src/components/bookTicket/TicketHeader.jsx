import React from "react";
import ticketLogo from "../../assets/ticketLogo.png";

const TicketHeader = () => {
  return (
    <div className="w-full py-2 px-5 text-4xl flex justify-center bg-blue-100">
      <div
        style={{ fontFamily: "Agbalumo, sans-serif" }}
        className="flex justify-center"
      >
        <img src={ticketLogo} className="w-2/3" alt="Ticket Logo" />
        <span className="absolute self-center pb-5">TICKET</span>
      </div>
    </div>
  );
};

export default TicketHeader;
