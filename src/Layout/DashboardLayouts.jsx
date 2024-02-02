import React from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import DNavbar from "../Dashboard/dNavbar/dNavbar";
import DFooter from "../Dashboard/Shared/DFooter";

const DashboardLayouts = () => {
  return (
    <div>
      <div className="px-2">

        {/*Dashboard Navbar ============= */}
        <DNavbar/>

        {/* sidebar and body content  */}
        <div className="md:flex ">
          <div className="">
            <Sidebar />
          </div>

          <div className="w-full">
            <div className="text-2xl font-semibold flex-1   bg-[#FAFAFB]">
              <Outlet />
             
             {/* DFooter =================== */}
             <DFooter/>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default DashboardLayouts;
