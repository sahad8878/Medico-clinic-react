import React from 'react'






const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image: 'https://bit.ly/33HnjK0',
    },
    {
      name: 'John Doe',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Tester',
      email: 'john.doe@example.com',
      image: 'https://bit.ly/3I9nL2D',
    },
    {
      name: 'Veronica Lodge',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: ' Software Engineer',
      email: 'veronica.lodge@example.com',
      image: 'https://bit.ly/3vaOTe1',
    },
    // More people...
  ];
  
function AdminClient() {
  return (

    <>
     <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map(person => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

{/* <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap">
              John Doe
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              john.doe@example.com
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              (123) 456-7890
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit
              </a>
            </td>
          </tr>
           <!-- Add more rows here as needed --> 
        </tbody>
      </table>
    </div> */}



    {/* <div className="container   bg-blue-gray-900 ">
       <div class=" shadow-md sm:rounded-lg">
         <table class="w-full text-sm text-left min-[640px]:text-gray-500 dark:text-gray-400">
         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
                 <th scope="col" class="px-6 py-3">
                     Product name
                 </th>
                 <th scope="col" class="px-6 py-3">
                     Color
                 </th>
                 <th scope="col" class="px-6 py-3">
                     Category
                 </th>
                 <th scope="col" class="px-6 py-3">
                     Price
                 </th>
                 <th scope="col" class="px-6 py-3">
                     Action
                 </th>
             </tr>
         </thead>
         <tbody>
             <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Apple MacBook Pro 17"
                 </th>
                 <td class="px-6 py-4">
                     Sliver
                 </td>
                 <td class="px-6 py-4">
                     Laptop
                 </td>
                 <td class="px-6 py-4">
                     $2999
                 </td>
                 <td class="px-6 py-4">
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                 </td>
             </tr>
             <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Microsoft Surface Pro
                 </th>
                 <td class="px-6 py-4">
                     White
                 </td>
                 <td class="px-6 py-4">
                     Laptop PC
                 </td>
                 <td class="px-6 py-4">
                     $1999
                 </td>
                 <td class="px-6 py-4">
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                 </td>
             </tr>
             <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Magic Mouse 2
                 </th>
                 <td class="px-6 py-4">
                     Black
                 </td>
                 <td class="px-6 py-4">
                     Accessories
                 </td>
                 <td class="px-6 py-4">
                     $99
                 </td>
                 <td class="px-6 py-4">
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                 </td>
             </tr>
             <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Google Pixel Phone
                 </th>
                 <td class="px-6 py-4">
                     Gray
                 </td>
                 <td class="px-6 py-4">
                     Phone
                 </td>
                 <td class="px-6 py-4">
                     $799
                 </td>
                 <td class="px-6 py-4">
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                 </td>
             </tr>
             <tr>
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Apple Watch 5
                 </th>
                 <td class="px-6 py-4">
                     Red
                 </td>
                 <td class="px-6 py-4">
                     Wearables
                 </td>
                 <td class="px-6 py-4">
                     $999
                 </td>
                 <td class="px-6 py-4">
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                 </td>
             </tr>
         </tbody>
          </table>
     </div>
 </div> */}



 
</>
  )
}

export default AdminClient
