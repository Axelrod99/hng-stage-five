import React from "react";
import logo1 from "../../assets/icons/iCON 7 1.svg";

const Header = () => {
  return (
    <div className="flex justify-between px-[40px] lg:px-[70px] shadow font-semibold items-center">
      <div className="flex items-center font-bold gap-[8px] py-5">
        <img src={logo1} />
        <p className="text-[#100A42]">HelpMeOut</p>
      </div>

      <div className="gap-[35px] hidden sm:flex">
        <p className="cursor-pointer">Features</p>
        <p className="cursor-pointer">How it Works</p>
      </div>

      <div className="text-[18px]">
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Header;
