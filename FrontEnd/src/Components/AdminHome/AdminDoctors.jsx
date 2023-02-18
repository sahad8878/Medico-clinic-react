import React,{useState,useEffect} from 'react'
import axios from '../../Axios/Axios'
  import { message } from 'antd'
function AdminDoctors() {

  const [ doctors , setdoctors ] = useState([])
  const [ refresh , setRefresh ] = useState(false)
  
  useEffect(()=>{
    axios
    .get('/admin/getDoctorsDetails'
    ).then((response)=>{
      console.log(response.data.doctors.block
        );
      setdoctors(response.data.doctors)
    })
  },[refresh])

  // Block doctor
     const blockDoctor = (id) =>{
      console.log(id,"unblock");
    axios.patch('/admin/blockDoctor',{id}).then((response) => {
      if(response.data.success){
        console.log(response.data);
        message.success(response.data.message)
        setRefresh(!refresh) 
      }else{
        message.error(response.data.message)
      }
    })
  }

  // UnBlock Doctor
  const unBlockDoctor = (id) =>{
    console.log(id,"unblock");
    axios.patch('/admin/unBlockDoctor',{id}).then((response) => {
      if(response.data.success){
        console.log(response.data);
        message.success(response.data.message)
        setRefresh(!refresh) 
      }else{
        message.error(response.data.message)
      }
    })
  }



  return (

    <>
               <div className=" p-6 sm:p-16 h-screen border-gray-200 ">
      <h1 className="font-semibold text-center sm:text-left mb-2 pb-9 font-serif text-2xl">Doctors</h1>

      <div className="overflow-auto rounded-lg shadow">

      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="">
           
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Phone
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
            </th>
          </tr>
        </thead>
        <tbody className=" bg-white divide-y divide-gray-200">
          {
            doctors.map(doctor =>(
          <tr  key={doctor._id} className="">
            <td className=" p-3 text-sm w-6 text-gray-700 ">
              <div className="h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={doctor.doctorImg} alt="" />
              </div>
            </td> 
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {doctor.fName}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {doctor.email}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {doctor.number}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
               <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50"> {doctor.status}</span>
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
              {doctor.block == true ?
                <button onClick={()=>unBlockDoctor(doctor._id)}  className=" p-1.5 text-xs font-medium uppercase tracking-wider text-gray-100 bg-red-800 rounded-lg bg-opacity-75 cursor-pointer hover:bg-opacity-95">Unblock</button>
               : <button onClick={()=>blockDoctor(doctor._id)}  className=" p-1.5 text-xs font-medium uppercase tracking-wider text-gray-100 bg-red-800 rounded-lg bg-opacity-95 cursor-pointer hover:bg-opacity-75">Block</button>
              }
            </td>
          </tr>
          ))
           }   
        </tbody>
      </table>
      </div>
    </div>


    
 
</>
  )
}

export default AdminDoctors
