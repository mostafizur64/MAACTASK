import React from "react";
import Container from "../../component/Container/Container";
import FeaturesItem from "./FeaturesItem";
const ProductFeatures = () => {
  return (
    <Container>
      <div className="md:mt-[100px] mt-8">
        <div className="text-center">
          <h3 className="text-titleColor md:text-[20px] text-[16px] font-medium md:leading-[26px]">
            Products Features
          </h3>
          <h2 className="text-headingColo md:text-[48px] text-[30px] font-bold md:leading-[62.4px] md:mt-[20px] mt-4">
            Make more out of your data
          </h2>
        </div>

        <div className="md:mt-[100px] mt-8">
          <FeaturesItem />
        </div>
        
         
      </div>
    </Container>
  );
};

export default ProductFeatures;
