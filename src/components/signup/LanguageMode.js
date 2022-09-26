import React from "react";

const LanguageMode = ({ showOverlay, setShowOverlay }) => {
  return (
    <div className='language'>
      <div className='mode' onClick={() => setShowOverlay(!showOverlay)}>
        English (UK) <i className='fa-solid fa-angle-down'></i>
      </div>
      <div className={`languages ${!showOverlay && "hide-overlay"}`}>
        <div className='item'>English (US) </div>
        <div className='item'>French (FR)</div>
      </div>
    </div>
  );
};

export default LanguageMode;
