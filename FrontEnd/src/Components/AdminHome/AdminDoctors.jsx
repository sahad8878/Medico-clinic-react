import React,{useState,useEffect} from 'react'
import axios from '../../Axios/Axios'
  
function AdminDoctors() {

  const [ doctors , setdoctors ] = useState([])

  useEffect(()=>{
    axios
    .get('/doctor/getDoctorsDetails'
    ).then((response)=>{
      setdoctors(response.data.doctors)
    })
  },[])

  return (

    <>
               <div className=" p-6 sm:p-16 h-screen border-gray-200 ">
      <h1 className="font-semibold mb-2 pb-9 font-serif text-2xl">Doctors</h1>

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
                <img className="h-10 w-10 rounded-full" src={""} alt="" />
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
                <span className=" p-1.5 text-xs font-medium uppercase tracking-wider text-gray-100 bg-red-800 rounded-lg bg-opacity-75">block</span>
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
