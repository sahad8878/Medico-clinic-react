/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import axios from "../../Axios/Axios";

function ClientSignup() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSignup = async (events) => {
    try {
      events.preventDefault();
      setIsLoading(true);
      setError(null);
      let data = new FormData(events.currentTarget);
      data = {
        fName: data.get("fName"),
        lName: data.get("lName"),
        dateOfBirth: data.get("dateOfBirth"),
        age: data.get("age"),
        sex: data.get("sex"),
        number: data.get("number"),
        email: data.get("email"),
        password: data.get("password"),
        confirmPassword: data.get("confirmPassword"),
        address: data.get("address"),

      };
      axios.post("/auth/clientSignup", data).then((response) => {
        const result = response.data;
        if (result.success) {
          setIsLoading(false);
          message.success("Signup successfully!");
          navigate("/login");
        } else {
          setIsLoading(false);
          setError(result.message);
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

  return (
    <div className="bg-[#EDF4FE]  w-screen flex justify-center px-4">
      <div className=" pl-5   w-[600px] mt-[170px] lg:mt-[240px] px-4">
        <h2 className=" text-3xl   font-mono font-bold">Create an account</h2>
        <p className="mb-10 text-[#1F6CD6] cursor-pointer">
          <Link to="/login">Already have one? Log in</Link>
        </p>
        <form omponent="form" noValidate onSubmit={handleSignup}>
          <label
            className="block text-gray-700 font-medium mb-2 "
            htmlFor="name"
          >
            Name
          </label>
          <div className="mb-4 md:flex md:flex-row">
            <input
              className="bg-white p-2  w-full"
              type="text"
              id="fName"
              name="fName"
              placeholder="First Name"
              required
            />
            <input
              className="bg-white p-2 w-full md:border-l mt-5 md:mt-0 md:border-l-black"
              type="text"
              id="lName"
              name="lName"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="mb-4   flex flex-row">
            <div className>
              <label
                className=" text-gray-700 font-medium mb-2 "
                htmlFor="dateOfBirth"
              >
                Date Of Birth
              </label>
              <input
                className="bg-white p-2  w-full"
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                required
              />
            </div>
            <div className="sm:ml-20 ml-5 w-full sm:w-72 mt-1">
              <label className=" text-gray-700 font-medium mb-2 " htmlFor="age">
                Age
              </label>
              <input
                className="bg-white p-2   w-full"
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                required
              />
            </div>
          </div>
          {/*  */}
          <label className=" text-gray-700 font-medium mb-2 " htmlFor="sex">
            Sex
          </label>
          <div className="flex  flex-wrap mb-6 bg-white">
            <div className=" border-r border-r-black p-2 w-1/3  ">
              <input
                type="radio"
                id="male"
                name="sex"
                value="male"
                checked={selectedOption === "male"}
                onChange={handleOptionChange}
              />
              <label
                className="inline-block  text-gray-600 font-medium"
                htmlFor="male"
              >
                Male
              </label>
            </div>
            <div className=" w-1/3 border-r border-r-black  p-2  ">
              <input
                type="radio"
                id="feMale"
                name="sex"
                value="feMale"
                checked={selectedOption === "feMale"}
                onChange={handleOptionChange}
              />
              <label
                className="inline-block  text-gray-600 font-medium"
                htmlFor="feMale"
              >
                Female
              </label>
            </div>
            <div className=" p-2 w-1/3">
              <input
                type="radio"
                id="option3"
                name="sex"
                value="others"
                checked={selectedOption === "others"}
                onChange={handleOptionChange}
              />
              <label
                className="inline-block  text-gray-600 font-medium"
                htmlFor="others"
              >
                Others
              </label>
            </div>
          </div>
          {/*  */}
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
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="number"
            >
              Phone
            </label>
            <input
              className="bg-white p-2  w-full"
              type="number"
              id="number"
              name="number"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-white p-2  w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-white p-2 w-full"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="bg-white p-2 w-full"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              required
            />
          </div>
          {error && (
            <div className="error text-center w-full p-2 bg-red-600 bg-opacity-30 text-red-500">
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

export default ClientSignup;
