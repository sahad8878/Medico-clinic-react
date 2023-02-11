/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from '../../Axios/Axios';

function DoctorSignup() {
  // const navigate = useNavigate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log(name);
  };

  return (

    <div className="bg-[#EDF4FE]  w-screen flex justify-center ">
      <div className="   w-[600px] mt-[240px]">
        <h2 className=" text-3xl   font-mono font-bold">Start your career</h2>
        <p className="mb-10 text-[#1F6CD6] cursor-pointer">
          <Link to="/doctor/doctorLogin">Already have one? Log in</Link>
        </p>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-white p-2 rounded-lg w-full"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="bg-white p-2 rounded-lg w-full"
              type="number"
              id="number"
              name="number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
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
              className="bg-white p-2 rounded-lg w-full"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              className="bg-white p-2 rounded-lg w-full"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="mb-4 mt-10 flex justify-center">
            <input
              className="bg-white  hover:bg-[#194569] text-black font-medium py-2 px-32 mb-20 rounded-lg"
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
