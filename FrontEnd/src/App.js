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
import LandingPage from './pages/Client/LandingPage';
import LoginPage from './pages/Client/LoginPage';
import SignupPage from './pages/Client/SignupPage';
import ServicePage from './pages/Client/ServicePage';
import DepartmentDoctorsPage from './pages/Client/DepartmentDoctorsPage';

// doctor pages
import DoctorHome from './pages/Doctor/DoctorHomePage';
import DoctorLogin from './pages/Doctor/LoginPage';
import DoctorSignup from './pages/Doctor/SignupPage';
import DoctorPendingPage from './pages/Doctor/DoctorPendingPage';
import DoctorDetailsForm from './pages/Doctor/DetailsFormPage'

// admin pages
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminHomePage from './pages/Admin/AdminHomePage';
import AdminClientPage from './pages/Admin/AdminClientPage';
import AdminDoctorsPage from './pages/Admin/AdminDoctorsPage';
import AdminAppointmentspage from './pages/Admin/AdminAppointmentsPage';
import AdminDepartmentPage from './pages/Admin/AdminDepartmentPage';

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
        <Route path="/departmentDoctors/:departmentId" element={<DepartmentDoctorsPage />} />
         

        {/* Doctor routes */}
        <Route path="/doctor" element={<DoctorHome /> } />
        <Route path="/doctor/doctorLogin" element={!doctor ? <DoctorLogin /> : <Navigate to="/doctor"/>} />
        <Route path="/doctor/doctorSignup" element={ !doctor ? <DoctorSignup /> : <Navigate to="/doctor"/>} />
        <Route path="/doctor/doctorPendingPage" element={<DoctorPendingPage />} />
        <Route path="/doctor/doctorDetailsForm" element={<DoctorDetailsForm />} />

         

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
