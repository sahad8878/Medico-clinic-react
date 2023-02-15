import React, { useState } from "react";
import log from "../../Assets/main-logo.png";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
function AdminNavbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
    <div className=" fixed">
      <div className={` h-20 sm:h-24 w-screen flex  justify-between  bg-[#194569]`}>
         

      <div className=" px-4">
          <span className=" items-center px-4 ">
            <img className=" w-[60px] sm:w-[80px] h-[40px] sm:h-[60px] " src={log} alt="logo" />
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
            sx={{ height:{xs:'30px', sm:'50px' , md:'50px'}, width:{xs:'30px', sm:'50px' , md:'50px'}, color: "white" }}
          />
        </span>
      </div>
      <div className={`  sm:block   ${navbar ? "block" : "hidden"} `}>
        <AdminSidebar />
      </div>
      </div>
      </>

    //    <nav className="bg-gray-800 p-6">
    //    {/* Your navbar content goes here */}
    //  </nav>
  );
}

export default AdminNavbar;
