import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import { useEffect } from "react";

const ApiKey = ({ settingsPage, setSettingsPage }) => {
  const [selected, setSelected] = useState("NG");
  return (
    <div className='settings-container'>
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
      <div className='flex-column gap-20'>
        <div className='input-one-container update-profile'>
          <input
            type='text'
            placeholder='Test Api Key'
            className='input-box input-settings single'
          />
        </div>
        <div className='input-one-container update-profile'>
          <input
            type='text'
            placeholder='Test Secret Key'
            className='input-box input-settings single'
          />
        </div>
        <div className='input-one-container update-profile'>
          <input
            type='text'
            placeholder='Test Callback Url'
            className='input-box input-settings single'
          />
        </div>
        <div className='input-one-container update-profile'>
          <input
            type='text'
            placeholder='Test Webhook Url'
            className='input-box input-settings single'
          />
        </div>
      </div>
      <div className='payments-btn align-left'>Save Changes</div>
    </div>
  );
};

export default ApiKey;
