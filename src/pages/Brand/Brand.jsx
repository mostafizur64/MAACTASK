import React from "react";
import Container from "../../component/Container/Container";
import BrandItem from "./BrandItem";

const Brand = () => {
  return (
    <Container>
      <div className="text-center md:py-[140px] py-10">
        <h2 className="text-[#0052CC] md:text-[30px] text-[20px] font-[600] leading-[26px]">5,000+ high-impact teams rely on Fieldx</h2>
        {/* brand items ========= */}
        <div>
            <BrandItem/>
        </div>
      </div>
    </Container>
  );
};

export default Brand;
