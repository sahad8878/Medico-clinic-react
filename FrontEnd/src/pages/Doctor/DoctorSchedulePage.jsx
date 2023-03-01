import React from 'react'
import DoctorDashboard from '../../Components/DoctorHome/DoctorDashboard'
import DoctorTimeSchedule from '../../Components/DoctorHome/DoctorTimeSchedul'
import DoctorSidebar from '../../Components/DoctorSidebar/DoctorSidebar'
import Footer from '../../Components/Footer/Footer'
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar'
import TopNav from '../../Components/TopNav/TopNav'

function DoctorSchedulePage() {
  return (

    <div>
    <TopNav />
    <DoctorNavbar />
    <div className="bg-[#EDF4FE] mt-[100px]  md:mt-[127px]  w-screen  ">
      <div className="container flex mx-auto sm:pt-16 my-11">
        <div className=" pl-10 md:pl-32 hidden md:block  ">
          <DoctorSidebar />
        </div>
        <div className="w-full  shadow-lg  py-8 md:py-0 px-10  mr-14">
        <DoctorTimeSchedule/>
        </div>
      </div>
    </div>
    <Footer />
  </div>

  )
}

export default DoctorSchedulePage