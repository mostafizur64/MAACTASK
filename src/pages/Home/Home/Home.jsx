import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Navbar from "../../../Shared/Navbar";
import backgroundImage from "../../../assets/image/banner/banner-bg.png"; // Verify the path to the image
import ProductFeatures from "../../ProductFeatures/ProductFeatures";
import BannerOverView from "../../Banner/BannerOverView";
import AboutUs from "../../AboutUs/AboutUs";
import Faq from "../../Faq/Faq";
import Brand from "../../Brand/Brand";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FieldX | Home</title>
      </Helmet>
      <div
      // className=""
      // style={{ backgroundImage: `url(${backgroundImage})` }} // Check if backgroundImage is correctly imported
      >
        {/* <Navbar /> */}
        <Banner />
        <BannerOverView/>
        <ProductFeatures />
        <AboutUs/>
        <Faq/>
        <Brand/>
        {/* Other content */}
      </div>
    </div>
  );
};

export default Home;
