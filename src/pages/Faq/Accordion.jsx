import React, { useState } from "react";
import arrowUp from "../../assets/image/Faq/arrowUp.png";
import arrowDown from "../../assets/image/Faq/arrowDown.png";
import {
  firstAccordionData,
  secondAccordionData,
} from "../../utils/accordionData";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:flex w-full gap-8 md:py-20 py-8">

      <div className=" w-full space-y-4">
        {firstAccordionData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-white mt-4 md:mt-0"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer text-headingColor text-16"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-md font-normal">{item.title}</h2>
              <img
                src={openIndex === index ? arrowUp : arrowDown}
                alt=""
                className="w-4 h-4"
              />
            </div>
            {openIndex === index && (
              <div className="p-4 text-paragraphColor font-normal leading-6 text-start">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full space-y-4">
        {secondAccordionData.map((item,) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md bg-white mt-4 md:mt-0"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer text-headingColor text-16"
              onClick={() => toggleAccordion(item.id)}
            >
              <h2 className="text-md font-normal">{item.title}</h2>
              <img
                src={openIndex === item.id ? arrowUp : arrowDown}
                alt=""
                className="w-4 h-4"
              />
            </div>
            {openIndex === item.id && (
              <div className="p-4 text-paragraphColor font-normal leading-6 text-start">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
