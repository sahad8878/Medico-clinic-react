import React,{useEffect,useState} from "react";
import {  useParams } from "react-router-dom";
import axios from "../../Axios/Axios"


function DoctorDetails() {


    const [Doctor,setDoctor ] = useState([])
    const { doctorId } = useParams();
      useEffect(()=> {
        axios.get(`/getDoctorDetails/${doctorId}`).then((response) => {
          if(response.data.success){
      
              setDoctor(response.data.doctor)
          }
        })
      },[])

  return (
    <div className="bg-[#EDF4FE] h-full px-28 lg:px-44 py-32">
      {/* <div className='bg-gray-800 h-screen w-[50%]'><h1>photos</h1> </div>
            <div className='bg-neutral-600 w-[50%]'>fasdfjaskdjflasjkd</div> */}

      <div className="flex flex-col md:flex-row ">
        <div className="  w-full    md:w-[50%] flex sm:justify-end justify-center  content-center">
          <div className="bg-[#E3E8EE] max-w-md  ">
            <div className="  flex items-center justify-end ">
              <div className="  ">
                <img className="h-96" src={Doctor.doctorImg} alt="" />
              </div>
            </div>
            <div className="text-center p-3">
              <h1 className="text-black font-serif font-bold">
                {Doctor.fName}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full  bg-white   md:w-[50%] ml-4 sm:mt-0 mt-4 flex justify-start content-start  ">
          <div className="container bg-[#E3E8EE]  ">
            <div className="flex flex-row py-20">
              <div className="   px-10  " >
                <ul className="list-unstyled">
                  <li className="mb-7">
                    <span className="text-black font-serif font-medium text-lg">
                      Specialization
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black font-serif font-medium text-lg">
                      Education
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black font-serif font-medium text-lg">
                      Experience
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black font-serif font-medium text-lg">
                      Location:
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black font-serif font-medium text-lg">
                      Address
                    </span>
                  </li>
                </ul>
              </div>

              <div className="w-full sm:px-28  ">
                <ul className="list-unstyled">
                  <li className="mb-7">
                    <span className="text-black  font-sans font-semibold text-xl ">
                     {Doctor.specialization}
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black  font-sans font-semibold text-xl ">
                     {Doctor.education}
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black font-sans font-semibold text-xl">
                      {Doctor.experience}
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black font-sans font-semibold text-xl">
                      {Doctor.location}
                    </span>
                  </li>
                  <li className="mb-7">
                    <span className="text-black font-sans font-semibold text-xl">
                      {Doctor.address}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
