import React from 'react';

import clientIcon from "../../Assets/group.ico";

import log from "../../Assets/main-logo.png";
import ExNavbar from '../AdminNavbar/ExNavbar';




function AdminHome() {

  return (
    <>
            <div className=" p-6 sm:p-16 h-screen border-gray-200  pb-7 ">
      <h1 className="font-semibold text-center sm:text-left mb-2 pb-9 font-serif text-2xl"> Dashboard</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4 mb-10">
    <div
      className="flex flex-col w-60 h-20 shadow-xl items-center bg-white opacity-60 border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
     >
       <img className=" ml-4 h-14" src={clientIcon} alt="logo" />
       <h1 className="p-2 text-black font-semibold">Totol Patients</h1>
     </div>
      <div
      className="flex flex-col w-60 h-20 shadow-xl items-center bg-white opacity-60 border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
     ></div>
      <div
      className="flex flex-col w-60 h-20 shadow-xl items-center bg-white opacity-60 border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
     ></div>

    </div>
      <div className="overflow-auto rounded-lg shadow">

      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
             Month
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
             Totol Doctors
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Total Patients 
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Total Amount
            </th>
            
            
          </tr>
        </thead>
        <tbody className=" bg-white divide-y divide-gray-200">
          {
          
          <tr  className="">
             <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
              july
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                100
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                200
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                10000
            </td>
           
          </tr>
    
        }   
        </tbody>
      </table>
      </div>
    </div>

    </>
  );
}

export default AdminHome;
