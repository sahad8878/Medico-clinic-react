import React from "react";
import DoctorDashboard from "../../Components/DoctorHome/DoctorDashboard";
import DoctorSidebar from "../../Components/DoctorSidebar/DoctorSidebar";
import Footer from "../../Components/Footer/Footer";
import DoctorNavbar from "../../Components/Navbar/DoctorNavbar";
import TopNav from "../../Components/TopNav/TopNav";

function DoctorDashboardPage() {
  return (
   

<div>
<TopNav />
<DoctorNavbar />
<div className="bg-[#EDF4FE] mt-[112px]  md:mt-[127px]  w-screen  ">
  <div className="container flex mx-auto pt-16 py-14">
    <div className=" md:pl-10 lg:pl-32  md:block hidden ">
      <DoctorSidebar />
    </div>
    <div className="w-full  py-8 md:py-0  sm:pr-0">
    <div className="  bg-[#EDF4FE] bg-opacity-50 shadow-2xl   h-full p-5 ">
    <DoctorDashboard />
           </div>
    </div>
  </div>
</div>
<Footer />
</div>
  );
}

export default DoctorDashboardPage;
