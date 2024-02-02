import React, { useState } from "react";
import downArrow from "../../assets/image/Faq/arrowUp.png";
import avatar from "../../assets/image/Dashboard/user.png";
import logo from "../../assets/image/logo/logo.svg";
import { useAuth } from "../../Providers/AuthContext";
import { FaAngleDown } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const DNavbar = () => {
  const navigate = useNavigate();

  const { authState, logout } = useAuth();
  const { user, token } = authState;
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <div className="bg-[#fff] flex items-center justify-between py-6 px-6 ">
      {/* left side ================ */}

      <div className="md:ml-16">
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
    </div>
  );
};

export default DNavbar;
