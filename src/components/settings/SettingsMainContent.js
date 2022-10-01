import React, { useState } from "react";

const SettingsMainContent = () => {
    const [pushToggle, setPushToggle] = useState(false);
  return (
    <div className='main-content flex-column gap-30 padding-100'>
      <div className='dashboard-analytics-container flex-column-center gap-20 settings'>
        <div className="settings-container">
            <div className="flex-column-center gap-10 settings-header">
                <div className="settings-title">Customize Settings</div>
                <div className="settings-header-desc">Personalize settings to suit your company</div>
                <div className=""><hr /></div>
            </div>
            <div className="flex-column gap-30 item-container">
                <div className="flex-row justify-sb gap-30 pointer">
                    <div className="flex-column gap-10">
                        <div className="item-title">Update Profile Information</div>
                        <div className="item-desc">Update your personal profile informations here</div>
                    </div>
                    <div className=""><i class="fa-solid fa-arrow-right pointer"></i></div>
                </div>
                <hr />
            </div>
            <div className="flex-column gap-30 item-container">
                <div className="flex-row justify-sb gap-30 pointer">
                    <div className="flex-column gap-10">
                        <div className="item-title">Bank Account</div>
                        <div className="item-desc">Update your bank account informations here delete or add new account</div>
                    </div>
                    <div className=""><i class="fa-solid fa-arrow-right pointer"></i></div>
                </div>
                <hr />
            </div>
            <div className="flex-column gap-30 item-container">
                <div className="flex-row justify-sb gap-30 pointer">
                    <div className="flex-column gap-10">
                        <div className="item-title">Api Key & Webhooks</div>
                        <div className="item-desc">Update your bank account informations here delete or add new account</div>
                    </div>
                    <div className=""><i class="fa-solid fa-arrow-right pointer"></i></div>
                </div>
                <hr />
            </div>
            <div className="flex-column gap-30 item-container">
                <div className="flex-row justify-sb gap-30 pointer">
                    <div className="flex-column gap-10">
                        <div className="item-title">Preferences</div>
                        <div className="item-desc">Update your bank account informations here delete or add new account</div>
                    </div>
                    <div className=""><i class="fa-solid fa-arrow-right pointer"></i></div>
                </div>
                <hr />
            </div>
            <div className="flex-column gap-30 item-container">
                <div className="flex-row justify-sb gap-30">
                    <div className="flex-column gap-10">
                        <div className="item-desc">Security & Privacy</div>
                        <div className="item-title pointer">Change Password</div>
                    </div>
                    <div className=""><i class="fa-solid fa-arrow-right pointer"></i></div>
                </div>
                <hr />
            </div>
            <div className="flex-column gap-30 item-container">
                <div className="flex-row justify-sb gap-30">
                    <div className="flex-column gap-10">
                        <div className="item-title">Browser Push Notifications</div>
                        <div className="item-desc pointer">Allow web push notifications</div>
                    </div>
                    <div className="">
                        {!pushToggle && <i class="fa-solid fa-toggle-off pointer" onClick={()=>setPushToggle(true)}></i>}
                        {pushToggle && <i class="fa-solid fa-toggle-on pointer" onClick={()=>setPushToggle(false)}></i>}
                    </div>
                </div>
                <hr />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsMainContent;
