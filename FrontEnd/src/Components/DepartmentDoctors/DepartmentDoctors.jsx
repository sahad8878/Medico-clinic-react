import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from '../../Axios/Axios'
import image from "../../Assets/doctor.ico";
function DepartmentDoctors() {

    const [doctors,setDoctors ] = useState([])
  const { departmentId } = useParams();

  console.log(departmentId, "ldddddddddddd");

    useEffect(()=> {
      axios.get('/getDepartmentDoctors',departmentId).then((response) => {
        if(response.data.success){
            setDoctors(response.data.doctors)
        }
      })
    },[])

  const Doctors = [
    { id: 1, image: image, name: "sahad", specialization: "dentist" },
    { id: 1, image: image, name: "sahad", specialization: "dentist" },
    { id: 1, image: image, name: "sahad", specialization: "dentist" },
    { id: 1, image: image, name: "sahad", specialization: "dentist" },
    { id: 1, image: image, name: "sahad", specialization: "dentist" },
  ];

  return (
    <div className=" p-5 sm:p-20 pb-10">
      <div className="flex justify-center content-center mb-8">
        <h1 className="text-2xl font-serif font-semibold">
          Available Doctors{" "}
        </h1>
      </div>
      <div className="bg-[#D6E8EE] mb-11">
      <dir className="sm:px-36 pt-7 px-10 ">
        <div className="relative ">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm rounded-full focus:outline-none"
          />
        </div>
      </dir>

      <div className="  flex justify-center content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 sm:gap-20 p-5  mt-10 ">
          {/*  */}
          {Doctors.map((doctor) => (
            <div class=" pt-2  w-56 cursor-pointer hover:bg-  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <div class="flex flex-col items-center pb-10">
                <img
                  class="w-44 h-44 mb-3 rounded-full shadow-lg"
                  src={doctor.image}
                  alt="Bonnie image"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {doctor.name}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {doctor.specialization}
                </span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                  
                

                 <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  details
                </a>
                  {/*
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a> */}
                </div>
              </div>
            </div>
          ))}

          {/*  */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default DepartmentDoctors;
