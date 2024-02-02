import React from "react";

import featuresImg from "../../assets/image/ProductFeatures/FeaturesPhone.svg";
import featuresPhoneBg from "../../assets/image/ProductFeatures/featurePhoneBg.svg";
import icons from "../../assets/image/ProductFeatures/icon.svg";

const FeaturesMiddleContent = () => {
  return (
    <div className="bg-titleColor md:w-[548px] md:h-[548px] w-[330px] h-[330px] rounded-full ">
      <div className="h-full ">
        <div
          className="flex items-center justify-center h-full bg-center bg-no-repeat"
          style={{
            // backgroundImage: `url(${featuresPhoneBg})`,
            //   background: " rgba(5, 44, 104, 0.20)",
            //   filter: " blur(38px)",
          }}
        >
          <img className="bg px-2 md:w-[372px] w-full" src={featuresImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesMiddleContent;
