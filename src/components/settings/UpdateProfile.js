import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import { useEffect } from "react";

const UpdateProfile = () => {
    const [selected, setSelected] = useState("NG");
    return (
    <div className="settings-container">
        <div className="back-icon-container">
          <i class='fa-solid fa-arrow-left pointer'></i><span>Back</span>
        </div>
        <div className="">
            <div className='flex-column-center gap-10 settings-header update-profile'>
                <div className='settings-title'>Customize Settings</div>
                <div className='settings-header-desc'>Personalize settings to suit your company</div>
                <div className=''><hr /></div>
            </div>
        </div>
        <div className="flex-column gap-20">
            <div className="flex-row gap-15 input-flex">
                <div className='input-one-container update-profile'>
                    <input type='text' placeholder='First Name' className='input-box input-settings'/>
                </div>
                <div className='input-one-container update-profile'>
                    <input type='text' placeholder='Last Name' className='input-box input-settings'/>
                </div>
            </div>
            <div className='input-one-container update-profile'>
                <input type='text' placeholder='Email Address' className='input-box input-settings'/>
            </div>
            <div className='input-one-container update-profile'>
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    countries={["NG"]}
                    selectButtonClassName='menu-flags-button'
                    showSecondarySelectedLabel={false}
                    showOptionLabel={false}
                    fullWidth={false}
                    showSecondaryOptionLabel={false}
                    className='menu-flags'
                />
                <input type='text' placeholder='Phone Number' className='input-box input-settings'/>
            </div>
        </div>
        <div className='payments-btn align-left'>Save Changes</div>
    </div>
    )
};

export default UpdateProfile;
