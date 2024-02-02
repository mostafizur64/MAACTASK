import React, { useEffect, useState } from "react";
import Breadcrumb from "../Shared/Breadcrumb";
import regionImg from "../../assets/image/Dashboard/region/undraw_Login_re_4vu2 1.png";
import { Link } from "react-router-dom";

import { useAuth } from "../../Providers/AuthContext";
import RegionTable from "../Region/RegionTable";
import { FaAngleRight } from "react-icons/fa6";

const Area = () => {
  const [loading, setLoading] = useState(true);
  const [regions, setRegions] = useState([]);

  const { authState } = useAuth();

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        if (!authState.token) {
          throw new Error("You are not logged in! Please log in to get access.");
        }

        const response = await fetch("https://staging-api.erpxbd.com/api/v1/area/All/5/1?name=Dhaka", {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch regions");
        }

        const data = await response.json();
        console.log(data,"................")
        setRegions(data.area || []);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegions();
  }, [authState.token]);

  return (
    <div className="py-8 h-screen">
      {/* top items =========== */}
      <div className="flex items-center justify-between md:ml-10">
        {/* left side ==================== */}
        <div>
          <div>
            <h2 className="text-[#0C1D37] text-2xl">Area List</h2>
          </div>

          {/* Breadcrumb=============== */}
          <div className="mt-2">
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
                      to="/dashboard/area"
                      className={
                        location.pathname === "/dashboard/area"
                          ? "text-blue-500"
                          : "text-gray-500"
                      }
                    >
                      <span className="text-[20px] font-medium">Geo List</span>
                    </Link>
                  </div>
                </li>
               
              </ol>
            </nav>
          </div>

        </div>

        {/* right side ========================== */}
        <div>
          <Link to="/dashboard/area/createArea">
            <button className="px-6 py-3 bg-[#0B2E4E] text-white font-normal rounded-lg text-[18px]">
              + Create New
            </button>
          </Link>
        </div>
      </div>

      {/* area content ===================== */}

      {loading ? (
        <p>Loading...</p>
      ) : regions.length === 0 ? (
        <div className="md:ml-16 h-full mb-10 py-10">
          <div className="bg-[#fff] md:ml-3 h-full">
            <div className="md:w-[298px] mx-auto flex flex-col items-center justify-center h-full">
              <img src={regionImg} alt="" />
              <h3 className="text-[20px] font-normal leading-6 mt-4">
                Currently you have no Data. For next step first{" "}
                <span className="text-[#556EE6]">
                  <Link to="/dashboard/region/createRegion">Create Area</Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <RegionTable regions={regions} />
      )}
    </div>
  );
};

export default Area;
