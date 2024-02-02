import React, { useState } from "react";
import downArrow from "../../assets/image/Faq/arrowUp.png";
import avatar from "../../assets/image/Dashboard/user.png";
import logo from "../../assets/image/logo/logo.svg";
import { useAuth } from "../../Providers/AuthContext";
import { FaAngleDown } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
const DNavbar = () => {
  const navigate = useNavigate();

  const { authState, logout } = useAuth();
  const { user, token } = authState;
  const [isOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOutsideClick = () => {
    setIsOpen(false);
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-[#fff] flex items-center justify-between py-6 px-6 ">
      {/* left side ================ */}

      <div className="md:ml-16 flex items-center gap-4">
        <div className="md:hidden -ml-6">
          <button
            onClick={toggleMenu}
            className="text-textColor focus:outline-none focus:text-gray-500"
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* right side ======================= */}
      <div>
        <div className="flex items-center gap-4 text-[#555B6D]">
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <span className="flex items-center gap-2">
            <h3>{user?.name}</h3>
            <img
              onClick={toggleDropdown}
              className={`w-[13px] h-[13px] transform ${
                isOpen ? "rotate-180 " : ""
              }`}
              src={downArrow}
              alt="downArrow"
            />
          </span>
          {isOpen && (
            <div
              className="absolute z-10 top-20 p-4 w-48 bg-white rounded-lg shadow-lg"
              onClick={handleOutsideClick}
            >
              {/* Dropdown content goes here */}
              <ul>
                <Link onClick={handleLogout}>Logout</Link>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* for mobile devices  */}
      <div
        className={`space-y-4 px-16 py-7 mt-24 bg-[#060B27]  h-screen cursor-pointer flex flex-col gap-4 text-white text-xl ${
          isMenuOpen
            ? "block fixed top-0 right-0 left-0 bottom-0 h-1/3 z-50"
            : "hidden"
        }`}
      >
        <Link to="/dashboard/region">Region</Link>
        <Link to="/dashboard/area">Area</Link>
      </div>
    </div>
  );
};

export default DNavbar;
