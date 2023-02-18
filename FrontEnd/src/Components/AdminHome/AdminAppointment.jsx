import { message } from 'antd';
import React,{useState,useEffect} from 'react'
import Moment from 'react-moment';

import axios from '../../Axios/Axios'

function AdminAppointments() {
  const [ penDoctors , setpenDoctors ] = useState([])
  const [ refresh , setRefresh ] = useState(false)

  useEffect(()=>{
    axios
    .get('/admin/getPendingDoctors'
    ).then((response)=>{
      if(response.data.success){
        setpenDoctors(response.data.pendingDoctors)
      }else{
        message.error(response.data.error)
      }
    })
  },[refresh])

// accept appointment
  const acceptAppointment = (id) =>{

    axios.patch('/admin/acceptAppointment',{id}).then((response) => {
      if(response.data.success){
        message.success(response.data.message)
        setRefresh(!refresh) 
      }else{
        message.error(response.data.message)
      }
    })
  }


  // reject appointment requests

  const rejectAppointment = (id) =>{
    axios.patch('/admin/rejectAppointment',{id}).then((response) => {
      if(response.data.success){
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
      <h1 className="font-semibold text-center sm:text-left mb-2 pb-9 font-serif text-2xl">Appointments</h1>

      <div className="overflow-auto rounded-lg shadow">

      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
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
              Department
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Location
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Date
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
            </th>
          </tr>
        </thead>
        <tbody className=" bg-white divide-y divide-gray-200">
          {
            penDoctors.map(penDoctor =>(
          <tr key={penDoctor._id} className="">
            {/* <td className=" p-3 text-sm w-6 text-gray-700 ">
              <div className="h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
              </div>
            </td>  */}
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {penDoctor.fName}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {penDoctor.email}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {penDoctor.number}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {penDoctor.specialization}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {penDoctor.location}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
              <Moment format='YYYY/MM/DD' >
                {penDoctor.createdAt}

              </Moment>
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">

               <button onClick={()=>acceptAppointment(penDoctor._id)} className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-80 hover:bg-opacity-50">Accept</button>
               
            <button onClick={()=>rejectAppointment(penDoctor._id)} className="p-1.5 ml-5 text-xs font-medium uppercase tracking-wider text-red-600 bg-yellow-200 rounded-lg bg-opacity-80 hover:bg-opacity-50">Reject</button>
         
               
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

export default AdminAppointments
