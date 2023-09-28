import React from "react";
import logo1 from "../../assets/icons/iCON 7 1.svg";

const Header = () => {
  return (
    <div className="flex justify-between px-[70px] shadow font-semibold items-center">
      <div className="flex items-center font-bold gap-[8px] py-5">
        <img src={logo1} />
        <p className="text-[#100A42]">HelpMeOut</p>
      </div>

      <div className="flex gap-[35px]">
        <p>Features</p>
        <p>How it Works</p>
      </div>

      <div className="text-[18px]">
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Header;
