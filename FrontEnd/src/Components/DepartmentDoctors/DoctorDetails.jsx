import React, { useState, useEffect } from "react";
import image from "../../Assets/doctor.ico";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "../../Axios/Axios";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

// const options = [
//   { value: "morning", label: "Morning" },
//   { value: "afternoon", label: "Afternoon" },
//   { value: "evening", label: "Evening" },
// ];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const localizer = momentLocalizer(moment);
function ExDocDetails() {
  const [Doctor, setDoctor] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(selectedDate, selectedTime);
  //   // handle form submission
  // };

  const { doctorId } = useParams();
  const client = JSON.parse(localStorage.getItem("clientToken"));
  const clientToken = client.clientToken;
  useEffect(() => {
    axios
      .get(`/getDoctorDetails/${doctorId}`, {
        headers: { accesstoken: clientToken },
      })
      .then((response) => {
        if (response.data.success) {
          setDoctor(response.data.doctor);
        }
      });
  }, []);

  useEffect(() => {
    axios
      .get("/availableSlot", { headers: { accesstoken: clientToken } })

      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setSlots(response.data);
        }
      });
    // .then((response) => setSlots(response.data))
    // .catch((error) => console.log(error));
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedTime("");
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleAppointment = (event) => {
    try {
      event.preventDefault();
      const client = JSON.parse(localStorage.getItem("clientToken"));
      axios
        .post("/postAppointment", {
          date: selectedDate,
          time: selectedTime,
          doctor: doctorId,
          client: client.clientId,
        })
        .then((response) => {
          console.log(response, "responseeee");
          const result = response.data;
          if (result.success) {
            message.success(result.message);
            // navigate('/admin/AdminDepartmentPage');
            handleCloseModal();
          } else {
            message.error(result.message).then(() => {});
          }
        });
    } catch (error) {
      console.log(error);
      message.error("Somthing went wrong!");
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const [selectedDay, setSelectedDay] = useState('');
  const [timings, setTimings] = useState([]);

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleTimingAdd = () => {
    setTimings([...timings, { startTime: '', endTime: '' }]);
  };
  const handleTimingRemove = (indexToRemove) => {
    setTimings((prevTimings) => prevTimings.filter((timing, index) => index !== indexToRemove));
  };

  const handleTimingChange = (e, index, key) => {
    const updatedTimings = [...timings];
    updatedTimings[index][key] = e.target.value;
    setTimings(updatedTimings);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected day:', selectedDay);
    console.log('Timings:', timings);
  };
  return (
    <>
      <div className="container mx-auto px-4 pt-7">
        <div className="flex flex-wrap ">
          {/*  */}
          <div className="w-full md:w-5/12 px-3 flex justify-center lg:justify-end">
            <div className="bg-[#E3E8EE]   mt-[80px] sm:mt-[100px]   sm:mx-4   ">
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
          </div>
          {/*  */}
          <div className="w-full md:w-6/12  px-3">
            <div className="lg:w-[600px] mdw-[400px] mt-7 md:mt-[100px] bg-[#E3E8EE] pb-10 p-5 sm:p-10 ">
              <div className="mb-4 sm:flex   ">
                <span className="block sm:pr-6 text-gray-700 font-medium mb-2  text-center">
                  Specialization
                </span>
                <div className="bg-white bg-opacity-60 p-2  text-center sm:text-start w-full">
                  {Doctor.specialization}
                </div>
              </div>
              <div className="mb-4 sm:flex ">
                <span className="block text-gray-700 text-center sm:text-start font-medium mb-2 sm:pr-[50px]">
                  Education
                </span>
                <div className="bg-white bg-opacity-60 text-center sm:text-start p-2 w-full">
                  {Doctor.education}
                </div>
              </div>
              <div className="mb-4 sm:flex ">
                <span className="block text-gray-700  text-center sm:text-start font-medium mb-2 sm:pr-[44px]">
                  Experiance
                </span>
                <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
                  {Doctor.experience}
                </div>
              </div>
              <div className="mb-4 sm:flex bg-opacity-60  ">
                <span className="block text-center sm:text-start text-gray-700  font-medium mb-2 sm:pr-[60px]">
                  Location
                </span>
                <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
                  {Doctor.location}
                </div>
              </div>
              <div className="mb-4 sm:flex ">
                <span className="block text-center sm:text-start text-gray-700  font-medium mb-2 sm:pr-[61px]">
                  Address
                </span>
                <div className="bg-white text-center sm:text-start bg-opacity-60 p-2 w-full">
                  {Doctor.address}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 py-14 text-sm">
          <button
            onClick={handleOpenModal}
            className="py-2 px-20 text-white font-bold text-base hover:bg-opacity-75 bg-[#194569]"
          >
            BOOK
          </button>
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
                  <div className=" bg-[#EDF4FE]    px-4 pt-5 pb-4">

                  <form onSubmit={handleSubmit}>
      <label>
        Day of week:
        <select value={selectedDay} onChange={handleDayChange}>
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
          <h2>{selectedDay}</h2>
          <button type="button" onClick={handleTimingAdd}>
            Add timing
          </button>
          {timings.map((timing, index) => (
            <div key={index}>
              <label>
                Start time:
                <input
                  type="time"
                  value={timing.startTime}
                  onChange={(e) => handleTimingChange(e, index, 'startTime')}
                />
              </label>
              <label>
                End time:
                <input
                  type="time"
                  value={timing.endTime}
                  onChange={(e) => handleTimingChange(e, index, 'endTime')}
                />
              </label>
              <button type="button" onClick={() => handleTimingRemove(index)}>
                    Remove timing
                  </button>
            </div>
          ))}
        </div>
      )}
      <button type="submit">Save</button>
    </form>

                    {/* <form onSubmit={handleSubmit}>
                      <div>
                        <label>Date:</label>
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </div>
                      <div>
                        <label>Available Time:</label>
                        <Select
                          options={options}
                          value={selectedTime}
                          onChange={(time) => setSelectedTime(time)}
                        />
                      </div>
                      <button type="submit">Submit</button>
                    </form> */}
                    {/* <form
                    component="form "
                    className="flex-col items-center justify-center"
                    onSubmit={handleAppointment}
                  >
                    <div className="mb-4 text-center ">
                      <label
                        className=" block text-gray-700 font-medium mb-2 "
                        htmlFor="department"
                      >
                        Availabel Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </div>
                    <div className="mb-4 text-center">
                      <label className="block text-gray-700 font-medium mb-2 ">
                        Select a time:
                      </label>

                      <select
                        value={selectedTime}
                        onChange={handleTimeChange}
                        className
                      >
                        <option value="">--Select a time--</option>
                        {slots
                          .filter((slot) => slot.date === selectedDate)
                          .map((slot) => (
                            <option key={slot.time} value={slot.time}>
                              {slot.time}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="mb-4 mt-10 flex justify-center">
                      <button
                        className="bg-white  hover:bg-[#194569] text-black font-bold py-2 px-20 rounded-lg"
                        type="submit"
                        disabled={!selectedDate || !selectedTime}
                      >
                        Continue{" "}
                      </button>
                    </div>
                  </form> */}
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
      </div>
    </>
  );
}

export default ExDocDetails;
