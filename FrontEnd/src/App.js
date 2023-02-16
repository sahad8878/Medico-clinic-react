/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';
import { useAdminAuthContext } from './Hooks/useAdminAuthContext';
import './App.css';

// client pages
import LandingPage from './pages/Client/LandingPage';
import LoginPage from './pages/Client/LoginPage';
import SignupPage from './pages/Client/SignupPage';
import ServicePage from './pages/Client/ServicePage';

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

function App() {
  const { user } = useAuthContext();
  const { admin } = useAdminAuthContext();

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
    <BrowserRouter>
      <Routes>
        {/* client routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/service" element={ user ? <ServicePage /> : <Navigate to="/" />} />


        {/* Doctor routes */}
        <Route path="/doctor" element={<DoctorHome />} />
        <Route path="/doctor/doctorLogin" element={<DoctorLogin />} />
        <Route path="/doctor/doctorSignup" element={<DoctorSignup />} />
        <Route path="/doctor/doctorPendingPage" element={<DoctorPendingPage />} />
        <Route path="/doctor/doctorDetailsForm" element={<DoctorDetailsForm />} />

         

        {/* Admin routes */}
        <Route path="/admin" element={!admin ? <AdminLoginPage /> : <Navigate to="/admin/adminHome" />} />
        <Route path="/admin/adminHome" element={admin ? <AdminHomePage /> : <Navigate to="/admin" />} />
        <Route path="/admin/adminClientPage" element={admin ? <AdminClientPage /> : <Navigate to="/admin" />} />
        <Route path="/admin/adminDoctorsPage" element={admin ? <AdminDoctorsPage /> : <Navigate to="/admin" />} />
        <Route path="/admin/AdminAppointmentspage" element={admin ? <AdminAppointmentspage /> : <Navigate to="/admin" />} />

          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
