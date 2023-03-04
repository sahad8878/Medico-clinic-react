import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import Select from "react-select";
import { message } from "antd";
import axios from "../../Axios/Axios";

import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase/confic";

function DoctorDetailForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedValue, setSelectedValue] = useState([]);
  const days = [
    {
      value: "Monday",
      label: "Monday",
    },
    {
      value: "Tuesday",
      label: "Tuesday",
    },
    {
      value: "wednesday",
      label: "wednesday",
    },
    {
      value: "Thursday",
      label: "Thursday",
    },
    {
      value: "Friday",
      label: "Friday",
    },
    {
      value: "Saturday",
      label: "Saturday",
    },
    {
      value: "Sunday",
      label: "Sunday",
    },
  ];

  const handleDetails = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      setError(null);
      const doctor = JSON.parse(localStorage.getItem("doctorToken"));
      const doctorToken = doctor.doctorToken;

      let data = new FormData(event.currentTarget);
      data = {
        education: data.get("education"),
        address: data.get("address"),
        startingTime: data.get("startingTime"),
        endingTime: data.get("endingTime"),
        doctorImg: data.get("profileImg"),
        consultationFees: data.get("fees"),
        
        doctorId: doctor.doctorId,
      };

      if (data.doctorImg.name) {
        const dirs = Date.now();
        const rand = Math.random();
        const image = data.doctorImg;
        const imageRef = ref(
          storage,
          `/doctorImages/${dirs}${rand}_${image?.name}`
        );
        const toBase64 = (image) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          }).catch((err) => {
            console.log(err);
          });
        const imgBase = await toBase64(image);
        await uploadString(imageRef, imgBase, "data_url").then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          data.doctorImg = downloadURL;
        });
      } else {
        data.doctorImg = "";
      }

      axios
        .post("/doctor/doctorDetails", data, {
          headers: { doctortoken: doctorToken },
        })
        .then((response) => {
          const result = response.data;
          if (result.success) {
            setIsLoading(false);
            message.success("Your Details saved!");
            navigate("/doctor");
          } else {
            setIsLoading(false);
            setError(result.msg);
            message.error(result.message).then(() => {
              setError(null);
            });
          }
        });
    } catch (error) {
      console.log(error);
      message.error("Somthing went wrong!");
    }
  };
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  return (
    <div className="bg-[#EDF4FE]  w-screen flex justify-center px-4 ">
      <div className=" pl-5   w-[600px] mt-[170px] lg:mt-[240px] px-4">
        <h2 className=" text-3xl   font-mono font-bold">Fill The Form</h2>
        <form component="form" onSubmit={handleDetails}>
          <div className="mb-4 mt-9">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="education"
            >
              Education
            </label>
            <input
              className="bg-white p-2  w-full"
              type="text"
              id="specialization"
              name="education"
              placeholder="Enter Your Education"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="bg-white p-2  w-full"
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
            />
          </div>


          <div className="   sm:flex sm:flex-row">
            <div className="mb-4">
              <label
                className=" text-gray-700 font-medium mb-2  "
                htmlFor="practiceTiming"
              >
                Consultation Fees
              </label>
              <input
                className="bg-white p-2  w-full"
                type="number"
                id="fees"
                name="fees"
                placeholder="Consultation Fees"
                required
              />
            </div>
        
            <div className="sm:ml-10 mb-4 w-full sm:w-72  sm:mt-1">
            <label
                className=" text-gray-700 font-medium mb-2  "
                htmlFor="profileImg"
              >
                Profile image
              </label>
              <input
              className="bg-white p-1  w-full"
              type="file"
              id="profileImg"
              name="profileImg"
              placeholder="Add your Profile Image"
            />
            </div>
          </div>
          
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="education"
            >
              Available Dates
            </label>
            <Select
              className="dropdown"
              name="availableDates"
              placeholder="Select Option"
              value={days.filter((obj) => selectedValue.includes(obj.value))} // set selected values
              options={days} // set list of the data
              onChange={handleChange} // assign onChange function
              isMulti
              isClearable
            />
          </div> */}
          {/*  */}
          {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
      </div>} */}
          {/*  */}

          <div className="mb-4   flex flex-row">
            <div>
              <label
                className=" text-gray-700 font-medium mb-2  "
                htmlFor="practiceTiming"
              >
                Practice Timing
              </label>
              <input
                className="bg-white p-2  w-full"
                type="time"
                id="startingTime"
                name="startingTime"
                placeholder="Starting Time"
                required
              />
            </div>
            <div className="pl-7 pt-14 sm:pt-7">
              <span className="text-gray-700 font-medium">To</span>
            </div>
            <div className="sm:ml-10 ml-5 w-full sm:w-72 mt-8 sm:mt-1">
              <input
                className="bg-white p-2 mt-4  w-full"
                type="time"
                id="endingTime"
                name="endingTime"
                placeholder="Ending Time"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-center error text-red-500 w-full bg-red-500 bg-opacity-50 ">
              {error}
            </div>
          )}
          {isLoading ? (
            <div className="mb-4 mt-10 flex justify-center ">
              <InfinitySpin width="200" color="#194569" />
            </div>
          ) : (
            <div className="mb-4 mt-10 flex justify-center">
              <input
                className="bg-white  hover:bg-[#194569] text-black font-medium py-2 px-20 sm:px-32 mb-20 rounded-lg"
                type="submit"
                value="Save and Continue"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default DoctorDetailForm;
