import React, { useState, useEffect } from "react";
import image from "../../Assets/doctor.ico";
import { useParams } from "react-router-dom";
import axios from "../../Axios/Axios";

function ExDocDetails() {
  const [Doctor, setDoctor] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { doctorId } = useParams();

  useEffect(() => {
    axios.get(`/getDoctorDetails/${doctorId}`).then((response) => {
      if (response.data.success) {
        setDoctor(response.data.doctor);
      }
    });
  }, []);

  const handleAppointment = (event) => {
    try{
      event.preventDefault();

      let data = new FormData(event.currentTarget);
      data = {
        date: data.get("availableDate"),
        doctor:doctorId,
        
      };

      axios.post("/postAppointment", data).then((response) => {
        console.log(response, "responseeee");
        const result = response.data;
        if (result.success) {
          message.success("Your appointment verification started");
          // navigate('/admin/AdminDepartmentPage');
          handleCloseModal();
          setRefresh(!refresh);
        } else {
          setError(result.message);
          message.error(result.message).then(() => {
            setError(null);
          });
        }
      });
    }catch (error) {
      console.log(error);
      message.error("Somthing went wrong!");
    }
  }


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-[#EDF4FE]  w-screen ">

   
    <div className=" flex justify-center">
      <div className="   px-4 pb-10 sm: sm:flex sm:flex-row p-8">
        <div className="bg-slate-300   mt-[80px] sm:mt-[100px] mx-40 sm:mx-4   ">
          <div className="flex justify-center">
            <img className="h-72 w-72" src={Doctor.doctorImg} alt="" />
          </div>

          <div className="bg-[#E3E8EE] ">
            <h1 className="text-center p-8">
              {" "}
              {Doctor.fName} {Doctor.lName}
            </h1>
          </div>
        </div>

        <div className="w-[600px] mt-7 sm:mt-[100px] bg-[#E3E8EE] pb-10 p-10 ">
          <div className="mb-4 sm:flex  ">
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
      <div className=" flex justify-center  pb-14">
        <button 
            onClick={handleOpenModal}

         className="py-2 px-20 text-white font-bold text-base bg-[#194569]">BOOK</button>
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
                <form component="form" onSubmit={handleAppointment} >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2 "
                      htmlFor="department"
                    >
                    Availabel Date
                    </label>
                    <select
              class="bg-white p-2  w-full"
              name="availableDate"
            >
           { Doctor.availableDate.map((date) => (
             <option >{date}</option>
            ))
                 }

            </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2 "
                      htmlFor="department"
                    >
                      Timing
                    </label>
                    <div
                      className="bg-white p-2 rounded-lg w-full"
                    
                      // value={email}
                      // onChange={(event) => setEmail(event.target.value)}
                    > {Doctor.startingTime} To {Doctor.endingTime}</div>
                  </div>
                
                
                  <div className="mb-4 mt-10 flex justify-center">
                    <input
                      className="bg-white  hover:bg-[#194569] text-black font-bold py-2 px-20 rounded-lg"
                      type="submit"
                      value="Continue"
                    />
                  </div>
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
        // Cardiologists, audiologists, dentists, ENT specialists, gynecologists, orthopedic surgeons, pediatricians, psychiatrists, veterinarians, radiologists, pulmonologists, endocrinologists, oncologists, neurologists, cardiothoracic surgeons,
      )}
      </div>
    </div>
  );
}

export default ExDocDetails;
