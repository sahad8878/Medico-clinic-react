import React, { useState } from "react";
import Swal from "sweetalert2";
import { message } from "antd";
import axios from "../../Axios/Axios";

function SingleDepartment({ department, setRefresh, refresh }) {
  const [dropdown, setDropdown] = useState(false);
  function handleDelete(id) {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: Implement delete logic
        axios.delete(`/admin/deleteDepartment?id=${id}`).then((response) => {
          if (response.data.success) {
            console.log(response.data, "response");
            message.success(response.data.message);
            setRefresh(!refresh);
          } else {
            message.error(response.data.message);
          }
        });

        Swal.fire("Deleted!", "Your data has been deleted.", "success");
        setDropdown(!dropdown);
      } else {
        setDropdown(!dropdown);
      }
    });
  }
  return (
    <div
      key={department._id}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
     >
      <div className=" max-h-screen md:w-[50%]">
        <div className=" inset-0 min-w-fit min-h-fit   flex items-center justify-center ">
          <img
            className="object-cover w-full rounded-t-lg   md:rounded-none md:rounded-l-lg"
            src={department.departmentImg}
            alt=""
          />
        </div>
      </div>
      <div className=" md:w-[50%]">
        <div className="flex flex-col justify-between text-center p-2 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {department.department}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {department.description}
          </p>
        </div>
      </div>
      <div className="">
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className=" inline-flex items-center   justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            {/* vertical */}
            <svg
              class="w-6 h-6 hidden md:block "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
            <svg
              class="w-6 h-6 block md:hidden"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>

          {dropdown && (
            <div
              className={`   ${
                dropdown ? "block" : "hidden"
              } absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div
                onClick={() => handleDelete(department._id)}
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <span className="block px-4 py-2 font-bold text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Delete
                </span>
              </div>
            </div>
          )}
        </div>
        {/* <button className=" md:pb-40">del</button> */}
      </div>
    </div>
  );
}

export default SingleDepartment;
