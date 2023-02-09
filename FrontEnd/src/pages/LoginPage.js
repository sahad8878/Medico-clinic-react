import React from 'react';
import Footer from '../Components/Footer/Footer';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import TopNav from '../Components/TopNav/TopNav';

function LoginPage() {
  return (
    <div className='overflow-hidden'>
      <TopNav/>
      <Navbar/>
      <Login />
      <Footer/>
    </div>
  );
}

export default LoginPage;
