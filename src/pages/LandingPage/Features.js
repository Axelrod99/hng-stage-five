import React from "react";
import recordings from "../../assets/icons/record-circle.svg";
import sendIcon from "../../assets/icons/send-2.svg";
import revisit from "../../assets/icons/refresh-square-2.svg";
import vid from "../../assets/images/Video Repository.png";

const Features = () => {
  const feats_Array = [
    {
      title: "Simple Screen Recording",
      content:
        "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
      image: recordings,
    },
    {
      title: "Easy-to-Share URL",
      content:
        "Share your recordings instantly with a single link. No attachments, no downloads.",
      image: sendIcon,
    },
    {
      title: "Revisit Recordings",
      content:
        "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
      image: revisit,
    },
  ];

  return (
    <div>
      <div className="px-[30px] relative z-[999] mb-[80px]">
        <div className="flex flex-col items-center pt-[80px]">
          <p className="text-[#141414] font-bold text-[40px]">Features</p>
          <p className="text-[#616163] text-[20px]">
            Key Highlights of Our Extension
          </p>
        </div>

        <div className="flex w-full pt-[64px]">
          <div className="w-full flex flex-col gap-[48px]">
            {feats_Array.map((items) => (
              <div className="flex gap-[16px]">
                <div className="flex justify-center mt-2 items-center h-[48px] w-[48px] rounded-[30px] bg-[#413C6D]">
                  <img src={items.image} />
                </div>

                <div className="flex flex-col w-[80%]">
                  <p className="text-[28px] font-bold text-[#1B233D]">
                    {items.title}
                  </p>
                  <p className="text-[20px] text-[#616163]">{items.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full">
            <img src={vid} />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F4F6F8] h-[55px]" />
    </div>
  );
};

export default Features;
