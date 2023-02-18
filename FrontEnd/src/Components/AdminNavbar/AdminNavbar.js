import React, { useState } from "react";
import log from "../../Assets/main-logo.png";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import docIcon from "../../Assets/doctor.ico";
import clientIcon from "../../Assets/group.ico";
import homeIcon from "../../Assets/home.ico";
import inboxIcon from "../../Assets/book-appointments.ico";
import departmentIcon from '../../Assets/department.png'

import { useAdminAuthContext } from "../../Hooks/useAdminAuthContext";
function AdminNavbar() {
  const [navbar, setNavbar] = useState(false);
  const { admin, dispatch } = useAdminAuthContext();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div className=" fixed">
        <div className="h-20 sm:h-24 w-screen flex  justify-between  bg-[#194569]">
          <div className=" px-4">
            <span className=" items-center px-4 ">
              <img
                className=" w-[60px] sm:w-[80px] h-[40px] sm:h-[60px] "
                src={log}
                alt="logo"
              />
            </span>
          </div>

          <div className="mt-7 sm:mt-10 sm:hidden text-white ">
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "green",
    },
  },
})); */}
          <span className=" mr-7  mt-8 sm:mt-7 flext justify-between ">
            <AccountCircleIcon
              sx={{
                height: { xs: "30px", sm: "50px", md: "50px" },
                width: { xs: "30px", sm: "50px", md: "50px" },
                color: "white",
              }}
            />
          </span>
        </div>
        <div className={` sm:hidden   ${navbar ? "block" : "hidden"} `}>
          <div className=" ">
            <div className=" h-screen  p-3 bg-[#194569] shadow w-60 ">
              <div className="space-y-3">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center py-4">
                    <button
                      type="submit"
                      className="p-2 focus:outline-none focus:ring"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm">
                      <Link to="/admin/adminHome">
                        <span className="flex items-center p-2 space-x-3 rounded-md">
                          <img className=" h-7" src={homeIcon} alt="logo" />

                          <span className="text-gray-100">Home</span>
                        </span>
                      </Link>
                    </li>
                    <li className="rounded-sm">
                      <Link to="/admin/AdminAppointmentspage">
                        <span
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <img className=" h-7" src={inboxIcon} alt="logo" />

                          <span className="text-gray-100 ">Appointments</span>
                        </span>
                      </Link>
                    </li>
                    <li className="rounded-sm">
                      <Link to="/admin/adminClientPage">
                        <span className="flex items-center p-2 space-x-3 rounded-md">
                          <img className=" h-7" src={clientIcon} alt="logo" />

                          <span className="text-gray-100">Clients</span>
                        </span>
                      </Link>
                    </li>
                    <li className="rounded-sm">
                      <Link to="/admin/adminDoctorsPage">
                        <span className="flex items-center p-2 space-x-3 rounded-md">
                          <img className=" h-7" src={docIcon} alt="logo" />
                          <span className="text-gray-100">Doctors</span>
                        </span>
                      </Link>
                    </li>
                    <li className="rounded-sm">
                <Link to="/admin/AdminDepartmentPage" >
                  <span
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img className=" h-7" src={departmentIcon} alt="logo" />
                    <span className="text-gray-100">Departments</span>
                  </span>
                  </Link>
                </li>
                    {admin && (
                      <li className="rounded-sm">
                        <span
                          onClick={handleLogout}
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                          </svg>
                          <span className="text-gray-100">Logout</span>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    //    <nav className="bg-gray-800 p-6">
    //    {/* Your navbar content goes here */}
    //  </nav>
  );
}

export default AdminNavbar;