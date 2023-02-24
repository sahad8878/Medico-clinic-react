import React,{useEffect,useState} from 'react';
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar';
import TopNav from '../../Components/TopNav/TopNav';
import axios from '../../Axios/Axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import DoctorAppointments from '../../Components/DoctorAppointments/DoctorAppointments';
import { message } from 'antd';
import {useDoctorAuthContext} from '../../Hooks/useDoctorAuthContext'

function DoctorAppointmentsPage() {
  const {dispatch } = useDoctorAuthContext();

    const navigate = useNavigate()
    const [ refresh , setRefresh ] = useState(false)
    useEffect(()=>{
      const doctor = JSON.parse(localStorage.getItem('doctorToken'));
      const doctorToken = doctor.doctorToken
      axios.get(`/doctor/statusChecking?id=${doctor.doctorId}`,{headers:{'doctortoken':doctorToken}}).then((response) => {
      const result = response.data
      console.log(result.doctorStatus,"aaa");
      if(result.doctorStatus === "blocked"){
        message.error("Youn have been blocked")
        localStorage.removeItem("doctorToken");
        dispatch({ type: "LOGOUT" })
        navigate('/')
        setRefresh(!refresh)
      }
      if(result.doctorStatus === "approved"){
       navigate('/doctor/doctorDetailsForm')
       setRefresh(!refresh)
      }
      if(result.doctorStatus === "pending"){
        navigate('/doctor/doctorPendingPage')
       setRefresh(!refresh)
       } 
      })
     
    },[refresh])

  return (
    <div>
    <TopNav/>
    <DoctorNavbar />
        <div className=' mt-[112px]  md:mt-[127px]'>
        <DoctorAppointments/>
         <Footer/>
        </div>
    </div>
  )
}

export default DoctorAppointmentsPage
