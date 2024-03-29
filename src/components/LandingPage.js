import React, { useState } from 'react';
import logo from '../logogo.png';
import './NavBar.css';
import ppho from '../avatar.jpg';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='headerer'>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" height="50" />
        </div>
        <div className="profile-container" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <img
            src={ppho}
            alt="Profile"
            className="profile-photo"
          />
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>Profile</li>
              <li>Dashboard</li>
              <li>Logout</li>
            </ul>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
