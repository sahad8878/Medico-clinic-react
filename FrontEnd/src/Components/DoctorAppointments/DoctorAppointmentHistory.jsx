import React, { useEffect, useState } from "react";
import { message } from "antd";
import Moment from "react-moment";
import axios from "../../Axios/Axios";

function DoctorAppointmentHistory() {
  const [Appointments, setAppointments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const doctor = JSON.parse(localStorage.getItem("doctorToken"));
  const doctorToken = doctor.doctorToken;
  useEffect(() => {
    axios
      .get(`/doctor/getDoctorAppointmentHistory`, {
        headers: { doctortoken: doctorToken },
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.appointmentHistory);
          setAppointments(response.data.appointmentHistory);
        } else {
          message.error(response.data.message);
        }
      });
  }, [refresh]);

  return (
    <div className=" ">
     
        <div className="flex justify-center content-center py-8">
          <h1 className="text-2xl font-serif  font-semibold">Appointments History</h1>
        </div>

        {/*  */}
       
        <div className="overflow-auto rounded-lg shadow pb-4">
          <table className="w-full">
            <thead className=" bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Patient Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Appointment Date
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Appointment Time
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Consultation Fees
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                 status
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="  bg-white divide-y divide-gray-200 ">
              {Appointments.map((appointment) => (
                <tr className="">
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  {appointment.client.fName}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  {appointment.date}

                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  {appointment.time}


                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  {appointment.consultationFees}


                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  {appointment.status}

                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  <Moment format="YYYY/MM/DD">{appointment.createdAt}</Moment>
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
