import React, { useState, useEffect } from "react";
import { message } from "antd";
import profile from "../../Assets/user.png";
import clientIcon from "../../Assets/group.ico";
import confirm from "../../Assets/customer.png";
import totalSales from '../../Assets/gross.png'
import axios from "../../Axios/Axios";

function DoctorDashboard() {
  const doctor = JSON.parse(localStorage.getItem("doctorToken"));
  const doctorToken = doctor.doctorToken;
  const [patients, setPatients] = useState("");
  const [confirmedPatients, setConfirmedPatients] = useState("");
  const [totalFees,setTotalFees] = useState('')
const [salesReport,setSalesReport ] = useState([])
  useEffect(() => {
    axios
      .get("/doctor/getDashboardDetails", {
        headers: { doctortoken: doctorToken },
      })
      .then((response) => {
        const result = response.data;
        if (result.success) {
          setPatients(result.patients);
          setConfirmedPatients(result.confirmedPatients)
          setTotalFees(result.totalFees)
          setSalesReport(result.salesReport)
        
        } else {
          message.error(result.message);
        }
      });
  }, []);


  return (
    <div className=" ">
      <div className="flex justify-center content-center py-5">
        <h1 className="text-2xl font-serif  font-semibold">Dashboard</h1>
      </div>

      {/*  */}

      <div className=" grid grid-cols-1 lg:grid-cols-3  gap-4 p-4 mb-10">
        <div className="flex flex-col w-60 h-20 shadow-xl items-center bg-white opacity-60 border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
          <img className=" ml-4 h-14" src={clientIcon} alt="logo" />
          <div>
            <h1 className="pl-5 text-black font-bold">Totol Patients</h1>
            <span className="flex justify-center text-black font-bold">
              {patients}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-60 h-20 shadow-xl items-center bg-white opacity-60 border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
        <img className=" ml-4 h-14" src={confirm} alt="logo" />
          <div>
            <h1 className="pl-3 text-black font-bold">Confirmed Patients</h1>
            <span className="flex justify-center text-black font-bold">
              {confirmedPatients}
            </span>
          </div>

        </div>
        <div className="flex flex-col w-60 h-20 shadow-xl items-center bg-white opacity-60 border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
        <img className=" ml-4 h-14" src={totalSales} alt="logo" />
          <div>
            <h1 className="pl-4 text-black font-bold">Totol Sales</h1>
            <span className="flex justify-center text-black font-bold">
              {totalFees}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-auto rounded-lg shadow ">
        <table className="w-full ">
          <thead className=" bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Month
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Year
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Totol Sales
              </th>
            </tr>
          </thead>
          <tbody className="  bg-white divide-y divide-gray-200  ">
            {
              salesReport.map((salesReport)=> (
            <tr className="">
              <td className=" p-3 text-base text-gray-700 whitespace-nowrap text-center">
              {salesReport.month}
              </td>
              <td className=" p-3 text-base text-gray-700 whitespace-nowrap text-center">
              {salesReport.year}
              </td>
              <td className=" p-3 text-base text-gray-700 whitespace-nowrap text-center">
              {salesReport.totalSales}
              </td>
            </tr>
             ))
            }
          </tbody>
        </table>
      </div>

      {/*  */}
    </div>
  );
}

export default DoctorDashboard;
