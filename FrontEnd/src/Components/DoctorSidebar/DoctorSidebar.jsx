import React from 'react'
import { Link } from 'react-router-dom';
import profile from "../../Assets/user.png";

function DoctorSidebar() {
  return (
    <div className="bg-[#EDF4FE] bg-opacity-50 shadow-2xl     sm:mx-4   ">
    <div className="flex justify-center flex-col text-center  ">
      <div className="p-7 mt-2 rounded-lg mx-2 h-72 w-64 shadow-xl">
        <img
          class="w-52 h-52 mb-3 rounded-full shadow-lg"
          src={profile}
          alt="Bonnie image"
        />
        <h1>docor maria</h1>
      </div>
  
        <Link to='/doctor'>
      <div className="p-2 mt-2 uppercase rounded-lg mx-2  hover:bg-white text-white  bg-[#194569] hover:text-black">
        Dahsboard
      </div>
        </Link>
        <Link to="/doctor/DoctorProfilePage">
      <div className="p-2 my-2 rounded-lg mx-2 hover:bg-white text-white  bg-[#194569] hover:text-black">
        Details
      </div>
        </Link>
        <Link to="/doctor/DoctorSchedulePage">
      <div className="p-2 mb-3 rounded-lg mx-2  hover:bg-white text-white  bg-[#194569] hover:text-black">
        schedule
      </div>
      </Link>
      <Link to="/doctor/DoctorAppointmentsPage">
      <div className="p-2 mb-3 rounded-lg mx-2  hover:bg-white text-white  bg-[#194569] hover:text-black">
        Appointments
      </div>
      </Link>
    </div>
  </div>
  )
}

export default DoctorSidebar
