import React, { useState } from "react";
import log from "../../Assets/main-logo.png";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import docIcon from "../../Assets/doctor.ico";
import clientIcon from "../../Assets/group.ico";
import homeIcon from "../../Assets/home.ico";
import inboxIcon from "../../Assets/book-appointments.ico";

function AdminSidebar() {
  const [navbar, setNavbar] = useState(false);
  return (
    //   <aside className="bg-gray-800 sm:w-64 h-screen sm:block hidden">
    //   {/* Your sidebar content goes here */}

    //   <div className="md:hidden">
    //             <button
    //               className="p-2 text-[#194569] rounded-md outline-none focus:border-gray-400 focus:border"
    //               onClick={() => setNavbar(!navbar)}
    //             >
    //               {navbar ? (
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   className="w-6 h-6"
    //                   viewBox="0 0 20 20"
    //                   fill="currentColor"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               ) : (
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   className="w-6 h-6"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                   strokeWidth={2}
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M4 6h16M4 12h16M4 18h16"
    //                   />
    //                 </svg>
    //               )}
    //             </button>
    //           </div>
    //           <div className={`bg-gray-800 sm:w-64 h-screen md:block  ${navbar ?"block": "hidden"}`}>

    //   </div>
    //   asdfsdfsadfsadfasdf
    // </aside>
    <aside className="  h-screen  ">
      <div className=" ">
        <div className=" h-screen  p-3 bg-[#194569] shadow w-60 sm:w-72">
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
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img className=" h-7" src={homeIcon} alt="logo" />

                    <span className="text-gray-100">Home</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img className=" h-7" src={inboxIcon} alt="logo" />

                    <span className="text-gray-100 ">Inbox</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img className=" h-7" src={clientIcon} alt="logo" />

                    <span className="text-gray-100">Clients</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img className=" h-7" src={docIcon} alt="logo" />
                    <span className="text-gray-100">Doctors</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>

    // {/* <div className="container mx-auto mt-12">
    //     <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
    //         <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
    //             <div className="text-sm font-medium text-gray-500 truncate">
    //                 Total users
    //             </div>
    //             <div className="mt-1 text-3xl font-semibold text-gray-900">
    //                 12,00
    //             </div>
    //         </div>
    //         <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
    //             <div className="text-sm font-medium text-gray-500 truncate">
    //                 Total Profit
    //             </div>
    //             <div className="mt-1 text-3xl font-semibold text-gray-900">
    //                 $ 450k
    //             </div>
    //         </div>
    //         <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
    //             <div className="text-sm font-medium text-gray-500 truncate">
    //                 Total Orders
    //             </div>
    //             <div className="mt-1 text-3xl font-semibold text-gray-900">
    //                 20k
    //             </div>
    //         </div>
    //     </div>
    // </div> */}
  );
}

export default AdminSidebar;
