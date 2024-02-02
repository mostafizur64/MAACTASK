import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 font-normal">
        <li>
          <div className="flex items-center">
            <Link to="#">
              <span className="text-[20px] font-medium text-gray-500 hover:text-gray-700">
                Geo
              </span>
            </Link>
          </div>
        </li>
        <FaAngleRight className="text-[#77838F] w-[18px] h-[18px]" />
        <li>
          <div className="flex items-center">
            <Link
              to="/dashboard/region"
              className={location.pathname === "/dashboard/region" ? "text-blue-500" : "text-gray-500"}
            >
              <span className="text-[20px] font-medium">
                Geo List
              </span>
              
             
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
