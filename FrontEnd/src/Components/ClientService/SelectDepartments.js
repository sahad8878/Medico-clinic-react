import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import axios from "../../Axios/Axios";
import SingleDipartment from "./SingleDipartment";

function SelectDepartments() {
  const [departments, setDepartments] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDepartment() {
      setIsLoading(true);
      const client = JSON.parse(localStorage.getItem("clientToken"));
      const clientToken = client.clientToken;
 
      await axios
        .get(`/getdepartments?page=${page}&limit=${limit}`, {
          headers: { accesstoken: clientToken },
        })
        .then((response) => {
          setDepartments(response.data.docs);
          setIsLoading(false);
          const newPages = [];
          for (let i = 1; i <= response.data.totalPages; i++) {
            newPages.push(i);
          }
          setPages(newPages);
        });
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
        {isLoading ? (
          <div className=" flex justify-center">
            <InfinitySpin width="200" color="#194569" />
          </div>
        ) : (
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
        )}

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
        
      </div>
    </div>
  );
}

export default SelectDepartments;
