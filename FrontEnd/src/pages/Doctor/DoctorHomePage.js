import React,{useEffect,useState} from 'react';
import DoctorHome from '../../Components/DoctorHome/DoctorHome';
import DoctorNavbar from '../../Components/Navbar/DoctorNavbar';
import TopNav from '../../Components/TopNav/TopNav';
import axios from '../../Axios/Axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
// import Footer from '../../Components/Footer/Footer';

function DoctorHomePage() {
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
        <DoctorHome />
         <Footer/>
        </div>
    </div>
  );
}

export default DoctorHomePage;
