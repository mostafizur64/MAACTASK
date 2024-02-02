import React from "react";
import tablet from "../../assets/image/banner/bannerTablet.png";
import phone from "../../assets/image/banner/bannerPhone.png";
import Container from "../../component/Container/Container";
const BannerOverView = () => {
  return (
    <div className=" border-b md:py-32 py-8">
      <Container>
        <div className="md:py-10 py-6 relative md:px-[20px] md:-mt-[630px] -mt-[680px] md:flex items-center justify-center">
          <img src={tablet} alt="" className="" />
          <img
            className="md:absolute -bottom-16 right-40 md:mt-0 mt-4 md:w-[323px] w-full"
            src={phone}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default BannerOverView;
