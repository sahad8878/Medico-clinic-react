import React from 'react'
import DoctorHome from '../../Components/DoctorHome/DoctorHome'
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar'
import TopNav from '../../Components/TopNav/TopNav'
import Footer from '../../Components/Footer/Footer';


function DoctorHomePage() {
  return (
    <>
    <TopNav/>
    <DoctorNavbar/>
   <DoctorHome/>
   {/* <Footer/> */}
    </>
  )
}

export default DoctorHomePage
