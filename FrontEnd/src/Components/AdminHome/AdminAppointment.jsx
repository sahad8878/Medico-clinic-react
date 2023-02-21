import { message } from 'antd';
import React,{useState,useEffect} from 'react'

import axios from '../../Axios/Axios'
import SingleAppointment from './SingleAppointment';

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
              Licence
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
            <SingleAppointment penDoctor={penDoctor} refresh={refresh} setRefresh={setRefresh}/>
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
