import React from 'react';
import { Link } from 'react-router-dom';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import log from '../../Assets/main-logo.png';

function DoctorNavbar() {
  return (
    <>
      <nav style={{ position: 'fixed', width: '-webkit-fill-available' }} className="bg-[#97CADB] p-3 flex items-center h-28 justify-between mt-7">
        <span className="text-white font-bold ml-[50px] cursor-pointer">
          <img className="w-[80px] h-[60px]" src={log} alt="logo" />
        </span>
        <div className="flex items-center mr-[50px]">
          <span className="text-white font-semibold text-lg px-5 hover:text-[#194569] rounded">
            <Link to="/doctor">Home</Link>
          </span>
          <span className="text-white font-semibold text-lg px-5 cursor-pointer hover:text-[#194569] rounded">
            Appointments
          </span>
          <span className="text-white font-semibold text-lg px-5 cursor-pointer hover:text-[#194569] rounded">
            Logout
          </span>
          <CircleNotificationsRoundedIcon
            sx={{
              color: '#194569',
              fontSize: '30px',
              cursor: 'pointer',
            }}
          />
        </div>
      </nav>

      {/*
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">My App</span>
    </div>
    <div className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white
         mr-4">
          Home
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white
         mr-4">
          Service
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Login
        </a>
      </div>
    </div>
  </nav>
   */}
    </>
  );
}

export default DoctorNavbar;
