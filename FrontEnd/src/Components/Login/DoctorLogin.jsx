/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable*/    
import React, { useState } from 'react';
import { message } from 'antd';
import { useNavigate,Link} from 'react-router-dom';
import axios from '../../Axios/Axios';
import doctorImage from '../../Assets/doctor-image.jpg';


function DoctorLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      axios.post('/clientLogin', { email, password }).then((response) => {
        const result = response.data;
        if (result.success) {
          localStorage.setItem('DoctorToken', result.token);
          message.success('Login  successfully!');
          navigate('/doctor');
        } else {
          // setErrMsg(result.msg)
          message.error(result.message);
        }
      });
    } catch (error) {
      console.log(error);
      message.error('Somthing went wrong!');
    }
  };
  return (
    // <div className="bg-[#EDF4FE]  container w-full pt-72">
    //   <div className=" sm:w-[600px] mx-auto  x1:w-sm p-3 pb-20    ">
    //     <h2 className=" text-3xl   font-mono font-bold">Log In With Email</h2>
    //     <p className="mb-10 text-[#1F6CD6] cursor-pointer">
    //       <Link to="/doctor/doctorSignup">
    //         Create New Account? Signup
    //       </Link>
    //     </p>
    //     <form onSubmit={handleLogin}>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 font-medium mb-2 "
    //           htmlFor="email"
    //         >
    //           Email
    //         </label>
    //         <input
    //           className="bg-white p-2 rounded-lg w-full"
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={email}
    //           onChange={(event) => setEmail(event.target.value)}
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-black font-medium mb-2"
    //           htmlFor="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           className="bg-white p-2 rounded-lg w-full"
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={password}
    //           onChange={(event) => setPassword(event.target.value)}
    //           required
    //         />
    //       </div>
    //          <div className="mb-4 mt-10 flex content-center justify-center">
    //         <input
    //           className="bg-white  hover:bg-[#194569] text-black font-medium py-2
    //              w-72  rounded-lg"
    //           type="submit"
    //           value="Continue"
    //         />
    //        </div>
         
    //     </form>
    //   </div>
    // </div>

    // <div className="w-full max-w-sm mx-auto">
    //   <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg pt-60 shadow-md">
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
    //         Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="name"
    //         type="text"
    //         name="name"
    //         value={setPassword}
    //         onChange={' '}
    //         required
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
    //         Email
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="email"
    //         type="email"
    //         name="email"
    //         value={setEmail}
    //         onChange={' '}
    //         required
    //       />
    //     </div>
    //     <div className="flex items-center justify-end">
    //       <button
    //         className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg"
    //         type="submit"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <>
    <div class="min-h-screen flex items-center justify-center">
    <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-2 gap-2 p-5">


    <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </a>
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Get in on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
        </a>
    </div>
</div>

<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </a>
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Get in on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
        </a>
    </div>
</div>

    </div>
</div> 
  <div className="relative pb-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${doctorImage})` }}>
      <div className="absolute inset-0 flex items-end p-8">
        <div className="bg-white p-4 rounded-lg">
          <img src={doctorImage} alt="" />
          <p className="text-gray-600 text-sm">My Image With Text</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default DoctorLogin;
