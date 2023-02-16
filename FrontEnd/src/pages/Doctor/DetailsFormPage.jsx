import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import DoctorDetail from '../../Components/Signup/DoctorDetailForm';
import TopNav from '../../Components/TopNav/TopNav';

function DetailsFormPage() {
  return (
    <>
      <TopNav />
      <Navbar />
      <DoctorDetail/>
      <Footer />
    </>
  );
}

export default DetailsFormPage;