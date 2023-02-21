import React,{useEffect,useState} from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import image from '../../Assets/Doctor-img.jpeg'
import axios from '../../Axios/Axios'
import SingleDipartment from './SingleDipartment';

function SelectDepartments() {


  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios.get("/getdepartments").then((response) => {
      console.log(response.data);
      setDepartments(response.data.departments);
    });
  }, []);

  return (
    <div  className='  bg-[#EDF4FE] py-14'>
      <h1 className='font-bold text-center font-serif text-2xl '>Select departments</h1>
          
      <div className=" ">
     
      <div id="content" className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-5 ">
        
      {departments.map((department) =>(
        <Link to={`/departmentDoctors/ ${department._id}`}>
        <SingleDipartment department={department}/>
        </Link>
        ))}
      </div>
    </div>

    </div>
  )
}

export default SelectDepartments


  

  

  
