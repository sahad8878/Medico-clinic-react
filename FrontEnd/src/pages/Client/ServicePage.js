import React from 'react'
import TopNav from '../../Components/TopNav/TopNav'
import Navbar from '../../Components/Navbar/Navbar'
import SelectDepartments from '../../Components/ClientService/SelectDepartments'
import ExperiencedDoctors from '../../Components/ClientService/ExperiencedDoctor'
import Footer from '../../Components/Footer/Footer'
import Appointment from '../../Components/ClientService/Appointment'
function ServicePage() {
  return (
    <div>
        <TopNav/>
        <Navbar/>
        <div className=' mt-[112px]  md:mt-[127px]'>
         <SelectDepartments/>
         <ExperiencedDoctors/>
         <Appointment/>
         <Footer/>
        </div>
      

    </div>
  )
}

export default ServicePage
