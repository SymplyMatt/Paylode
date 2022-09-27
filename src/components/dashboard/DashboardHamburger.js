import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHamburger = ({ showNav, setShowNav, page, setPage }) => {
  const navigate = useNavigate();
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
      <div className='flex-column gap-10 width-100'>
        <div className='nav-title align-left'>ANALYTICS</div>
        <div
          className={`flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer ${
            page == "dashboard" && "light-blue"
          }`}
          onClick={() => navigate("/dashboard")}
        >
          <div className=''>
            <img src='images/dashboard-icon.svg' alt='' />
          </div>
          <div className=''>Dashboard</div>
        </div>
      </div>
      <div className='flex-column width-100'>
        <div className='nav-title align-left'>TRANSACTIONS</div>
        <div
          className={`flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer ${
            page == "transfer" && "light-blue"
          }`}
          onClick={() => navigate("/transfer")}
        >
          <i class='fa-solid fa-paper-plane'></i>
          <div className=''>Transfer</div>
        </div>
        <div
          className={`flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer ${
            page == "wallet" && "light-blue"
          }`}
          onClick={() => navigate("/wallet")}
        >
          <i class='fa-solid fa-wallet'></i>
          <div className=''>My Wallet</div>
        </div>
        <div
          className={`flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer ${
            page == "payments" && "light-blue"
          }`}
          onClick={() => navigate("/payments")}
        >
          <i class='fa-solid fa-money-bill'></i>
          <div className=''>Payments</div>
        </div>
        <div
          className={`flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer ${
            page == "transactions" && "light-blue"
          }`}
          onClick={() => navigate("/transactions")}
        >
          <i class='fa-solid fa-note-sticky'></i>
          <div className=''>Transactions</div>
        </div>
      </div>
      <div className='flex-column'>
        <div className='nav-title align-left'>USERS</div>
        <div
          className={`flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer ${
            page == "customers" && "light-blue"
          }`}
          onClick={() => navigate("/customers")}
        >
          <i class='fa-solid fa-user'></i>
          <div className=''>Customers</div>
        </div>
        <div
          className={`flex-row gap-15 nav-item-padding b-radius-12 nav-hover margin-nav-10 pointer ${
            page == "invoicing" && "light-blue"
          }`}
          onClick={() => navigate("/invoicing")}
        >
          <i class='fa-solid fa-file-invoice'></i>
          <div className=''>Invoicing</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHamburger;
