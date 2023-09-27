import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assest/OIP-removebg-preview.png'

const 
Header = () => {
  return (
  //     <div className="header navbarupdation" >
  //     <div>
  //     <img src={logo} width="85" height="" />
  //     </div>
  //     <div className="header__nav">
        
  //     </div>
  //     <h1 class="text-3xl text-center font-bold underline">
  // </h1>
  //   </div>
  <div className='sample1'>
    <div>
      <img src={logo} width="100" height="" />
    </div>
    <div>
      <Link to="/" className="header__navLink">Home</Link>
      <Link to="#" className="header__navLink">Doctors</Link>
      {/* <Link to="/signup" className="header__navLink">Signup</Link> */}  
      <Link to="/profile" className="header__navLink">Profile</Link>
      <Link to="/logout" className="header__navLink">Logout</Link>
    </div>
  </div>
  );
};

export default Header;
