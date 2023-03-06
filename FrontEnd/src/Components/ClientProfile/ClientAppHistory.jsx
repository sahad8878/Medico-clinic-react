import React, { useEffect, useState } from "react";
import { message } from "antd";
import { InfinitySpin } from "react-loader-spinner";
import Moment from "react-moment";
import axios from "../../Axios/Axios";

function ClientAppHistory() {
  const [Appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const clientloc = JSON.parse(localStorage.getItem("clientToken"));
  const clientToken = clientloc.clientToken;
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/getConfirmedAppointments`, {
        headers: { accesstoken: clientToken },
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.confirmedAppointments);
          setAppointments(response.data.confirmedAppointments);
          setIsLoading(false);
        } else {
          message.error(response.data.message);
        }
      });
  }, []);

  return (
    <div className=" p-5 sm:p-20 pb-10">
      <div className="bg-[#D6E8EE] mb-11">
        <div className="flex justify-center content-center py-8">
          <h1 className="text-2xl font-serif  font-semibold">Appointments</h1>
        </div>

        {isLoading ? (
          <div className=" flex justify-center">
            <InfinitySpin width="200" color="#194569" />
          </div>
        ) : (
          <div>
            {Appointments.length === 0 ? (
              <div className="flex p-16 justify-center font-serif text-[#194569] text-xl">
                {" "}
                Appointments Not Exist..!
              </div>
            ) : (
              <div className="overflow-auto rounded-lg shadow px-20 pb-4">
                <table className="w-full  ">
                  <thead className=" bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Doctor Name
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
                          {appointment.doctor.fName}
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
                          <Moment format="YYYY/MM/DD">
                            {appointment.createdAt}
                          </Moment>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientAppHistory;
