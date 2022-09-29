import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const StickyHeader = ({
  showNav,
  setShowNav,
  showNotifications,
  setShowNotifications,
}) => {
  const [overlay, setOverlay] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`flex-row padding-30 main-section-header `}>
      <div className='width-75 flex-row  justify-sb'>
        <div className='dashboard-text'>Dashboard</div>
        <div className='flex-row gap-30'>
          <div
            className='flex-row pointer'
            onClick={() => setShowNotifications(true)}
          >
            <div className='red-bg flex-row-center font-x-sm'>1</div>
            <i class='fa-solid fa-bell header-icon'></i>
          </div>
          <div className='pointer' onClick={() => navigate("/settings")}>
            <i class='fa-solid fa-gear header-icon'></i>
          </div>
          <div className='user-avatar hide-1000'>
            <img src='images/user-1.jpg' alt='' />
          </div>
          <div
            className='hover overlay-toggler flex-row gap-10 hide-1000 pointer'
            onMouseEnter={() => setOverlay(true)}
          >
            Good Morning Andrew <i class='fa-solid fa-angle-down'></i>
            <div
              className={`overlay-dashboard ${!overlay && "hide"}`}
              onMouseEnter={() => setOverlay(true)}
              onMouseLeave={() => setOverlay(false)}
            >
              <a href=''>
                <i class='fa-solid fa-user'></i> My Profile
              </a>
              <a href=''>
                <i class='fa-solid fa-plus'></i> Add New Business
              </a>
            </div>
          </div>
          <div
            className='overlay-toggler flex-row gap-10 hide-1001 pointer'
            onClick={() => setShowNav(true)}
          >
            <i class='fa-solid fa-bars'></i> Menu
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
