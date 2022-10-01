import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import { useEffect } from "react";

const Preferences = ({ settingsPage, setSettingsPage }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [card, setCard] = useState(false);
  const [bank, setBank] = useState(false);
  const [ussd, setUssd] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [sendToMe, setSendToMe]= useState(false)
  const [sendToCustomers, setSendToCustomers]= useState(false);
  return (
    <div className='settings-container preferences'>
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
      <div className="preference-grid">
        <div className="preference-grid-item1 bolder">Default Currency</div>
        <div className="preference-grid-item1 overlay-container">
            {<div className="active-currency pointer" onClick={()=>setShowOverlay(!showOverlay)}>NGN <i class="fa-solid fa-angle-down"></i></div>}
            {<div className={`overlay ${showOverlay ? 'opacity-1' : 'z-index-0'}`}>
            <div className="background-hover pointer">Item 1</div>
            <div className="background-hover pointer">Item 2</div>
          </div>}
        </div>
      </div>
      <div className="preference-grid preference-item-container">
        <div className="preference-grid-item1 bolder">Accept payments via</div>
        <div className="preference-grid-item1">
          <div className="pointer" onClick={() => setCard(!card)}>
                {!card && <span><i class="fa-solid fa-square"></i></span>}
                {card && <span><i class="fa-solid fa-square-check"></i></span>}
                <span className="preference-item">&nbsp; &nbsp;Card</span>
            </div>
            <div className="pointer" onClick={() => setBank(!bank)}>
                {!bank && <span><i class="fa-solid fa-square"></i></span>}
                {bank && <span><i class="fa-solid fa-square-check"></i></span>}
                <span className="preference-item">&nbsp; &nbsp;Bank</span>
            </div>
            <div className="pointer" onClick={() => setUssd(!ussd)}>
                {!ussd && <span><i class="fa-solid fa-square"></i></span>}
                {ussd && <span><i class="fa-solid fa-square-check"></i></span>}
                <span className="preference-item">&nbsp; &nbsp;Ussd</span>
            </div>
            <div className="pointer" onClick={() => setTransfer(!transfer)}>
                {!transfer && <span><i class="fa-solid fa-square"></i></span>}
                {transfer && <span><i class="fa-solid fa-square-check"></i></span>}
                <span className="preference-item">&nbsp; &nbsp;Bank Transfer</span>
            </div>
            
        </div>
      </div>

      <div className="preference-grid">
        <div className="preference-grid-item1 bolder">Transaction receipts</div>
        <div className="preference-grid-item1">
            <div className="pointer" onClick={() => setSendToMe(!sendToMe)}>
                {!sendToMe && <span><i class="fa-solid fa-square "></i></span>}
                {sendToMe && <span><i class="fa-solid fa-square-check"></i></span>}
                <span className="preference-item ">&nbsp; &nbsp;Send to me</span>
            </div>
            <div className="pointer" onClick={() => setSendToCustomers(!sendToCustomers)}>
                {!sendToCustomers && <span><i class="fa-solid fa-square"></i></span>}
                {sendToCustomers && <span><i class="fa-solid fa-square-check"></i></span>}
                <span className="preference-item">&nbsp; &nbsp;Send to customers</span>
            </div>
        </div>
      </div>
      <div className='payments-btn align-left'>Save Changes</div>
    </div>
  );
};

export default Preferences;
