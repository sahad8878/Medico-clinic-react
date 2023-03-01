import React, { useState, useEffect } from "react";
import { message } from "antd";
import moment from "moment";
import profile from "../../Assets/user.png";
import axios from "../../Axios/Axios";
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function DoctorTimeSchedule() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [timings, setTimings] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const doctor = JSON.parse(localStorage.getItem("doctorToken"));
  const doctorToken = doctor.doctorToken;

  useEffect(() => {
    axios
      .get("/doctor/getScheduleDetails", {
        headers: { doctortoken: doctorToken },
      })
      .then((response) => {
        const result = response.data;
        if (result.success) {
          console.log(result);
          setSchedule(result.schedule);
        }
      });
  }, [refresh]);


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleTimingAdd = () => {
    setTimings([...timings, { startTime: "", endTime: "" }]);
  };
  const handleTimingRemove = (indexToRemove) => {
    setTimings((prevTimings) =>
      prevTimings.filter((timing, index) => index !== indexToRemove)
    );
  };

  const handleTimingChange = (e, index, key) => {
    const updatedTimings = [...timings];
    updatedTimings[index][key] = e.target.value;
    setTimings(updatedTimings);
  };
 
  const deleteTimeFromDB = (timeId) => {
    console.log(timeId);
      axios.delete(`/doctor/deleteScheduleTime?timingId=${timeId}`,{ headers: { doctortoken: doctorToken }}).then((response) => {
        if(response.data.success){
          setRefresh(!refresh) 
          message.success(response.data.message)
        }else{
          message.error(response.data.message)

        }
      })

  }

  const disableSchedulDay = (dayId) => {
    console.log(dayId);

  }

  const activeSchedulDay = (dayId) => {
    console.log(dayId);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected day:", selectedDay);
    console.log("Timings:", timings);
    axios
      .post(
        "/doctor/postDoctorAvailability",
        { selectedDay, timings },
        { headers: { doctortoken: doctorToken } }
      )
      .then((response) => {
        if (response.data.success) {
          setRefresh(!refresh) 
          message.success(response.data.message);
        } else {
          message.error(response.data.message);
        }
      });
  };
  return (
    <div className=" ">
      <div className="flex justify-center content-center py-8">
        <h1 className="text-2xl font-serif  font-semibold">Your Schedule</h1>
      </div>
      <div className=" flex justify-end content-end">
        <h1
          onClick={handleOpenModal}
          className="text-end py-1 px-3 bg-gray-300 m-2"
        >
          Add Time
        </h1>
      </div>
      {/*  */}
      <div className="overflow-auto rounded-lg shadow  ">
        <table className="w-full">
          <thead className=" bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Day
              </th>

              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Timing
              </th>

              <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody className="  bg-white divide-y divide-gray-200 ">
            {schedule.map((schedule) => (
              <tr className={`${schedule.status === "active" ? "bg-white" : "bg-slate-400"}`}>
                <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  {schedule.day}
                </td>
                <td className=" p-3 text-base border text-gray-700 whitespace-nowrap">
                  {schedule.time.map((times) => (
                    <div className="p-1 border-b flex justify-between">
                      <span className="">
                        {moment(times.start).format(" h:mm a")}
                      </span>
                      <span>To </span>
                      <span className="">
                        {moment(times.end).format(" h:mm a")}
                      </span>
                      <span onClick={() =>deleteTimeFromDB(times._id)} className="text-red-600 hover:text-red-900 cursor-pointer">Remove</span>
                    </div>
                  ))}
                </td>

                <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                  {
                    schedule.status === 'active' ?

                  <span className="cursor-pointer" onClick={()=>disableSchedulDay(schedule._id)}>
                  Disable
                  </span>
                    :
                    <span className="cursor-pointer" onClick={()=>activeSchedulDay(schedule._id)}>
                 Active
                  </span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={handleCloseModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal */}
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-md">
              <div className="bg-[#EDF4FE] bg-opacity-70 px-4 py-3">
                <h2 className="text-lg text-center font-medium text-gray-900">
                  Make Your Appointment
                </h2>
              </div>
              <div className=" bg-[#EDF4FE]    px-4 pt-5 pb-4 ">
                <form onSubmit={handleSubmit}>
                  <label>
                    Day of week:
                    <select
                      className="pl-3"
                      value={selectedDay}
                      onChange={handleDayChange}
                    >
                      <option value="">Select a day</option>
                      {daysOfWeek.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </label>
                  {selectedDay && (
                    <div>
                      <div className="flex my-2">
                        <h2 className="text-center mr-8 ">{selectedDay}</h2>
                        <button
                          className="  text-[#194569] cursor-pointer hover:text-black"
                          type="button"
                          onClick={handleTimingAdd}
                        >
                          Add timing
                        </button>
                      </div>

                      {timings.map((timing, index) => (
                        <div key={index} className="p-1">
                          <label className="pr-4">
                            Start time:
                            <input
                              type="time"
                              value={timing.startTime}
                              onChange={(e) =>
                                handleTimingChange(e, index, "startTime")
                              }
                            />
                          </label>
                          <label className="pr-4">
                            End time:
                            <input
                              type="time"
                              value={timing.endTime}
                              onChange={(e) =>
                                handleTimingChange(e, index, "endTime")
                              }
                            />
                          </label>
                          <button
                            className="text-red-700 cursor-pointer hover:text-red-500"
                            type="button"
                            onClick={() => handleTimingRemove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <div className="flex justify-center content-center mt-5">
                        <button
                          className="flex justify-center content-center cursor-pointer hover:bg-opacity-75 rounded-md text-white  bg-[#194569] px-6"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              <div className="bg-[#EDF4FE] bg-opacity-70 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#194569] text-base font-medium text-white hover:bg-opacity-70 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorTimeSchedule;
