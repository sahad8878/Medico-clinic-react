import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import image from "../../Assets/Doctor-img.jpeg";
import axios from "../../Axios/Axios";
import SingleDipartment from "./SingleDipartment";

function SelectDepartments() {
  const [departments, setDepartments] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function getDepartment() {
      const client = JSON.parse(localStorage.getItem('clientToken'));
      const clientToken = client.clientToken
      console.log(clientToken,"token");
      const response = await axios.get(
        `/getdepartments?page=${page}&limit=${limit}`,
         {headers:{'accesstoken':clientToken}}
      );

      console.log(response.data, "sadfasdfsadf");
      setDepartments(response.data.docs);
      const newPages = [];
      for (let i = 1; i <= response.data.totalPages; i++) {
        newPages.push(i);
      }
      setPages(newPages);
    }
    getDepartment();
  }, [page, limit]);

  function handlePrevClick() {
    setPage((prevPage) => prevPage - 1);
  }

  function handleNextClick() {
    setPage((prevPage) => prevPage + 1);
  }
  function handlePageClick(selectedPage) {
    setPage(selectedPage);
  }
  return (
    <div className="  bg-[#EDF4FE] py-14">
      <h1 className="font-bold text-center font-serif text-2xl ">
        Select departments
      </h1>

      <div className=" ">
        <div
          id="content"
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-5 "
        >
          {departments.map((department) => (
            <Link to={`/departmentDoctors/ ${department._id}`}>
              <SingleDipartment department={department} />
            </Link>
          ))}
        </div>

        <div className=" flex justify-center pt-5 ">
          <button
            onClick={handlePrevClick}
            disabled={page === 1}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          {pages.map((pageNum) => (
          <button
           key={pageNum} 
           onClick={() => handlePageClick(pageNum)}
           className="p-3 m-2 rounded-full bg-white"
           >
            {pageNum}
          </button>
        ))}
          <button
            onClick={handleNextClick}
            disabled={page === pages.length}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* <div className="flex justify-center">
        <button onClick={handlePrevClick} disabled={page === 1}>
          Previous
        </button>
              {
                pages.map((page)=>{

                })
              }

        <button className="p-4" onClick={handleNextClick} disabled={departments.length < limit}>
          Next
        </button>
      </div> */}
      </div>
    </div>
  );
}

export default SelectDepartments;
