import React from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Signup from '../Components/Signup/Signup';
import TopNav from '../Components/TopNav/TopNav';

function SignupPage() {
  return (
    <div>
      <TopNav/>
      <Navbar/>
      <Signup />
      <Footer/>
    </div>
  );
}

export default SignupPage;
