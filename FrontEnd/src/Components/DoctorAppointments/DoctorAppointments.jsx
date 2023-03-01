import React, { useEffect, useState } from "react";
import { message } from "antd";
import Moment from "react-moment";

import axios from "../../Axios/Axios";

function DoctorAppointments() {
  const [Appointments, setAppointments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const doctor = JSON.parse(localStorage.getItem("doctorToken"));
  const doctorId = doctor.doctorId;
  const doctorToken = doctor.doctorToken;
  useEffect(() => {
    axios
      .get(`/doctor/getAppointments?doctorId=${doctorId}`, {
        headers: { doctortoken: doctorToken },
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.pendingAppointments);
          setAppointments(response.data.pendingAppointments);
        } else {
          message.error(response.data.error);
        }
      });
  }, [refresh]);

  // accept appointment
  const acceptAppointment = (id) => {
    axios
      .patch(
        "/doctor/acceptAppointment",
        { id },
        { headers: { doctortoken: doctorToken } }
      )
      .then((response) => {
        if (response.data.success) {
          message.success(response.data.message);
          setRefresh(!refresh);
        } else {
          message.error(response.data.message);
        }
      });
  };

  // reject appointment requests

  const rejectAppointment = (id) => {
    axios
      .patch(
        "/doctor/rejecrAppointment",
        { id },
        { headers: { doctortoken: doctorToken } }
      )
      .then((response) => {
        if (response.data.success) {
          message.success(response.data.message);
          setRefresh(!refresh);
        } else {
          message.error(response.data.message);
        }
      });
  };

  return (
    <div className=" ">
     
        <div className="flex justify-center content-center py-8">
          <h1 className="text-2xl font-serif  font-semibold">Appointments</h1>
        </div>

        {/*  */}
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
                        className="p-1.5 ml-5 text-xs font-medium uppercase tracking-wider text-red-700 bg-[#194569] rounded-lg bg-opacity-80 hover:bg-opacity-50"
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
    
  );
}

export default DoctorAppointments;
