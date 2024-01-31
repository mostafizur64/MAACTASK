import React from "react";
import aboutUs from "../../assets/image/aboutUs/aboutUs.png";
import Container from "../../component/Container/Container";

import avatar from "../../assets/image/aboutUs/avater.png";
import aboutLeftSideImg from "../../assets/image/aboutUs/aboutLeftSideImg.png";
import AboutUsItem from "./AboutUsItem";
const AboutUs = () => {
  return (
    <div
      className="md:mt-[140px] mt-8"
      style={{
        backgroundImage: `url(${aboutUs})`,
        backgroundPosition: "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="md:py-[140px] py-12">
          <div className=" md:flex items-center justify-between md:gap-[146px]">
            {/* left side content  ===============*/}
            <div className="md:w-1/2 w-full">
              <img src={aboutLeftSideImg} alt="aboutLeftSideImg" />
            </div>

            {/* right side content ================ */}
            <div className="md:w-1/2 w-full text-center">
              <h3 className="text-[#0052CC] md:text-[20px] text-[12px] font-[600] leading-[26px]">
                About Us
              </h3>

              <h2 className="text-headingColor font-bold md:text-[40px] text-[30px] md:leading-[60px] md:mt-[20px] mt-4">
                A dedicated solution for startups and enterprises
              </h2>

              <p className="md:text-[20px] text-[12px] font-normal md:leading-[32px] md:py-[40px] py-4 border-b-2 ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <div className="flex items-center md:gap-[48px] md:py-[40px] py-12">
                <img src={avatar} alt="avatar" />
                <div className="">
                  <h3 className="text-paragraphColor md:text-[22px] text-[16px] font-[500] md:leading-[32.2px]">
                    "Fieldx is for teams that care about their product growth."
                  </h3>
                  <h3 className="text-headingColor md:text-[22px] text-[16px] font-[700] md:leading-[32.2px] mt-2">
                    CEO, FieldX
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* about items center ============= */}
          <div>
            <AboutUsItem />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
