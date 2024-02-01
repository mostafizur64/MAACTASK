import React from "react";
import Container from "../component/Container/Container";
import logo from "../assets/image/Footer/footerLogo.png";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#00193D]">
      <Container>
        <div className="py-12">
          <div className="text-center  space-y-8">
            {/* logo =========== */}
            <div className="flex items-center justify-center ">
              <img src={logo} alt="logo" className="text-white" />
            </div>
            <p className="md:w-[516px] w-full mx-auto text-[#fff] md:text-[16px] text-[12px] font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque.
            </p>
            {/* social icons  */}
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#fff] rounded-full w-[40px] h-[40px] flex items-center justify-center hover:scale-110 duration-300">
                <Link to="https://twitter.com/">
                  <FaTwitter className="h-5 w-5" />
                </Link>
              </div>
              <div className="bg-[#fff] rounded-full w-[40px] h-[40px] flex items-center justify-center hover:scale-110 duration-300">
                <Link to="https://www.linkedin.com/">
                  <FaLinkedinIn className="h-5 w-5" />
                </Link>
              </div>
              <div className="bg-[#fff] rounded-full w-[40px] h-[40px] flex items-center justify-center hover:scale-110 duration-300">
                <Link to="https://www.facebook.com/">
                  <FaFacebookF className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
