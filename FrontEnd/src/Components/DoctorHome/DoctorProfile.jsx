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
    // <div className="bg-[#D6E8EE]  w-screen border-b-2 border-black ">
    <div>
              <div className=" ">
            <h1 className="text-center font-serif text-2xl font-semibold my-5 ">Details</h1>
        </div>
     <div className="container mx-auto   ">
        <div className="flex justify-center content-center ">
          {/*  */}
          {/* <div className="w-full md:w-5/12 px-3 flex justify-center lg:justify-end">
            <div className="bg-[#EDF4FE]     sm:mx-4   ">
              <div className="flex justify-center flex-col text-center  ">
                <img
                  className="h-60 sm:h-72 sm:w-80 "
                  src={Doctor.doctorImg}
                  alt=""
                />

                <h1 className="text-center p-5 ">
                  {Doctor.fName} {Doctor.lName}
                </h1>
              </div>
            </div>
          </div> */}
          {/*  */}
          <div className="w-full  py-8 md:py-0 px-3">
            <div className="lg:w-[600px]  bg-[#EDF4FE] shadow-2xl pb-10 p-5 sm:p-10 ">
              <div className="mb-4 flex   ">
                <span className="block pr-6 text-gray-700 font-medium mb-2  text-center">
                  Specialization
                </span>
                <div className="bg-white bg-opacity-60 p-2  text-center sm:text-start w-full">
                  {Doctor.specialization}
                </div>
              </div>
              <div className="mb-4 flex ">
                <span className="block text-gray-700 text-center sm:text-start font-medium mb-2 pr-[50px]">
                  Education
                </span>
                <div className="bg-white bg-opacity-60 text-center sm:text-start p-2 w-full">
                  {Doctor.education}
                </div>
              </div>
              <div className="mb-4 flex ">
                <span className="block text-gray-700  text-center sm:text-start font-medium mb-2 pr-[44px]">
                  Experiance
                </span>
                <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
                  {Doctor.experience}
                </div>
              </div>
              <div className="mb-4 flex bg-opacity-60  ">
                <span className="block text-center sm:text-start text-gray-700  font-medium mb-2 pr-[60px]">
                  Location
                </span>
                <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
                  {Doctor.location}
                </div>
              </div>
              <div className="mb-4 flex ">
                <span className="block text-center sm:text-start text-gray-700  font-medium mb-2 pr-[61px]">
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
   
  </div>
  )
}

export default DoctorProfile
