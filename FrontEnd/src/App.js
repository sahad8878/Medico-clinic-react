/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';
import { useAdminAuthContext } from './Hooks/useAdminAuthContext';
import { useDoctorAuthContext } from './Hooks/useDoctorAuthContext';


import './App.css';

// client pages
import LandingPage from './Pages/Client/LandingPage';
import LoginPage from './Pages/Client/LoginPage';
import SignupPage from './Pages/Client/SignupPage';
import ServicePage from './Pages/Client/ServicePage';
import DepartmentDoctorsPage from './Pages/Client/DepartmentDoctorsPage';
import DoctorDetailsPage from './Pages/Client/DoctorDetailsPage'

// doctor pages
import DoctorHome from './Pages/Doctor/DoctorHomePage';
import DoctorLogin from './Pages/Doctor/LoginPage';
import DoctorSignup from './Pages/Doctor/SignupPage';
import DoctorPendingPage from './Pages/Doctor/DoctorPendingPage';
import DoctorDetailsForm from './Pages/Doctor/DetailsFormPage'
import DoctorAppointmentsPage from './Pages/Doctor/DoctorAppointmentsPage';

// admin pages
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import AdminHomePage from './Pages/Admin/AdminHomePage';
import AdminClientPage from './Pages/Admin/AdminClientPage';
import AdminDoctorsPage from './Pages/Admin/AdminDoctorsPage';
import AdminAppointmentspage from './Pages/Admin/AdminAppointmentsPage';
import AdminDepartmentPage from './Pages/Admin/AdminDepartmentPage';

function App() {
  const { user } = useAuthContext();
  const { admin } = useAdminAuthContext();
  const { doctor } = useDoctorAuthContext()
  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
    <BrowserRouter>
      <Routes>
        {/* client routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/service" element={ user ? <ServicePage /> : <Navigate to="/" />} />
        <Route path="/departmentDoctors/:departmentId" element={user ?  <DepartmentDoctorsPage />  : <Navigate to="/" />} />
        <Route path="/doctorDetails/:doctorId" element={ user ? <DoctorDetailsPage /> : <Navigate to="/" />} />

         

        {/* Doctor routes */}
        <Route path="/doctor" element={<DoctorHome /> } />
        <Route path="/doctor/doctorLogin" element={!doctor ? <DoctorLogin /> : <Navigate to="/doctor"/>} />
        <Route path="/doctor/doctorSignup" element={ !doctor ? <DoctorSignup /> : <Navigate to="/doctor"/>} />
        <Route path="/doctor/doctorPendingPage" element={<DoctorPendingPage />} />
        <Route path="/doctor/doctorDetailsForm" element={<DoctorDetailsForm />} />
        <Route path="/doctor/DoctorAppointmentsPage" element={<DoctorAppointmentsPage />} />


         

        {/* Admin routes */}
        <Route path="/admin" element={!admin ? <AdminLoginPage /> : <Navigate to="/admin/adminHome" />} />
        <Route path="/admin/adminHome" element={admin ? <AdminHomePage /> : <Navigate to="/admin" />} />
        <Route path="/admin/adminClientPage" element={admin ? <AdminClientPage /> : <Navigate to="/admin" />} />
        <Route path="/admin/adminDoctorsPage" element={admin ? <AdminDoctorsPage /> : <Navigate to="/admin" />} />
        <Route path="/admin/AdminAppointmentspage" element={admin ? <AdminAppointmentspage /> : <Navigate to="/admin" />} />
        <Route path="/admin/AdminDepartmentPage" element={admin ? <AdminDepartmentPage /> : <Navigate to="/admin" />} />


          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
