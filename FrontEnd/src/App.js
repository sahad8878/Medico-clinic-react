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

// doctor pages
import DoctorHome from './pages/Doctor/DoctorHomePage';
import DoctorLogin from './pages/Doctor/LoginPage';
import DoctorSignup from './pages/Doctor/SignupPage';
import DoctorPendingPage from './pages/Doctor/DoctorPendingPage';

// admin pages
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminHomePage from './pages/Admin/AdminHomePage';

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

        {/* Doctor routes */}
        <Route path="/doctor" element={<DoctorHome />} />
        <Route path="/doctor/doctorLogin" element={<DoctorLogin />} />
        <Route path="/doctor/doctorSignup" element={<DoctorSignup />} />
        <Route path="/doctor/doctorPendingPage" element={<DoctorPendingPage />} />
         

        {/* Admin routes */}
        <Route path="/admin" element={!admin ? <AdminLoginPage /> : <Navigate to="/admin/adminHome" />} />
        <Route path="/admin/adminHome" element={admin ? <AdminHomePage /> : <Navigate to="/admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
