import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Signup from '../Components/Signup/Signup';
import TopNav from '../Components/TopNav/TopNav';

function SignupPage() {
  return (
    <div>
      <TopNav/>
      <Navbar/>
      <Signup />
    </div>
  );
}

export default SignupPage;
