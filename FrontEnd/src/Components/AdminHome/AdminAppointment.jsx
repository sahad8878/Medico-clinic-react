import React from 'react'






const people = [
    {
      name: 'Jane Cooper',
      email: 'Sahad@gmail.com',
      department: 'dentist',
      number: '123456789',
      status: 'pending',
      image: 'https://bit.ly/33HnjK0',
    },
    {
      name: 'John Doe',
      email: 'Sahad@gmail.com',
      department: 'dentist',
      number: '123456789',
      status: 'approved',
      image: 'https://bit.ly/3I9nL2D',
    },
    {
      name: 'Veronica Lodge',
      email: 'Sahad@gmail.com',
      department: 'dentist',
      number: '123456789',
      status: 'pending',
      image: 'https://bit.ly/3vaOTe1',
    },
    // More people...
  ];
  
function AdminAppointments() {
  return (

    <>
               <div className=" p-6 sm:p-16 h-screen border-gray-200 ">
      <h1 className="font-semibold mb-2 pb-9 font-serif text-2xl">Appointments</h1>

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
            people.map(person =>(
          <tr className="">
            <td className=" p-3 text-sm w-6 text-gray-700 ">
              <div className="h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
              </div>
            </td> 
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {person.name}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {person.email}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                {person.number}
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
               <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50"> {person.status}</span>
            </td>
            <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                <span className=" px-3 rounded-2xl bg-slate-600">block</span>
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
