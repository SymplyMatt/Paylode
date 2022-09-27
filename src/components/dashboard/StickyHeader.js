import React from "react";

const StickyHeader = ({
  showNav,
  setShowNav,
  showNotifications,
  setShowNotifications,
}) => {
  return (
    <div className={`flex-row padding-30 main-section-header `}>
      <div className='width-75 flex-row  justify-sb'>
        <div className='dashboard-text'>Dashboard</div>
        <div className='flex-row gap-30'>
          <div className='flex-row' onClick={() => setShowNotifications(true)}>
            <div className='red-bg flex-row-center font-x-sm'>1</div>
            <i class='fa-solid fa-bell header-icon'></i>
          </div>
          <div className=''>
            <i class='fa-solid fa-gear header-icon'></i>
          </div>
          <div className='user-avatar hide-1000'>
            <img src='images/user-1.jpg' alt='' />
          </div>
          <div className='overlay-toggler flex-row gap-10 hide-1000'>
            Good Morning Matthew <i class='fa-solid fa-angle-down'></i>
          </div>
          <div
            className='overlay-toggler flex-row gap-10 hide-1001'
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
