import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "./components/login";
import Signup from "./components/signup";
import HomePage from './pages/HomePages';
import PrivateRoutes from './Utils/PrivateRoutes';
import Profile from './pages/Profile';
import Logout from "./components/logout";
import OTPVerification from './components/OTPVerification';
import AdminLogin from './components/AdminLogin';
import ProfileUpdate from './pages/ProfileUpdate';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ResendOTP from './components/ResendOTP';
import DoctorProfile from './components/DoctorProfile';
import AdminProfile from './components/AdminProfile';
import {Toaster} from 'react-hot-toast'
import Appointment from './components/Appointment';
import Doctors from './components/Doctors';
import ListAppointments from './components/ListAppointments';
import AppointmentHistory from './components/AppointmentHistory';
import AdminSideBar from './components/AdminSideBar';
import ListDoctor from './components/ListDoctor';
// import { AuthProvider } from './context/AuthContext';





const App = () => {
 

  return (
   <Fragment> <Toaster
   position="top-center"
   reverseOrder={false}/>  
    <Router>
      <div>
        <Routes>
          {/* <AuthProvider/> */}
          <Route element={<PrivateRoutes />} >
             <Route exact path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
  
          <Route path="/logout" element={<Logout/>} />
          <Route path="/verify-otp" element={<OTPVerification/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/userForm" element={<userForm/>} />
          <Route path="/profile-update" element={<ProfileUpdate />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/resend-otp" element={<ResendOTP/>} />
          <Route path="/doctor-profile" element={<DoctorProfile/>} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/appointment/list-appointment" element={<ListAppointments/>} />
          <Route path="/appointment-history" element={<AppointmentHistory/>} />
          <Route path="/adminprofile" element={<AdminProfile/>}/>
          <Route path="/adminsidebar" element={<AdminSideBar/>}/>
          <Route path="/listDoctor" element={<ListDoctor/>}/>
          



        </Routes>
      </div>
    </Router>
     </Fragment> 

  );
  
 
};

export default App;
