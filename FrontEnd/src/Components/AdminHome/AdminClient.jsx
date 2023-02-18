import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import axios from '../../Axios/Axios'
import { message } from 'antd';

function AdminClient() {
  const [ clients , setClients ] = useState([])
const [ refresh, setRefresh] = useState(false)
  useEffect(()=>{
    axios
    .get('/admin/getClientDetails'
    ).then((response)=>{
      setClients(response.data.clients)
    })
  },[refresh])

  // Block Client
  const blockClient = (id) =>{
    console.log(id,"block");
  axios.patch('/admin/blockClient',{id}).then((response) => {
    if(response.data.success){
      console.log(response.data);
      message.success(response.data.message)
      setRefresh(!refresh) 
    }else{
      message.error(response.data.message)
    }
  })
}

 // UnBlock Client
 const unBlockClient = (id) =>{
  console.log(id,"unblock");
  axios.patch('/admin/unBlockClient',{id}).then((response) => {
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
               <div className=" p-6 sm:p-16 h-screen border-gray-200  pb-7 ">
      <h1 className="font-semibold text-center sm:text-left mb-2 pb-9 font-serif text-2xl"> Clients</h1>

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
              Date
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
            </th>
            
          </tr>
        </thead>
        <tbody className=" bg-white divide-y divide-gray-200">
          {
            clients.map(client =>(
          <tr key={client._id} className="">
            <td className=" p-3 text-sm w-6 text-gray-700 ">
              <div className="h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={''} alt="" />
              </div>
            </td> 
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {client.fName}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {client.email}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {client.number}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
              <Moment format="YYYY/MM/DD">{client.createdAt}</Moment>
            </td>
          
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
            {client.block == true ?
                <button onClick={()=>unBlockClient(client._id)}  className=" p-1.5 text-xs font-medium uppercase tracking-wider text-gray-100 bg-red-800 rounded-lg bg-opacity-75 cursor-pointer hover:bg-opacity-95">Unblock</button>
               : <button onClick={()=>blockClient(client._id)}  className=" p-1.5 text-xs font-medium uppercase tracking-wider text-gray-100 bg-red-800 rounded-lg bg-opacity-95 cursor-pointer hover:bg-opacity-75">Block</button>
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

export default AdminClient
