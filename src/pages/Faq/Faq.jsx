import React from "react";
import Container from "../../component/Container/Container";
import Accordion from "./Accordion";
import fagBg from '../../assets/image/Faq/faqBg.png'

const Faq = () => {
  return (
    <div className="bg-[#0052CC]" style={{
        backgroundImage: `url(${fagBg})`,
        backgroundPosition: "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Container>
        <div className="text-center text-white md:py-24"  >
          <h3 className=" md:text-[20px] text-[16px] font-medium md:leading-[26px]">
            Common Question
          </h3>
          <h2 className="md:text-[48px] text-[30px] font-bold md:leading-[62.4px] md:mt-[20px] mt-4">
            Frequently asked questions
          </h2>
          <div className="">
            <Accordion/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
