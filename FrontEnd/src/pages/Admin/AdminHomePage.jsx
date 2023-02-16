import React from 'react';
import AdminHome from '../../Components/AdminHome/AdminHome';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';

function AdminHomePage() {
  return (
    <>

<div className="flex">
        <AdminNavbar />
        <div className=" pt-[88px] w-screen  sm:pt-[96px]  sm:pl-[280px]">
        <AdminHome />
        </div>
      </div>
     </>
  );
}

export default AdminHomePage;

