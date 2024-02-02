import React, { useEffect, useState } from "react";
import Breadcrumb from "../Shared/Breadcrumb";
import regionImg from "../../assets/image/Dashboard/region/undraw_Login_re_4vu2 1.png";
import { Link } from "react-router-dom";
import RegionTable from "./RegionTable";
import { useAuth } from "../../Providers/AuthContext";

const Region = () => {
  const [loading, setLoading] = useState(true);
  const [regions, setRegions] = useState([]);

  const { authState } = useAuth();

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        if (!authState.token) {
          throw new Error(
            "You are not logged in! Please log in to get access."
          );
        }

        const response = await fetch(
          "https://staging-api.erpxbd.com/api/v1/region/20/1",
          {
            headers: {
              Authorization: `Bearer ${authState.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch regions");
        }

        const data = await response.json();
        console.log(data.region);
        setRegions(data.region || []); // Ensure data is an array or default to an empty array
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setRegions([]); // Reset regions to an empty array if there's an error
        setLoading(false);
      }
    };

    fetchRegions();
  }, [authState.token]);

  return (
    <div className="py-8 h-screen">
      {console.log(regions)}
      {/* top items =========== */}
      <div className="flex items-center justify-between md:ml-10">
        {/* left side ==================== */}
        <div>
          <div>
            <h2 className="text-[#0C1D37] text-2xl">Region List</h2>
          </div>
          <div className="mt-2">
            <Breadcrumb />
          </div>
        </div>

        {/* right side ========================== */}
        <div>
          <Link to="/dashboard/region/createRegion">
            <button className="px-6 py-3 bg-[#0B2E4E] text-white font-normal rounded-lg text-[18px]">
              + Create New
            </button>
          </Link>
        </div>
      </div>

      {/* region content ===================== */}

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
                  <Link to="/dashboard/region/createRegion">Create Region</Link>
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

export default Region;
