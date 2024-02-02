import React, { useEffect, useRef } from "react";
import logo from "../assets/image/logo/logo.svg";
import Container from "../component/Container/Container";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleStickyHeader = () => {
    const headerElement = headerRef.current;
    if (headerElement) {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerElement.classList.add("sticky_header");
        } else {
          headerElement.classList.remove("sticky_header");
        }
      });
    }
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <div className="border-b border-[#C2D2EB] py-[20px]">
      <Container>
        <header className="header flex items-center" ref={headerRef}>
          <div className="container">
            <div className="flex items-center justify-between">
              {/* logo   */}
              <div>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              {/* right nav  */}
              <div>
                <div className="flex items-center justify-center md:gap-4 gap-2">
                  <Link to="/login">
                    <button className="btn">Login</button>
                  </Link>
                  <Link to="/registration">
                    <button className="btn">Registration</button>
                  </Link>
                </div>
                {/* <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointerF" />
              </span> */}
              </div>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
