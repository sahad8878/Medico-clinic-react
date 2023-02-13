import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import log from '../../Assets/main-logo.png';

function DoctorNavbar() {
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="relative">
      <button
        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <svg
          className="w-3 h-3 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7. 293a1 1 0 011. 414 0L10 10. 586l3. 293-3. 293a1 1 0 111. 414 1. 414l-4 4a1 1 0 01-1. 414 0l-4-4a1 1 0 010-1. 414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-white mt-1 py-2 rounded-md shadow-xl w-56">
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            Sign out
          </a>
        </div>
      )}
    </div>

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
