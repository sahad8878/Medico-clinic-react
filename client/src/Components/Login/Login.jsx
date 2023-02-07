import React, { useState } from "react";
import { message } from "antd";
import axios from "../../Axios/Axios";
import { useNavigate } from "react-router-dom";
function Login() {
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
          localStorage.setItem("clientToken",result.token);
          
          message.success("Login  successfully!");
          navigate("/");
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
    <div>
      <h1>login page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-200 p-2 rounded-lg w-full"
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
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-200 p-2 rounded-lg w-full"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
