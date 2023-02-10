import React, { useState } from "react";
import { message } from "antd";
import axios from "../../Axios/Axios"
import { useNavigate,Link } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e)=>{
    try{
       e.preventDefault();
            
       console.log(password);
       console.log(email);
       axios.post("/admin/admin", { email, password }).then((response) => {
         const result = response.data;
         if (result.success) {
          //  localStorage.setItem("AdminToken", result.token);
           message.success("Login  successfully!");
           navigate("/admin/adminHome");
         } else {
           // setErrMsg(result.msg)
           message.error(result.message);
         }
       });
     }catch(error){
      console.log(error);
      message.error("Somthing went wrong!");
     }
  }
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-start-2 border border-black-300 shadow-xl mt-20 py-20 px-10 bg-white rounded-md">
          <div className="w-full  pb-12">
            <h1
              href="#"
              className="text-black hover:underline font-mono text-2xl font-bold"
            >
              Login
            </h1>
          </div>
            <form  onSubmit={handleLogin}>

            
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md block w-full border border-black-200 py-3 px-2 mb-5"
          />

          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md block w-full border border-black-200 py-3 px-2 mb-5"
          />

          <button
            type="submit"
            className="block w-full bg-[#194569] hover:text-black text-white rounded-md py-3 px-2 mb-5"
          >
            Login
          </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
