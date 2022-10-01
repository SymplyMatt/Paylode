import React from "react";

const BankAccount = ({ setSettingsPage, settingsPage }) => {
  return (
    <div className='settings-container bank-account'>
      <div
        className='back-icon-container pointer'
        onClick={() => setSettingsPage("main")}
      >
        <i class='fa-solid fa-arrow-left pointer'></i>
        <span>Back</span>
      </div>
      <div className=''>
        <div className='flex-column-center gap-10 settings-header update-profile'>
          <div className='settings-title'>Customize Settings</div>
          <div className='settings-header-desc'>
            Personalize settings to suit your company
          </div>
          <div className=''>
            <hr />
          </div>
        </div>
      </div>
      <div className="account-table-container">
      <div className="account-table heading">
        <div className="">s/n</div>
        <div className="">accout name</div>
        <div className="">account details</div>
        <div className="">status</div>
      </div>
      <div className="account-table">
        <div className="">1</div>
        <div className="">Andrew Wams</div>
        <div className="">+9964840075 (Providus Bank)</div>
        <div className="active">Active</div>
      </div>
      <div className="account-table">
        <div className="">2</div>
        <div className="">Andrew Wams</div>
        <div className="">+9964840075 (Providus Bank)</div>
        <div className="active">Active</div>
      </div>
      <div className="account-table">
        <div className="">3</div>
        <div className="">Andrew Wams</div>
        <div className="">+9964840075 (Providus Bank)</div>
        <div className="active">Active</div>
      </div>
      </div>
    </div>
  );
};

export default BankAccount;
