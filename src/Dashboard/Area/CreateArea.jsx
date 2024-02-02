import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useAuth } from "../../Providers/AuthContext";

const CreateArea = () => {
  const { authState } = useAuth();
  const { user, token } = authState;

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.regionSelect.value;
    const area = form.area.value;
    const data = { name, area: area.trim() };
    console.log(data, "=====================");
    setLoading(true);

    try {
      const res = await fetch(`https://staging-api.erpxbd.com/api/v1/area`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authState.token}`,
        },
        body: JSON.stringify(data),
      });
      const results = await res.json();

      if (!res.ok) {
        throw new Error(results.message);
      }

      setLoading(false);
      toast.success("Area Created Successfully!");
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="py-8 h-screen">
      {/* Top items */}
      <div className="flex items-center justify-between md:ml-10">
        {/* Left side */}
        <div>
          <div>
            <h2 className="text-[#0C1D37] text-2xl">Create Area</h2>
          </div>
          {/* Breadcrumb */}
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
                    <Link to="/dashboard/area" className="text-gray-500">
                      <span className="text-[20px] font-medium">Geo List</span>
                    </Link>
                  </div>
                </li>
                <FaAngleRight className="text-[#77838F] w-[18px] h-[18px]" />
                <li>
                  <div className="flex items-center">
                    <Link
                      to="/dashboard/area/createArea"
                      className="text-blue-500"
                    >
                      <span className="text-[20px] font-medium">
                        Create Geo
                      </span>
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Right side */}
        <div>
          <Link to="/dashboard/region/createArea">
            <button className="px-6 py-2 bg-[#0B2E4E] text-white font-normal rounded-lg text-[18px]">
              + Create New
            </button>
          </Link>
        </div>
      </div>

      {/* Area content */}
      <div className="md:ml-16 h-full mb-10 py-10">
        <div className="md:w-[475px] w-full md:py-[48px] py-4 mx-auto flex flex-col items-center justify-center  bg-[#fff] ">
          <form onSubmit={handleSubmit}>
            <div className="text-[24px]">
              <label
                htmlFor="regionSelect"
                className="text-[#0C1D37] block mb-2"
              >
                Region
              </label>
              <select
                id="regionSelect"
                name="regionSelect"
                className="md:w-[379px] border border-gray-300 rounded-md py-3 px-6 focus:outline-none focus:border-blue-500 text-[20px] mt-4"
              >
                <option value="Panchagarh">Panchagarh</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Barisal">Barisal </option>
                <option value="Faridpur">Faridpur </option>
                <option value="Feni">Feni </option>
                <option value="Tongi">Tongi </option>
                <option value="Josore">Josore </option>
                <option value="Sathkhira">Sathkhira </option>
              </select>
            </div>
            <div className="text-[24px] mt-8">
              <label htmlFor="area" className="text-[#0C1D37] block mb-2">
                Area
              </label>
              <input
                id="area"
                name="area"
                type="text"
                className="md:w-[379px] border border-gray-300 rounded-md py-3 px-6 focus:outline-none focus:border-blue-500 text-[20px] mt-4"
                placeholder="Type region"
              />
            </div>
            <div className="flex items-center justify-end py-12">
              <button
                type="submit"
                className="md:w-[193px] font-normal text-white rounded-lg bg-[#0B2E4E] text-[24px] py-[14px] px-[12px]"
              >
                Add Area
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateArea;
