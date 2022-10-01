import React, { useState } from "react";
import SettingsMain from "./SettingsMain";
import UpdateProfile from "./UpdateProfile";

const SettingsMainContent = () => {
    const [pushToggle, setPushToggle] = useState(false);
    const [settingsPage, setSettingsPage] = useState('main');
  return (
    <div className='main-content flex-column gap-30 padding-100'>
      <div className='dashboard-analytics-container flex-column-center gap-20 settings'>
        {settingsPage == 'main' && <SettingsMain pushToggle={setPushToggle} setPushToggle={setPushToggle} settingsPage={ settingsPage} setSettingsPage={setSettingsPage} />}
        {settingsPage == 'update-profile' && <UpdateProfile />}
      </div>
    </div>
  );
};

export default SettingsMainContent;
