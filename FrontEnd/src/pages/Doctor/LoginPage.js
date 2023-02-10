import React from "react";
import Footer from "../../Components/Footer/Footer";
import DoctorLogin from "../../Components/Login/DoctorLogin";
import Navbar from "../../Components/Navbar/Navbar";
import TopNav from "../../Components/TopNav/TopNav";

function LoginPage() {
  return (
    <>
      <TopNav />
      <Navbar />
      <DoctorLogin />
      <Footer />
    </>
  );
}

export default LoginPage;