import React from "react";
import doctorImg from "../../Assets/doctor-img2.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function LandingSecond() {
  return (
    <>
      <div className="flex bg-[#EDF4FE] h-[500px] ">
        <div className="w-[50%]">
          <img className="mt-10 ml-24" src={doctorImg} alt="doctorsImg" />
        </div>
        <div className="w-[50%] text-left">
          <h1 className="flex justify-center mt-32 font-mono font-bold text-3xl">MEDICO FOR PRIVATE PRACTICES</h1>
          <h2 className="flex justify-center font-serif mt-7 text-3xl">Are you a provider interested in <br/>reaching new patients?</h2>
          <span className="cursor-pointer flex justify-center ml-64 mt-10 font-semibold text-xl w-60 bg-[#194569] p-4  text-white hover:text-black">List your paractice  <ArrowForwardIcon
              style={{ marginLeft: "10px", marginTop: "5px" }}
            />
            </span>
        </div>
      </div>
    </>
  );
}

export default LandingSecond;
