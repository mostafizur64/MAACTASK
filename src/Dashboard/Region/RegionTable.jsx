import React, { useState } from "react";
import searchImg from "../../assets/image/Dashboard/region/search.png";
import { useLocation } from "react-router-dom";
const RegionTable = ({ regions }) => {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const hideItem = location.pathname.includes("/dashboard/area");

  return (
    <div className="px-6 ">
      <div className=" bg-white mt-12 rounded-lg">
        {/* search option ============= */}
        <div className="py-10 md:mr-4">
          <div className="flex items-center justify-end gap-4">
            <div className="relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search..."
                className="text-[#74788D] text-[18px] md:w-[227px] w-full h-[36px] rounded-xl border px-8"
              />
              <img
                className="absolute top-3 left-3"
                src={searchImg}
                alt="search"
              />
            </div>
            <select
              name="cars"
              id="cars"
              className="w-[290px] h-[36px] border rounded-xl text-[#74788D] text-[18px] px-4"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto border">
          <table className="w-full ">
            <thead className="bg-[#E6E6E6] text-left text-[16px] text-[#000000]">
              {" "}
              {/* Add text-left class */}
              <tr>
                <th className="py-2 px-8 w-[35px] ">
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    className="w-[18px] h-[18px]"
                  />
                </th>
                <th className=" py-2 px-8 w-[35px]">Sl. No.</th>
                <th className=" py-2 w-[35px]">Region</th>
               {hideItem && <th className=" py-2 ">Area</th>}
              </tr>
            </thead>
            <tbody className="text-[18px] text-[#495057]">
              {regions
                .slice(0, 11)
                .filter((item) => {
                  return (
                    search.trim() === "" ||
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.name.toUpperCase().includes(search.toUpperCase())
                  );
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td className="border-b py-2 px-8 w-[10%]">
                      {" "}
                      <input
                        type="checkbox"
                        id="check"
                        name="check"
                        className="w-[18px] h-[18px]"
                      />
                    </td>
                    <td className="border-b py-2 px-8 w-[10%]">{index + 1}</td>
                    <td className="border-b py-2  w-[10%]">{item.name}</td>
                    <td className="border-b py-2 w-full">
                      {item.region?.name}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegionTable;
