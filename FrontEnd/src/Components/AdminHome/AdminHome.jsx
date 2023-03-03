import React from 'react';
import { useSelector,useDispatch } from "react-redux";

import log from "../../Assets/main-logo.png";
import ExNavbar from '../AdminNavbar/ExNavbar';
import { setLogout } from "../../Store/Slice/AdminSlice";

function AdminHome() {
  const dispatch = useDispatch()
  const {admin,adminEmail} = useSelector((state) => state.adminLogin)
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    dispatch(setLogout())
   
  };
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mt-16 ">admin home</h1>
     
      <span className="block sm:flex items-center px-4 ">
            <img className="" src={log} alt="logo" />
          </span>
      <div className="">

        {admin && (
        <div>
          <h1 className="font-bold py-11 text-cyan-900">{adminEmail}</h1>
          <button type="button" className="text-white bg-blue-gray-500 px-3" onClick={handleLogout}>
            log out
          </button>
        </div>
        )}
      </div>
    </div>

      {/* <main className="sm:ml-64">
    Your main content goes here
  </main> */}

    </>
  );
}

export default AdminHome;
