import React, { useState, useEffect } from "react";
import axios from '../../Axios/Axios'

function DoctorProfile() {
    const [Doctor, setDoctor] = useState([]);

    useEffect(() => {
        const doctor = JSON.parse(localStorage.getItem('doctorToken'));
        const doctorToken = doctor.doctorToken
        const doctorId = doctor.doctorId
        axios.get(`/doctor/getDoctorDetails/${doctorId}`,{headers:{'doctortoken':doctorToken}}).then((response) => {
          if (response.data.success) {
            setDoctor(response.data.doctor);
          }
        });
      }, []);
    
  return (
    <div className="bg-[#D6E8EE]  w-screen border-b-2 border-black ">
        <div className=" pt-5">
            <h1 className="text-center font-serif text-2xl font-semibold">Your Profile</h1>
        </div>
    <div className=" flex justify-center content-center">
      <div className="   px-4 pb-10 sm: sm:flex sm:flex-row ">
        <div className="bg-slate-300   mt-[50px] sm:mt-[70px] mx-40 sm:mx-4   ">
          <div className="flex justify-center">
            <img className="h-72 w-72" src={Doctor.doctorImg} alt="" />
          </div>

          <div className="bg-[#EDF4FE] ">
            <h1 className="text-center p-8">
              {" "}
              {Doctor.fName} {Doctor.lName}
            </h1>
          </div>
        </div>

        <div className="w-[600px] mt-7 sm:mt-[70px] bg-[#EDF4FE] pb-10 p-10 ">
          <div className="mb-4 sm:flex  ">
            <span className="block sm:pr-6 text-gray-700 font-medium mb-2  text-center">
              Specialization
            </span>
            <div className="bg-white bg-opacity-60 p-2  text-center sm:text-start w-full">
              {Doctor.specialization}
            </div>
          </div>
          <div className="mb-4 sm:flex ">
            <span className="block text-gray-700 text-center sm:text-start font-medium mb-2 sm:pr-[50px]">
              Education
            </span>
            <div className="bg-white bg-opacity-60 text-center sm:text-start p-2 w-full">
              {Doctor.education}
            </div>
          </div>
          <div className="mb-4 sm:flex ">
            <span className="block text-gray-700  text-center sm:text-start font-medium mb-2 sm:pr-[44px]">
              Experiance
            </span>
            <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
              {Doctor.experience}
            </div>
          </div>
          <div className="mb-4 sm:flex bg-opacity-60  ">
            <span className="block text-center sm:text-start text-gray-700  font-medium mb-2 sm:pr-[60px]">
              Location
            </span>
            <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
              {Doctor.location}
            </div>
          </div>
          <div className="mb-4 sm:flex ">
            <span className="block text-center sm:text-start text-gray-700  font-medium mb-2 sm:pr-[61px]">
              Address
            </span>
            <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
              {Doctor.address}
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default DoctorProfile
