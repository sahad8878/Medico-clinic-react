import React, { useEffect, useState } from "react";
import { message } from "antd";
import Moment from "react-moment";
import axios from "../../Axios/Axios";

function DoctorAppointmentHistory() {
  return (
    <div className=" ">
     
        <div className="flex justify-center content-center py-8">
          <h1 className="text-2xl font-serif  font-semibold">Appointments</h1>
        </div>

        {/*  */}
        <div className=" flex justify-end content-end">
       <Link to="/doctor/appointmentHistory">
       
        <h1
          className="text-end py-1 px-3 text-white bg-[#194569] cursur-pointer hover:bg-opacity-80 m-2"
        >
          History 
        </h1>
       </Link>
      </div>
        <div className="overflow-auto rounded-lg shadow pb-14 ">
          <table className="w-full">
            <thead className=" bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Gender
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Age
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Appointment Date
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Appointment Time
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
              </tr>
            </thead>
            <tbody className="  bg-white divide-y divide-gray-200 ">
              {Appointments.map((appointment) => (
                <tr className="">
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {appointment.client.fName}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {appointment.client.sex}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {appointment.client.age}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {appointment.date}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {appointment.time}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    <Moment format="YYYY/MM/DD">{appointment.createdAt}</Moment>
                  </td>

                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    <td className=" p-3 text-base text-gray-700 whitespace-nowrap cursor-pointer">
                      <button
                        onClick={() => acceptAppointment(appointment._id)}
                        className="p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-[#194569] rounded-lg bg-opacity-80 hover:bg-opacity-50"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() => rejectAppointment(appointment._id)}
                        className="p-1.5 ml-5 text-xs font-medium uppercase tracking-wider text-red-500 bg-[#194569] rounded-lg bg-opacity-80 hover:bg-opacity-50"
                      >
                        Reject
                      </button>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*  */}
      </div>
  )
}

export default DoctorAppointmentHistory
