import React from "react";
import { useState } from "react";
import LanguageMode from "../signup/LanguageMode";
import Main from "./Main";
import Nav from "./Nav";


const AccountSettings = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [mode, setMode] = useState('verify');
  return (
    <div className='step-four-container'>
      <LanguageMode showOverlay={showOverlay} setShowOverlay={ setShowOverlay} />
      <div className="container">
        <Nav mode={ mode } setMode={setMode } />
      <Main mode={ mode } setMode={setMode }/>
      </div>
    </div>
  );
};

export default AccountSettings;
