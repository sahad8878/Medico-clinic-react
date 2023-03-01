import React from 'react'
import DoctorDashboard from '../../Components/DoctorHome/DoctorDashboard'
import DoctorSidebar from '../../Components/DoctorSidebar/DoctorSidebar'
import Footer from '../../Components/Footer/Footer'
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar'
import TopNav from '../../Components/TopNav/TopNav'

function DoctorDashboardPage() {
  return (
    <div>
    <TopNav/>
    <DoctorNavbar/>
    <div className=" mt-[112px]  md:mt-[127px]">
      <div className="bg-[#EDF4FE]   w-screen  ">
        <div className="container mx-auto pt-16 my-11">
          <div className="flex pl-32 ">
           <DoctorSidebar/>
            <div className="w-full  py-8 md:py-0 pr-20">
              <div className="  bg-[#EDF4FE] bg-opacity-50 shadow-2xl   h-full flex justify-center ">
              <DoctorDashboard/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
  )
}

export default DoctorDashboardPage
