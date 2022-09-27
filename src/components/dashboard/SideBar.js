import React from "react";

const SideBar = () => {
  return (
    <div className='dashboard-nav flex-column nav-font gap-10 width-30 hide-1000 hide-scrollbar height-100'>
      <div className='width-100 logo-padding nav-border-bottom-white margin-10'>
        <img src='images/paylode.svg' alt='' />
      </div>
      <div className='flex-column gap-10 width-100'>
        <div className='nav-title align-left'>ANALYTICS</div>
        <div className='flex-row gap-15 nav-item-padding light-blue b-radius-12 nav-hover margin-nav-10 pointer'>
          <div className=''>
            <img src='images/dashboard-icon.svg' alt='' />
          </div>
          <div className=''>Dashboard</div>
        </div>
      </div>
      <div className='flex-column width-100'>
        <div className='nav-title align-left'>TRANSACTIONS</div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer'>
          <i class='fa-solid fa-paper-plane'></i>
          <div className=''>Transfer</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer'>
          <i class='fa-solid fa-wallet'></i>
          <div className=''>My Wallet</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer'>
          <i class='fa-solid fa-money-bill'></i>
          <div className=''>Payments</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer'>
          <i class='fa-solid fa-note-sticky'></i>
          <div className=''>Transactions</div>
        </div>
      </div>
      <div className='flex-column'>
        <div className='nav-title align-left'>USERS</div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer'>
          <i class='fa-solid fa-user'></i>
          <div className=''>Customers</div>
        </div>
        <div className='flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer'>
          <i class='fa-solid fa-file-invoice'></i>
          <div className=''>Invoicing</div>
        </div>
      </div>
      <div className='dashboard-footer-icon flex-column-center'>
        <img src='images/boxed-arrow-up.svg' alt='' />
      </div>
      <div className='light-blue-2 flex-column-center p-16 m-40 b-radius-32 gap-15 height-210'>
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

export default SideBar;
