/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { message } from 'antd';
import {useDoctorAuthContext} from '../../Hooks/useDoctorAuthContext'
import axios from '../../Axios/Axios';

function DoctorSignup() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useDoctorAuthContext();
  const handleSignup = (event) => {
    try {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    let data = new FormData(event.currentTarget);
    data = {
      fName: data.get('fName'),
      lName: data.get('lName'),
      specialization: data.get('specialization'),
      experience: data.get('experience'),
      location: data.get('location'),
      number: data.get('number'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')

    }
    console.log(data);
    axios
    .post('/doctor/doctorSignup', 
      data
    )
    .then((response) => {
      const result = response.data;
      if (result.success) {
        localStorage.setItem('doctorToken', JSON.stringify(result));
          dispatch({ type: 'LOGIN', payload: result });
          setIsLoading(false);
        message.success('Signup successfully!');
        navigate('/doctor/doctorPendingPage');
      } else {
        setIsLoading(false);
        setError(result.message);
        message.error(result.message).then(()=>{
          setError(null)
        })
      }
    });
  } catch (error) {
    console.log(error);
    message.error('Somthing went wrong!');
  }
  };

  return (
    <div className="bg-[#EDF4FE]  w-screen flex justify-center px-4 ">
      <div className=" pl-5   w-[600px] mt-[170px] lg:mt-[240px] px-4">
        <h2 className=" text-3xl   font-mono font-bold">Start your career</h2>
        <p className="mb-10 text-[#1F6CD6] cursor-pointer">
          <Link to="/doctor/doctorLogin">Already have one? Log in</Link>
        </p>
        <form  component="form" noValidate onSubmit={handleSignup}>
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
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              className="bg-white p-2 w-full md:border-l mt-5 md:mt-0 md:border-l-black"
              type="text"
              id="lName"
              name="lName"
              placeholder="Last Name"
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="specialization"
            >
              Specialization
            </label>
            <input
              className="bg-white p-2  w-full"
              type="text"
              id="specialization"
              name="specialization"
              placeholder="Specialization"
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-4   flex flex-row">
            <div className>
              <label
                className=" text-gray-700 font-medium mb-2 "
                htmlFor="experience"
              >
               Experience
              </label>
              <input
                className="bg-white p-2  w-full"
                type="text"
                id="experience"
                name="experience"
                placeholder="Experience"
                // value={number}
                // onChange={(event) => setNumber(event.target.value)}
                required
              />
            </div>
            <div className="sm:ml-20 ml-5 w-full sm:w-72 mt-1"  >
              <label
                className=" text-gray-700 font-medium mb-2 "
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="bg-white p-2   w-full"
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                // value={number}
                // onChange={(event) => setNumber(event.target.value)}
                required
              />
            </div>
          </div>
          {/*  */}
        
          {/*  */}
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
              // value={number}
              // onChange={(event) => setNumber(event.target.value)}
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
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
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
              // value={password}
              // onChange={(event) => setPassword(event.target.value)}
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
              // value={conPassword}
              // onChange={(event) => setConPassword(event.target.value)}
              required
            />
          </div>
          {/* {error && (
          <div className="error text-red-500">
            {error}
          </div>
          )} */}
          <div className="mb-4 mt-10 flex justify-center">
            <input
              // disabled={isLoading}

              className="bg-white  hover:bg-[#194569] text-black font-medium py-2 px-20 sm:px-32 mb-20 rounded-lg"
              type="submit"
              value="Save and Continue"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorSignup;
