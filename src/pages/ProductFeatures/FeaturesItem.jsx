import React from "react";
import icons from "../../assets/image/ProductFeatures/icon.svg";
// features items
import { firstItems, secondItems } from "../../utils/items";
import FeaturesMiddleContent from "./FeaturesMiddleContent";

const FeaturesItem = () => {
  return (
    <div className="md:flex items-center justify-between md:gap-6 mt-[120px] md:space-y-0 space-y-56">
      {/* left side  */}
      <div className="flex flex-col justify-center gap-8">
        {firstItems.map((item) => (
          <div
          key={item.id}
          className="md:w-[280px] w-full flex flex-col  md:items-end items-center md:text-right text-center md:border-none border-dashed border md:p-0 p-2 "
          >
            <div
              className="rounded-[16px] bg-[#FFF] w-[72px] h-[72px] flex items-center justify-center"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <img src={icons} alt="icons" className="" />
            </div>
            <h2 className="text-headingColor md:text-[26px] text-[18px] font-bold md:py-[20px] py-2 md:leading-[33.6px]">
              Real-time analytics
            </h2>
            <p className="text-paragraphColor md:text-[16px] text-[12px] font-normal md:leading-[25.6px]">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        ))}
      </div>

      {/* middle side  */}
      <div>
        <FeaturesMiddleContent />
      </div>

      {/* right side  */}
      <div className="flex flex-col justify-center gap-8 ">
        {firstItems.map((item) => (
          <div
            key={item.id}
            className="md:w-[280px] w-full flex flex-col  md:items-end items-center md:text-right text-center md:border-none border-dashed border md:p-0 p-2 "
          >
            <div
              className="rounded-[16px] bg-[#FFF] w-[72px] h-[72px] flex items-center justify-center"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <img src={icons} alt="icons" className="" />
            </div>
            <h2 className="text-headingColor md:text-[26px] text-[18px] font-bold md:py-[20px] py-2 md:leading-[33.6px]">
              Real-time analytics
            </h2>
            <p className="text-paragraphColor md:text-[16px] text-[12px] font-normal md:leading-[25.6px]">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesItem;
