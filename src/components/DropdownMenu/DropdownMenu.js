import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-item profile">
        <img
          src="https://storage.googleapis.com/a1aa/image/PYPzl8HgT1YjERznnBBPDoBCp4rbhubfmtrxjYvqcDxEcq4JA.jpg"
          alt="Profile"
          className="dropdown-profile-icon"
        />
        <div className="dropdown-profile-info">
          <div className="dropdown-item-label">View Profile</div>
          <div className="dropdown-item-subtext">u/Right-Ambassador-992</div>
        </div>
      </div>

      <div className="line"></div>

      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-tshirt"></i>
        <span className="dropdown-item-label">Edit Avatar</span>
      </div>
      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-trophy"></i>
        <span className="dropdown-item-label">Achievements</span>
        <span className="dropdown-item-subtext">5 unlocked</span>
      </div>
      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-coins"></i>
        <span className="dropdown-item-label">Contributor Program</span>
        <span className="dropdown-item-subtext">0 gold earned</span>
      </div>
      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-moon"></i>
        <span className="dropdown-item-label">Dark Mode</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-sign-out-alt"></i>
        <span className="dropdown-item-label">Log Out</span>
      </div>

      <div className="line"></div>

      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-bullhorn"></i>
        <span className="dropdown-item-label">Advertise on Reddit</span>
      </div>
      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-cog"></i>
        <span className="dropdown-item-label">Settings</span>
      </div>
      <div className="dropdown-item">
        <i className="sidebar-item-icon fas fa-gem"></i>
        <span className="dropdown-item-label">Premium</span>
      </div>
    </div>
  );
};

export default DropdownMenu;
