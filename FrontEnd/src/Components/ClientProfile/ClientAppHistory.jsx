import React from 'react'

function ClientAppHistory() {
  return (
    <div className=" p-5 sm:p-20 pb-10">
      <div className="bg-[#D6E8EE] mb-11">
        <div className="flex justify-center content-center py-8">
          <h1 className="text-2xl font-serif  font-semibold">Appointments</h1>
        </div>

        {/*  */}
        <div className="overflow-auto rounded-lg shadow pb-14 px-20">
          <table className="w-full">
            <thead className=" border-b-2  border-black">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                 Doctor Name
                </th>
                {/* <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Gender
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Age
                </th> */}
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Appointment Date
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Appointment Time
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Fees
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Date
                </th>
              </tr>
            </thead>
            <tbody className="  divide-y divide-gray-500 ">
             
                <tr className="">
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {/* {appointment.client.fName} */}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {/* {appointment.client.sex} */}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {/* {appointment.client.age} */}
                  </td>

                  {/* <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {appointment.date}
                  </td>
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {appointment.time}
                  </td> */}
                  
                  <td className=" p-3 text-base text-gray-700 whitespace-nowrap">
                    {/* <Moment format="YYYY/MM/DD">{appointment.createdAt}</Moment> */}
                  </td>


                </tr>
             
            </tbody>
          </table>
        </div>

        {/*  */}
      </div>
    </div>
  )
}

export default ClientAppHistory
