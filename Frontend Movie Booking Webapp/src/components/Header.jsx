import React from "react";
import ProfileDropdown from "./ProfileDropdown";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-12 w-full p-1 px-5 bg-white  absolute  z-10 flex justify-between border-b-2 border-slate-200">
      <div className="text-Black w-auto h-full p-1 flex">
        <Link to="/">
          <img src={Logo} className="h-full w-auto"></img>
        </Link>
        <div className="px-5 font-medium">
          <Link to="/currently-playing">
            <span className="m-2">Currently Playing</span>
          </Link>
          <Link to="/comming-soon">
            <span className="m-2">Comming Soon</span>
          </Link>
          <Link to="/about">
            <span className="m-2">About</span>
          </Link>
        </div>
      </div>

      <ProfileDropdown></ProfileDropdown>
    </div>
  );
};

export default Header;
