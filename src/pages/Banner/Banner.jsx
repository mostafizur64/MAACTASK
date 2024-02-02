import React from "react";
import Container from "../../component/Container/Container";
import BannerOverView from "./BannerOverView";
import bannerBg from '../../assets/image/banner/banner-bg.png'
import Navbar from "../../Shared/Navbar";
const Banner = () => {
  return (
    <>
      <div className="bg-slate-500 bg-opacity-15 h-[900px]" style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundPosition: "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
       
          <Navbar/>
        <Container className="">
          {/* Content */}
          <div className="max-w-[863px] mx-auto text-center md:py-32 py-4">
            
            {/* Adjust the margin-top as needed */}
            <h2 className="text-headingColor md:text-[58px] text-[30px] font-bold md:leading-[75px] ">
              Analytics that transform your product inside-out
            </h2>
            <div className="flex gap-6 items-center justify-center md:mt-[48px] md:py-0 py-4">
              <button className="btn btn1 text-[20px]">Request for Demo</button>
              <button className="btn btn1 text-[20px]">Download</button>
            </div>
          </div>
        </Container>
      </div>
      {/* bannerOverView Components  */}
   
    </>
  );
};

export default Banner;
