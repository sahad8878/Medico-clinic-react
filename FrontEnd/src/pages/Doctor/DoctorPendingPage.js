import React from "react";
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar'
import Footer from '../../Components/Footer/Footer'
import TopNav from '../../Components/TopNav/TopNav'


function DoctorPendingPage() {
  return (
    <>
    <TopNav/>
    <DoctorNavbar/>
    <div className="flex flex-col md:flex-row mt-[110px]  md:mt-[129px]">
      <div className="  w-full   bg-[#EDF4FE]  flex justify-center content-center">
        <div className="p-20 px-46 lg:p-44">
          <h1 className=" text-4xl font-serif font-bold ">
            Your request has not been approved yet. After verification you will
            get notification
          </h1>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default DoctorPendingPage;
