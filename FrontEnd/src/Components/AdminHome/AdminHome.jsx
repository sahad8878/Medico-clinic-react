import React from 'react';
import { useAdminAuthContext } from '../../Hooks/useAdminAuthContext';
import log from "../../Assets/main-logo.png";
import ExNavbar from '../AdminNavbar/ExNavbar';

function AdminHome() {
  const { admin, dispatch } = useAdminAuthContext();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    dispatch({ type: 'LOGOUT' });
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
          <h1 className="font-bold py-11 text-cyan-900">{admin.AdminEmail}</h1>
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
