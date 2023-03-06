import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import axios from "../../Axios/Axios";
import SingleDoctor from "./SingleDoctor";

function DepartmentDoctors() {
  const [results, setResults] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [pages, setPages] = useState([]);

  const client = JSON.parse(localStorage.getItem("clientToken"));
  const clientToken = client.clientToken;

  const { departmentId } = useParams();

  useEffect(() => {
    async function getDoctors() {
      setIsLoading(true);

      await axios
        .get(
          `/getDepartmentDoctors/${departmentId}/doctors?page=${page}&limit=${limit}`,
          { headers: { accesstoken: clientToken } }
        )
        .then((response) => {
          const data = response.data.docs;
          setDoctors(data);
          setIsLoading(false);
          const newPages = [];
          for (let i = 1; i <= response.data.totalPages; i++) {
            newPages.push(i);
          }
          setPages(newPages);
        });
    }
    getDoctors();
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

  const handleSearch = (location) => {
    axios
      .get(
        `/getSearchDoctor?departmentId=${departmentId}&location=${location}`,
        { headers: { accesstoken: clientToken } }
      )
      .then((response) => {
        if (response.data.success) {
          setResults(response.data.searchResults);
        }
      });
  };
  return (
    <div className=" p-5 sm:p-20 pb-10">
      <div className="flex justify-center content-center mb-8">
        <h1 className="text-2xl font-serif font-semibold">Available Doctors</h1>
      </div>
      <div className="bg-[#D6E8EE] mb-11">
        {isLoading ? (
          <div className=" flex justify-center">
            <InfinitySpin width="200" color="#194569" />
          </div>
        ) : (          
          <div>
            {doctors.length === 0 ?
            <div className="flex p-16 justify-center font-serif text-[#194569] text-xl"> Doctors Not Available..!</div>
            :
            <div>
            <dir className="sm:px-36 pt-7 px-10 ">
              <div className="relative ">
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
                  name="Search"
                  type="text"
                  //  value={query} onChange={(event) => setQuery(event.target.value)}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search Location..."
                  className="w-full py-2 pl-10 text-sm rounded-full focus:outline-none"
                />
              </div>
            </dir>

            <div className="  flex justify-center content-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 sm:gap-20 p-6  mt-10 ">
                {/*  */}

                {results.length === 0
                  ? doctors.map((doctor) => (
                      <Link to={`/doctorDetails/${doctor._id}`}>
                        <SingleDoctor doctor={doctor} />
                      </Link>
                    ))
                  : results.map((doctor) => (
                      <Link to={`/doctorDetails/${doctor._id}`}>
                        <SingleDoctor doctor={doctor} />
                      </Link>
                    ))}

                {/*  */}
              </div>
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
                  className={`p-2 m-1 rounded-full ${
                    page == pageNum ? "bg-[#194569] text-white" : "bg-white"
                  } `}
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
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default DepartmentDoctors;
