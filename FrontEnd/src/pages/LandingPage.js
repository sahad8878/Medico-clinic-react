import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TopNav from '../Components/TopNav/TopNav'

function LandingPage() {
  // useEffect(()=>{
  //   const token = localStorage.getItem("clientToken")
  //   if (token) {
  //     axios.get()
  //   } else {
  //     // Navigate('/singin')
  //   }
  // })
  return (
    <>
   <TopNav/>
    <Navbar/>
    <gksl/>
    </>
  )
}

export default LandingPage
