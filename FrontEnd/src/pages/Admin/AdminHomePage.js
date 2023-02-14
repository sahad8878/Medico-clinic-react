import React from 'react';
import AdminHome from '../../Components/AdminHome/AdminHome';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';

function AdminHomePage() {
  return (
    <div className='flex'>

      <AdminSidebar/> 
      <div className='flex-1'>
      <AdminNavbar/>
      <AdminHome />

      </div>
    </div>

  );
}

export default AdminHomePage;
