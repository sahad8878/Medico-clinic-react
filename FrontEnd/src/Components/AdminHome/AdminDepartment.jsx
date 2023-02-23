import React, { useState, useEffect } from "react";
import { message } from "antd";
import axios from "../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase/confic";
import SingleDepartment from "./SingleDepartment";
import img from "../../Assets/doctor-img2.png";

function AdminDepartment() {
  const navigate = useNavigate();
 
  const [error, setError] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [departments, setDepartments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios.get("/admin/getdepartments").then((response) => {
      console.log(response.data);
      setDepartments(response.data.departments);
    });
  }, [refresh]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDepartments = async (event) => {
    try {
      event.preventDefault();
      setError(null);

      let data = new FormData(event.currentTarget);
      data = {
        department: data.get("department"),
        departmentImg: data.get("departmentImg"),
        description: data.get("description"),
      };
      console.log(data);
      if (data.departmentImg.name) {
        const date = Date.now();
        const rand = Math.random();
        const departmentImg = data.departmentImg;
        const imageRef = ref(
          storage,
          `/departmentImages/${date}${rand}_${departmentImg?.name}`
        );
        const toBase64 = (departmentImg) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(departmentImg);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          }).catch((err) => {
            console.log(err);
          });
        const imgBase = await toBase64(departmentImg);
        await uploadString(imageRef, imgBase, "data_url").then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          data.departmentImg = downloadURL;
        });
      } else {
        data.departmentImg = "";
      }
      axios.post("/admin/postDepartments", data).then((response) => {
        console.log(response, "responseeee");
        const result = response.data;
        if (result.success) {
          message.success("new department Added");
          // navigate('/admin/AdminDepartmentPage');
          handleCloseModal();
          setRefresh(!refresh);
        } else {
          setError(result.message);
          message.error(result.message).then(() => {
            setError(null);
          });
        }
      });
    } catch (error) {
      console.log(error);
      message.error("Somthing went wrong!");
    }
  };

  return (
    <>
      <div className=" p-6 sm:p-16 h-screen border-gray-200  pb-7 ">
        <h1 className="font-semibold pl-5 text-center sm:text-left mb-2 pb-9 font-serif text-2xl">
          Departments
        </h1>
        {/* <div className=" text-center ">
         <h1 className="bg-[#194569] flex justify-center w-[100px] rounded-lg text-white py-2 px-4 text-center">Add Department </h1>
             </div> */}

        <div className="flex justify-center">
          <button
            onClick={handleOpenModal}
            className="bg-[#194569] rounded-lg py-1 text-white px-11 font-medium lg:px-36 hover:bg-opacity-90 hover:text-black"
          >
            Add Department
          </button>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2  gap-4 p-5 ">
          {departments.map((department) => (
              <SingleDepartment department={department} refresh={refresh} setRefresh={setRefresh}/>
          ))}
        </div>
      </div>

      {/* Overlay modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={handleCloseModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal */}
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-md">
              <div className="bg-[#EDF4FE] bg-opacity-70 px-4 py-3">
                <h2 className="text-lg text-center font-medium text-gray-900">
                  Add Department
                </h2>
              </div>
              <div className=" bg-[#EDF4FE]    px-4 pt-5 pb-4">
                <form component="form" onSubmit={handleDepartments}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2 "
                      htmlFor="department"
                    >
                      Department Name
                    </label>
                    <input
                      className="bg-white p-2 rounded-lg w-full"
                      type="text"
                      id="department"
                      name="department"
                      placeholder="Department Name"
                      // value={email}
                      // onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2 "
                      htmlFor="departmentImg"
                    >
                      Image
                    </label>
                    <input
                      className="bg-white p-2 rounded-lg w-full"
                      type="file"
                      id="departmentImg"
                      name="departmentImg"
                      placeholder="Department Image"
                      // value={email}
                      // onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-black font-medium mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="bg-white p-2 rounded-lg w-full"
                      id="description"
                      name="description"
                      placeholder="Add Discription"
                      // value={password}
                      // onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="error text-center w-full p-2 bg-red-600 bg-opacity-30 text-red-500">
                      {error}
                    </div>
                  )}
                  <div className="mb-4 mt-10 flex justify-center">
                    <input
                      className="bg-white  hover:bg-[#194569] text-black font-bold py-2 px-20 rounded-lg"
                      type="submit"
                      value="Continue"
                    />
                  </div>
                </form>
              </div>

              <div className="bg-[#EDF4FE] bg-opacity-70 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#194569] text-base font-medium text-white hover:bg-opacity-70 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        // Cardiologists, audiologists, dentists, ENT specialists, gynecologists, orthopedic surgeons, pediatricians, psychiatrists, veterinarians, radiologists, pulmonologists, endocrinologists, oncologists, neurologists, cardiothoracic surgeons,
      )}
    </>
  );
}

export default AdminDepartment;
