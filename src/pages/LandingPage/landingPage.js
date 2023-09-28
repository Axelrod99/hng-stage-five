import React from "react";
import Header from "../../components/Header";
import vector2 from "../../assets/images/grid.136a9256d16888900db0.svg.png";
import image3 from "../../assets/images/woman-using-smartphone-technology 2.png";
import grid1 from "../../assets/images/AdobeStock_362497671 1.png";
import grid2 from "../../assets/images/AdobeStock_400053098 1.png";
import vector1 from "../../assets/images/grid.136a9256d16888900db0.svg (1).png";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />

      <div className="relative z-[999]">
        <div className="flex w-full h-[95vh] items-center px-[50px]">
          <div className="w-[45%] flex justify-center ">
            <div className="w-full flex flex-col gap-[48px] ">
              <div className="flex flex-col gap-[20px] w-[80%]">
                <p className="text-[64px] font-bold text-[#141414] leading-[60px]">
                  Show Them <br /> Don't Just Tell
                </p>
                <p className="text-[20px]">
                  Help your friends and loved ones by creating and sending
                  videos on how to get things done on a website.
                </p>
              </div>
              <button className="bg-[#120B48] text-white w-[236px] h-[65px] rounded-[8px]">
                Install HelpMeOut
              </button>
            </div>
          </div>

          <div className="w-[55%] flex relative top-5 gap-1">
            <div className="flex flex-col gap-[14px]">
              <div className="w-[80%]">
                <img className="rounded-[8px]" src={grid1} />
              </div>
              <div className="relative w-[80%]">
                <img className="" src={vector1} />
                <img className="rounded-[8px] absolute top-3" src={grid2} />
              </div>
            </div>

            <div className="relative bottom-[50px]">
              <img src={vector2} />
              <img
                className="absolute top-[45px] rounded-[8px] right-[40px]"
                src={image3}
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F4F6F8] h-[55px]" />
      </div>
      <Features />
      <HowItWorks/>


      <Footer/>
    </div>
  );
};

export default LandingPage;
