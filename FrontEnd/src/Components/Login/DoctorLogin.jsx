import React,{useState} from 'react'
import { message } from "antd";
import axios from "../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DoctorLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        console.log(password);
        console.log(email);
        axios.post("/clientLogin", { email, password }).then((response) => {
          const result = response.data;
          if (result.success) {
            localStorage.setItem("DoctorToken", result.token);
            message.success("Login  successfully!");
            navigate("/doctor");
          } else {
            // setErrMsg(result.msg)
            message.error(result.message);
          }
        });
      } catch (error) {
        console.log(error);
        message.error("Somthing went wrong!");
      }
    };
    return (
       <>
      <div className="bg-[#EDF4FE] w-screen  flex justify-center  ">
        <div className="   w-[600px] mt-[240px] pb-20">
          <h2 className=" text-3xl   font-mono font-bold">Log In With Email</h2>
          <p className="mb-10 text-[#1F6CD6] cursor-pointer">
             <Link to="/doctor/doctorSignup" >
            Create New Account? Signup
  
             </Link>
            
            </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-white p-2 rounded-lg w-full"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-white p-2 rounded-lg w-full"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mb-4 mt-10 flex justify-center">
              <input
                className="bg-white  hover:bg-[#194569] text-black font-medium py-2 px-32 rounded-lg"
                type="submit"
                value="Continue"
              />
            </div>
          </form>
        </div>
      </div>
      </>
    );
}

export default DoctorLogin
