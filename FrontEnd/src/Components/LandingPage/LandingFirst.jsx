import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import doctorImage from "../../Assets/doctor-image.jpg";

function LandingFirst() {
  return (
    <>
      <div className=" flex  w-screen h-screen">
        <div className=" mt-[140px] bg-[#D6E8EE] w-[40%] container text-center">
          <h1 className="flex text-4xl font-mono justify-center mt-44 font-bold">
            LET'S FIND YOUR<br/> DOCTOR
          </h1>
          <span className="cursor-pointer flex justify-center ml-44 mt-10 font-semibold text-xl w-60 bg-[#194569] p-4  text-white hover:text-black">Appointment  <ArrowForwardIcon
              style={{ marginLeft: "10px", marginTop: "5px" }}
            />
            </span>
        </div>
        <div className="mt-[140px] w-[60%] bg-white items-center">
          <img
            className="w-max h-max mt-20 ml-32"
            src={doctorImage}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
}

export default LandingFirst;
