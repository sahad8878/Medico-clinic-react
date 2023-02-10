import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TopNav from '../../Components/TopNav/TopNav'
import LandingFirst from '../../Components/LandingPage/LandingFirst'
import LandingSecond from '../../Components/LandingPage/LandingSecond'
import LandigThird from '../../Components/LandingPage/LandigThird'
import Footer from '../../Components/Footer/Footer'

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
    <LandingFirst/>
    <LandingSecond/>
    <LandigThird/>
    <Footer/>
    </>
  )
}

export default LandingPage
