import React, { useEffect,useState } from "react";
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar'
import Footer from '../../Components/Footer/Footer'
import TopNav from '../../Components/TopNav/TopNav'
import { useDoctorAuthContext } from '../../Hooks/useDoctorAuthContext';
import { useNavigate } from "react-router-dom";
import axios from '../../Axios/Axios'


function DoctorPendingPage() {
  const { doctor } = useDoctorAuthContext()
const navigate = useNavigate()
const [ refresh , setRefresh ] = useState(false)

  useEffect(()=>{
    const doctor = JSON.parse(localStorage.getItem('doctorToken'));
    console.log(doctor.doctorId);
    axios.get(`/doctor/statusChecking?id=${doctor.doctorId}`).then((response) => {
    const result = response.data
    console.log(result.doctorStatus,"aaa");
    if(result.doctorStatus === "approved"){
     navigate('/doctor/doctorDetailsForm')
     setRefresh(!refresh)
    }
    if(result.doctorStatus === "active"){
      navigate('/doctor')
     setRefresh(!refresh)
     } 
    })
   
  },[refresh])
  return (
    <>
    <TopNav/>
    <DoctorNavbar/>
    <div className="flex flex-col md:flex-row mt-[110px]  md:mt-[129px]">
      <div className="  w-full   bg-[#EDF4FE]  flex justify-center content-center">
        <div className="p-20 px-46 lg:p-44">
          <h1 className=" text-4xl font-serif font-bold ">
            Your request has not been approved yet. After verification you will
            get notification
          </h1>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default DoctorPendingPage;
