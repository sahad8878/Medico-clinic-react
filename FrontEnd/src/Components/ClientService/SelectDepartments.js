import React from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import image from '../../Assets/Doctor-img.jpeg'
function SelectDepartments() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}


  return (
    <div  className='  bg-[#EDF4FE] py-14'>
      <h1 className='font-bold text-center font-serif text-2xl '>Select departments</h1>
          
      <div className="relative  ">
     
      <div id="content" className="carousel p-4 pt-10 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide ">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
      <div className=" flex justify-center pt-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
    </div>

    </div>
  )
}

export default SelectDepartments


  
  const Card = ()=> {
    return (
   
     

      <div className="card bg-[#E3E8EE] w-[180px] h-[280px] m-2 rounded-lg shadow-lg cursor-pointer">
        <div className="top">
          <img
            className="w-[180px] h-[180px] object-cover  p-2"
            src={image}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <h1 className='text-center text-lg font-sans font-medium p-2'>dentis</h1>
        </div>
      </div>
    )
  }
  

  
