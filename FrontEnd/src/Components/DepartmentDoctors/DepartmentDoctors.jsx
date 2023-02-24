import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from '../../Axios/Axios'
import SingleDoctor from "./SingleDoctor";



function DepartmentDoctors() {
  
  const [results, setResults] = useState([]);
    const [Doctors,setDoctors ] = useState([])
  const { departmentId } = useParams();
  const client = JSON.parse(localStorage.getItem('clientToken'));
  const clientToken = client.clientToken
  
    useEffect(()=> {
     
      axios.get(`/getDepartmentDoctors/${departmentId}`, {headers:{'accesstoken':clientToken}}).then((response) => {
        if(response.data.success){
            setDoctors(response.data.doctors)
        }
      })
    },[])


  const handleSearch = (location) => {
  axios.get(`/getSearchDoctor?departmentId=${departmentId}&location=${location}`, {headers:{'accesstoken':clientToken}}).then((response) => {

    if(response.data.success){
      setResults(response.data.searchResults);
    }
  })
  }

  return (
    <div className=" p-5 sm:p-20 pb-10">
      <div className="flex justify-center content-center mb-8">
        <h1 className="text-2xl font-serif font-semibold">
          Available Doctors{" "}
        </h1>
      </div>
      <div className="bg-[#D6E8EE] mb-11">
      <dir className="sm:px-36 pt-7 px-10 ">
        <div className="relative ">
          
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
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
            onChange={(e)=>handleSearch(e.target.value)}
            placeholder="Search Location..."
            className="w-full py-2 pl-10 text-sm rounded-full focus:outline-none"
          />
          
        </div>
      </dir>

      <div className="  flex justify-center content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 sm:gap-20 p-6  mt-10 ">
          {/*  */}


          {
            results.length === 0 ? 
          
          Doctors.map((doctor) => (
            <Link to={`/doctorDetails/${doctor._id}`}>
           <SingleDoctor doctor={doctor}  />
           </Link>
          ))
        :
        results.map((doctor) => (
          <Link to={`/doctorDetails/${doctor._id}`}>
         <SingleDoctor doctor={doctor}  />
         </Link>
        ))
        
        }

          {/*  */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default DepartmentDoctors;
