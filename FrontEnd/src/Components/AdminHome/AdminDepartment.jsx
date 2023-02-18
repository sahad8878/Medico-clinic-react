import React from "react";
import img from '../../Assets/doctor-img2.png'

function AdminDepartment() {
  const departments = [
      {
          name:'dentists',
          img:img
      },
      {
        name:'dentists',
        img:img
    }, 
    {
        name:'dentists',
        img:img
    },
    {
        name:'dentists',
        img:img
    },
    ,
    {
        name:'dentists',
        img:img
    },,
    {
        name:'dentists',
        img:img
    }
  ]

  return (
    <>
      <div className=" p-6 sm:p-16 h-screen border-gray-200  pb-7 ">
        <h1 className="font-semibold pl-5 text-center sm:text-left mb-2 pb-9 font-serif text-2xl">
          Departments
        </h1> 
        {/* <div className=" text-center ">
         <h1 className="bg-[#194569] flex justify-center w-[100px] rounded-lg text-white py-2 px-4 text-center">Add Department </h1>
             </div> */}
             <div class="flex justify-center">
  <button className="bg-[#194569] rounded-lg py-1 text-white px-11 font-medium lg:px-36 hover:bg-opacity-90 hover:text-black">Add Department</button>
</div>
        <div className=" grid grid-cols-1 lg:grid-cols-2  gap-4 p-5 ">
           
     {  
     departments.map(department => (

     
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className=" inset-0 flex items-center justify-center ">
    <img class="object-cover w-full rounded-t-lg  md:h-auto  md:rounded-none md:rounded-l-lg" src={department.img} alt=""/>
          
        </div>
      
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{department.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
))
}

         

          {/* <table className="w-full">
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
            <span  onClick={""} className=" p-1.5 text-xs font-medium uppercase tracking-wider text-gray-100 bg-red-800 rounded-lg bg-opacity-75">block</span>

            </td>
          </tr>
          ))
        }   
        </tbody>
      </table> */}
        </div>
      </div>
    </>
  );
}

export default AdminDepartment;
