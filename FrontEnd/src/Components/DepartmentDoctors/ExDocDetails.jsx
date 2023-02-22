import React,{useState,useEffect} from "react";
import image from '../../Assets/doctor.ico'
import {  useParams } from "react-router-dom";
import axios from "../../Axios/Axios"

function ExDocDetails() {
    const [Doctor,setDoctor ] = useState([])
    const { doctorId } = useParams();

      useEffect(()=> {
        axios.get(`/getDoctorDetails/${doctorId}`).then((response) => {
          if(response.data.success){
      
              setDoctor(response.data.doctor)
          }
        })
      },[])
  return (
    <div className="bg-[#EDF4FE]  w-screen  flex justify-center">
      <div className="   px-4 pb-10 sm:pb-20 sm:flex sm:flex-row p-8">
         <div className="bg-slate-300   mt-[80px] sm:mt-[100px] mx-40 sm:mx-4   ">
            <div className="flex justify-center">

            <img className="h-72 w-72" src={Doctor.doctorImg} alt="" />
            </div>
            
            <div className="bg-[#E3E8EE] ">
                <h1 className="text-center p-8"> {Doctor.fName } { Doctor.lName }</h1>
            </div>

         </div>

        <div className="w-[600px] mt-7 sm:mt-[100px] bg-[#E3E8EE] pb-10 p-10 ">
        <div className="mb-4 sm:flex  ">
          <span
            className="block sm:pr-6 text-gray-700 font-medium mb-2  text-center"
          
          >
            Specialization
          </span>
          <div
            className="bg-white bg-opacity-60 p-2  text-center sm:text-start w-full"
          > 
          {Doctor.specialization}
          </div>
        </div>
        <div className="mb-4 sm:flex ">
          <span
            className="block text-gray-700 text-center sm:text-start font-medium mb-2 sm:pr-[50px]"
          
          >
            Education
          </span>
          <div
            className="bg-white bg-opacity-60 text-center sm:text-start p-2 w-full" 
          >
            {Doctor.education}
            </div>
        </div>
        <div className="mb-4 sm:flex ">
          <span
            className="block text-gray-700  text-center sm:text-start font-medium mb-2 sm:pr-[44px]"
          
          >
            Experiance
          </span>
          <div
            className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full"
           
          >
            {Doctor.experience}
          </div>
        </div>
        <div className="mb-4 sm:flex bg-opacity-60  ">
          <span
            className="block text-center sm:text-start text-gray-700  font-medium mb-2 sm:pr-[60px]"
          
          >
            Location
          </span>
          <div
            className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full"
          >
              {Doctor.location}
          </div>
        </div>
        <div className="mb-4 sm:flex ">
          <span
            className="block text-center sm:text-start text-gray-700  font-medium mb-2 sm:pr-[61px]"
          
          >
            Address
          </span>
          <div
            className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full"
           
          >

{Doctor.address}
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default ExDocDetails;
