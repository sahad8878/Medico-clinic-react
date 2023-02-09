import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <footer className=" bg-[#D6E8EE]  text-black  py-4">
        <div className="container mx-auto px-4 pt-7">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/12 px-14">
              <h4 className="font-normal text-1 mb-4">MEDICO</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-3/12 px-1">
              <h4 className="font-normal text-1 mb-4">Top specialities</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    Dentist
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    Cardiologist
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    Dermatologists
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-black">
                    orthopedics
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-3/12 px-1">
              <ul className="list-unstyled cursor-pointer">
                <li className="mb-2 mt-24">
                  <a href="#" className="text-gray-500 hover:text-black">
                    PHONE: 1234567890
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-black">
                    EMAIL: medico@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-3/12 px-1 ">
              <ul className="list-unstyled  cursor-pointer flex flex-row list-none">
                <li className="mb-2 mt-32 px-3">
                  <a href="#" className="text-black hover:text-blue-900">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="mb-2 mt-32 px-3">
                  <a className="text-black hover:text-[#d62976]">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="mb-2 mt-32 px-3">
                  <a className="text-black hover:text-[#00acee]">
                    <TwitterIcon />
                  </a>
                </li>
                <li className="mb-2 mt-32 px-3">
                  <a className="text-black hover:text-[#0A66C2]">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 pt-4 text-sm">
            Copyright © 2023 All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
