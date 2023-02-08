import React, { useState } from "react";
import {message} from 'antd'
import axios  from "../../Axios/Axios";
import { Link,useNavigate } from "react-router-dom";
function Signup() {
  const navigate=useNavigate()

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup =async (events) => {
    try{
      events.preventDefault();
  
      axios.post(`/clientSignup`, {name,email,password,number}).then((response) => {
        const result = response.data
        if (result.success) {
            // document.cookie = `token${result.token}`
            message.success('Signup successfully!')

            navigate("/login")
        } else {
            // setErrMsg(result.msg)
        message.error(result.message)

        }
    })
    }catch(error){
      console.log(error)
      message.error("Somthing went wrong!")
      
    }
  };

  return (
    <>
      {/* <div className="signup-1 flex items-center relative h-screen">
        <div className="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
            <div className="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600">
              <h2 className="text-3xl text-gray-800 text-center">
                Create Your Account
              </h2>

              <div className="signup-form mt-6 md:mt-12">
                <form onSubmit={handleSignup}>
                  <div className="border-2 border-solid rounded flex items-center mb-4">
                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <span className="far fa-user text-gray-500"></span>
                     </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="name"
                        className="h-10 py-1 pr-3 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                      />
                    </div>
                  </div>

                  <div className="border-2 border-solid rounded flex items-center mb-4">
                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <span className="far fa-envelope text-gray-500"></span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="E-mail"
                        className="h-10 py-1 pr-3 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="border-2 border-solid rounded flex items-center mb-4">
                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <span className="far fa-envelope text-gray-500"></span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="h-10 py-1 pr-3 w-full"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        name="number"
                      />
                    </div>
                  </div>

                  <div className="border-2 border-solid rounded flex items-center mb-4">
                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <span className="fas fa-asterisk text-gray-500"></span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="password"
                        placeholder="Password"
                        className="h-10 py-1 pr-3 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-center mt-6">
                    By signing up, you agree to our{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                      Privacy Policy
                    </a>
                  </p>

                  <div className="text-center mt-6 md:mt-12">
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">
                      Sign Up <span className="far fa-paper-plane ml-2"></span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="border-t border-solid mt-6 md:mt-12 pt-4">
                <p className="text-gray-500 text-center">
                  Already have an account,{" "}
                  <Link to="/login" className="text-indigo-600 hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}


<div className="bg-[#EDF4FE]  w-screen flex justify-center ">
      <div className="   w-[600px] mt-[240px]">
        <h2 className=" text-3xl   font-mono font-bold">Create An Account</h2>
        <p className="mb-10 text-[#1F6CD6] cursor-pointer">
           <Link to="/login" >
          Already have one? Log in
           </Link>
          </p>
        <form onSubmit={handleSignup}>
        <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-white p-2 rounded-lg w-full"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="phone"
            >
             Phone
            </label>
            <input
              className="bg-white p-2 rounded-lg w-full"
              type="number"
              id="number"
              name="number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              required
            />
          </div>
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
              className="bg-white  hover:bg-[#194569] text-black font-medium py-2 px-32 mb-20 rounded-lg"
              type="submit"
              value="Save and Continue"
            />
          </div>
        </form>
      </div>
    </div>


    </>
  );
}

export default Signup;
