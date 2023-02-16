import React from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import image from '../../Assets/Doctor-img.jpeg'
function ExperiencedDoctors() {
  const scrollLeft = () => {
    document.getElementById("contents").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("contents").scrollLeft += 400;
}

  return (
    <div className='  bg-[#D6E8EE] py-16'>
      <h1 className='font-bold text-center font-serif text-2xl '>Our Experienced Doctors</h1>
          
      <div className="relative">
      <div className=" flex justify-center pt-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div id="contents" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
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
    </div>

    </div>
  )
}

export default ExperiencedDoctors


  
  const Card = ()=> {
    return (
      <div>
        

      <div className="card bg-[#E3E8EE] w-[180px] h-[280px] m-2 rounded-lg shadow-lg cursor-pointer">
        <div className="top">
          <img
            className="w-[180px] h-[180px] object-cover  p-2"
            src={image}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-center p-3 bg-">
          <h1 className='text-center'>dentis</h1>
        </div>
      </div>
      </div>
    )
  }
  

  
