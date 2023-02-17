import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar';
import Navbar from '../../Components/Navbar/Navbar';
import DoctorDetail from '../../Components/Signup/DoctorDetailForm';
import TopNav from '../../Components/TopNav/TopNav';
import axios from '../../Axios/Axios'

function DetailsFormPage() {
  const navigate = useNavigate()
  const [ refresh , setRefresh ] = useState(false)

  useEffect(()=>{
    const doctor = JSON.parse(localStorage.getItem('doctorToken'));
    console.log(doctor.doctorId);
    axios.get(`/doctor/statusChecking?id=${doctor.doctorId}`).then((response) => {
    const result = response.data
    console.log(result.doctorStatus,"aaa");
    if(result.doctorStatus === "pending"){
     navigate('/doctor/doctorPendingPage')
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
      <TopNav />
      {/* <Navbar /> */}
      <DoctorNavbar/>
      <DoctorDetail/>
      <Footer />
    </>
  );
}

export default DetailsFormPage;