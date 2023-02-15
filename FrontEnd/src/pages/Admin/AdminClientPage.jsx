import React from 'react'
import AdminClient from '../../Components/AdminHome/AdminClient'
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'

function AdminClientPage() {
  return (
   <>
   <div className='flex'>
      <AdminNavbar/>
     <div className=' mt-[88px]  w-screen sm:mt-[104px] sm:ml-[18rem]'>
            

      <AdminClient/>
            {/* </div> */}
     </div>

   </div>

      </>
  )
}

export default AdminClientPage
