import React from "react";

const DashboardHamburger = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`dashboard-nav flex-column nav-font gap-10 nav-responsive ${
        showNav && "show-nav"
      }`}
    >
      <div
        className={`width-100 logo-padding nav-border-bottom-white margin-10 flex-row justify-sb ${
          !showNav && "hide"
        }`}
      >
        <img src='images/paylode.svg' alt='' />
        <span onClick={() => setShowNav(false)}>X Close</span>
      </div>
      <div className={`flex-column gap-10 width-100 ${!showNav && "hide"}`}>
        <div className='nav-title align-left'>ANALYTICS</div>
        <div className='flex-row gap-15 nav-item-padding light-blue b-radius-12 nav-hover margin-nav-10'>
          <div className=''>
            <img src='images/dashboard-icon.svg' alt='' />
          </div>
          <div className=''>Dashboard</div>
        </div>
      </div>
      <div className={`flex-column width-100 ${!showNav && "hide"}`}>
        <div className='nav-title align-left'>TRANSACTIONS</div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10'>
          <i class='fa-solid fa-paper-plane'></i>
          <div className=''>Transfer</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10'>
          <i class='fa-solid fa-wallet'></i>
          <div className=''>My Wallet</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10'>
          <i class='fa-solid fa-money-bill'></i>
          <div className=''>Payments</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10'>
          <i class='fa-solid fa-note-sticky'></i>
          <div className=''>Transactions</div>
        </div>
      </div>
      <div className={`flex-column ${!showNav && "hide"}`}>
        <div className='nav-title align-left'>USERS</div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10'>
          <i class='fa-solid fa-user'></i>
          <div className=''>Customers</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10'>
          <i class='fa-solid fa-file-invoice'></i>
          <div className=''>Invoicing</div>
        </div>
      </div>
      <div
        className={`dashboard-footer-icon flex-column-center ${
          !showNav && "hide"
        }`}
      >
        <img src='images/boxed-arrow-up.svg' alt='' />
      </div>
      <div
        className={`light-blue-2 flex-column-center p-16 m-40 b-radius-32 gap-15 height-210 ${
          !showNav && "hide"
        }`}
      >
        <div className='dashboard-nav-footer-text'>
          This account is a business test account
        </div>
        <div className=''>
          <a href='' className='dashboard-nav-footer-btn'>
            Upgrade to Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardHamburger;
