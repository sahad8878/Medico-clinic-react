import React from "react";
import AdminAppointments from "../../Components/AdminHome/AdminAppointment";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";

function AdminAppointmentspage() {
  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <div className=" pt-[88px] w-screen  sm:pt-[96px]  sm:pl-[280px]">
          <AdminAppointments/>
        </div>
      </div>
    </>
  );
}

export default AdminAppointmentspage;