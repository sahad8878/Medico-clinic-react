import React from "react";

function DoctorHome() {
  return (
    <div className=" bg-[#EDF4FE]">
      <div className="flex-col flex sm:flex-row  justify-center content-center">
        <div className="py-36 pl-20 flex justify-center">
          <h1 className=" text-4xl font-serif font-bold ">Hai, Doctor..</h1>
        </div>
        <div className="  sm:pl-0 px-10 flex justify-center pr-8 sm:py-36">
          <h1 className=" text-4xl font-serif font-bold  ">
            you should be personable, Great listeners, and empathetic to the
            concerns of your patients
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DoctorHome;
