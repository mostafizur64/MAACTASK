import React from "react";

import img1 from "../../assets/image/Brand/Aven.png";
import img2 from "../../assets/image/Brand/Amara.png";
import img3 from "../../assets/image/Brand/Circle.png";
import img4 from "../../assets/image/Brand/Kyan.png";
import img5 from "../../assets/image/Brand/Treva.png";

const BrandItem = () => {
  return (
    <div className="">
      <div className="md:flex justify-between items-center md:mt-[64px] mt-8 md:space-y-0 space-y-12">
        <img
          src={img1}
          alt="aven"
          className="mx-auto md:border-none border-dashed border md:p-0 p-10 md:w-[160px] w-full"
        />
        <img
          src={img2}
          alt="amara"
          className="mx-auto md:border-none border-dashed border md:p-0 p-10 md:w-[170px] w-full"
        />
        <img
          src={img3}
          alt="Circle"
          className="mx-auto md:border-none border-dashed border md:p-0 p-10 md:w-[170px] w-full"
        />
        <img
          src={img4}
          alt="Kyan"
          className="mx-auto md:border-none border-dashed border md:p-0 p-10 md:w-[170px] w-full"
        />
        <img
          src={img5}
          alt="Treva"
          className="mx-auto md:border-none border-dashed border md:p-0 p-10 md:w-[170px] w-full"
        />
      </div>
    </div>
  );
};

export default BrandItem;
