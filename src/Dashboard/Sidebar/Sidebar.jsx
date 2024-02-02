import { useState } from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartSimple,
  FaMicrosoft,
  FaLocationDot,
  FaFileInvoiceDollar,
  FaCalendarDays,
  FaBriefcase,
  FaFacebookMessenger, 
  FaBell,
  FaRegSun,
  FaFilter,
  FaArrowRightFromBracket,
  FaAlignLeft,
} from "react-icons/fa6";
import locationImg from "../../assets/image/Dashboard/location.svg";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let path = location.pathname;
  if (path === "/dashboard") {
    path = location.pathname.slice(1);
  } else {
    path = location.pathname.slice(11);
  }
  return (
    <div
      className={`${
        open ? "md:w-[318px]" : "w-[100px]"
      }  relative bg-[#FFF] duration-1000 shadow-lg p-0 md:flex flex-col md:h-full `}
    >
      <div className="flex-1 hidden md:block">
        <div className={` mt-8 ml-4 ${open ? "" : ""}`}>
          <span className="text-xl text-[#6A7187]"> MENU</span>
        </div>
        <FaAngleLeft
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 h-7 p-1 bg-black text-white ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        ></FaAngleLeft>

        <ul className="mt-12 space-y-[10px] hidden md:block">
          <li>
            <span
             
              className={` flex items-center gap-x-4  ml-3 text-[#757575] `}
            >
              <div
                className={`text-[24px] cursor-pointer duration-500 text-center `}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                    stroke="#757575"
                    stroke-width="1.5"
                  />
                  <path
                    d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
                    stroke="#757575"
                    stroke-width="1.5"
                  />
                </svg>
              </div>

              <div
                className={` font-normal text-[20px] duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Geo Information
              </div>
            </span>
          </li>
          <li>
            <NavLink
              to="/dashboard/region"
              className={({ isActive }) =>
                isActive
                  ? `flex items-center gap-x-4  ml-3 text-[#605BFF] border-r-[#4A58EC] border-r-8
                    `
                  : `flex items-center gap-x-4 ml-3`
              }
            >
              <div
                className={` font-normal text-[20px] duration-300 ml-10 ${
                  !open && "scale-0"
                }`}
              >
                Region
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/area"
              className={({ isActive }) =>
                isActive
                  ? `flex items-center gap-x-4  ml-3 text-[#605BFF] border-r-[#4A58EC] border-r-8
                    `
                  : `flex items-center gap-x-4 ml-3`
              }
            >
              <div
                className={` font-normal text-[20px] duration-300 ml-10 ${
                  !open && "scale-0"
                }`}
              >
                Area
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
