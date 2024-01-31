import React from "react";
import { aboutItems } from "../../utils/aboutItem";

const AboutUsItem = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {aboutItems.map((item, index) => (
        <div key={item.id} className="flex flex-col items-center justify-center gap-4 md:mt-[152px] mt-12">
          {/* Render SVG icon directly as a component */}
          <span>{item.icon}</span>
           <p className="text-titleColor md:text-[40px] text-[30px] font-[800] md:leading-[60px] ">{item.text}</p>
          <h2 className="text-paragraphColor  md:text-[24px] text-[16px] font-[400] md:leading-[36px]">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AboutUsItem;
