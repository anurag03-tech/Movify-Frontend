import React from "react";
import styled from "styled-components";

const Profile = styled.div.attrs({
  className:
    "w-auto h-full py-2 border border-gray-400 rounded-full flex items-center cursor-pointer text-black bg-gray-100 ",
})``;

const DropdownMenu = styled.div.attrs({
  className:
    "absolute w-full p-1 max-w-[200px] border-x-2 border-b-2 border-gray-300 bg-white rounded-md invisible group-hover:visible cursor-pointer",
})``;

const DropdownItem = styled.div.attrs({
  className:
    " py-2 px-2 border-gray-300 flex items-center hover:bg-gray-100 cursor-pointer",
})``;

const ProfileDropdown = () => {
  return (
    <div className="relative group">
      <Profile>
        <img
          className="w-10 h-10 mx-1 rounded-full"
          src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
          alt="User photo"
        />
        <span className="text-base font-semibold">Anurag Singh</span>
        <i className="p-2 fas fa-chevron-down self-center"></i>
      </Profile>
      <DropdownMenu>
        <DropdownItem className="border-b">
          <i className="fas fa-user  me-3"></i>
          Profile
        </DropdownItem>
        <DropdownItem className="border-b ">
          <i className="fas fa-moon me-3"></i>
          Dark Mode
        </DropdownItem>
        <DropdownItem className="border-0">
          <i className="fas fa-sign-out-alt me-2 "></i>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
