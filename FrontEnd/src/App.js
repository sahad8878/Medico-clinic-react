import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import LandingPage from './pages/Client/LandingPage';
import LoginPage from './pages/Client/LoginPage';
import SignupPage from './pages/Client/SignupPage';
import DoctorHome from './pages/Doctor/DoctorHomePage'
import DoctorLogin from './pages/Doctor/LoginPage'
import DoctorSignup from './pages/Doctor/SignupPage'
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminHomePage from './pages/Admin/AdminHomePage';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     {/* client routes */}
     <Route path='/' element={<LandingPage/>}/>
     <Route path='/login' element={<LoginPage />}/>
     <Route path='/signup' element={<SignupPage />}/>

     {/* Doctor routes */}
     <Route path='/doctor' element={<DoctorHome />}/>
     <Route path='/doctor/doctorLogin' element={<DoctorLogin />}/>
     <Route path='/doctor/doctorSignup' element={<DoctorSignup/>}/>

     {/* Admin routes */}
     <Route path='/admin' element={<AdminLoginPage/>}/>
     <Route path='/admin/adminHome' element={<AdminHomePage/>}/>

   </Routes>
   </BrowserRouter>
   </>

  );
}

export default App;
