import React from 'react';
import AdminHome from '../../Components/AdminHome/AdminHome';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';
// import ExNavbar from '../../Components/AdminNavbar/ExNavbar';
// import ExSidebar from '../../Components/AdminSidebar/ExSidebar';
// import ClientTable from '../../Components/Tables/ClientTable';


function AdminHomePage() {
  return (
    <>
      <AdminNavbar/>
       <AdminHome />

    
       {/* <ClientTable/> */}
     </>
  //  <div>
  //   <ExNavbar/>
  //   <ExSidebar/>

  //  </div>
  );
}

export default AdminHomePage;

