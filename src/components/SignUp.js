import React from "react";
import { useState, useRef } from "react";

const SignUp = () => {
  const [textMode, setTextMode] = useState(false);
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [mode, setMode] = useState("business");
  return (
    <div className='login-container'>
      <div className='language'>
        <div className='mode' onClick={() => setShowOverlay(!showOverlay)}>
          English (UK) <i className='fa-solid fa-angle-down'></i>
        </div>
        <div className={`languages ${!showOverlay && "hide-overlay"}`}>
          <div className='item'>English (US) </div>
          <div className='item'>French (FR)</div>
        </div>
      </div>

      <div className='form-container create-account'>
        <form action=''>
          <div className='title'>
            <h2>Create account</h2>
            <div className='sub-title'>Create an account to continue!</div>
          </div>
          <div className='mode account-mode'>
            <div
              className='item'
              onClick={() => {
                setMode("business");
              }}
            >
              <h2 className={`${mode !== 'business' && 'inactive' }`}>Business Owner</h2>
              <hr className={`${mode == "business" && "active"}`} />
            </div>
            <div
              className='item'
              onClick={() => {
                setMode("developers");
              }}
            >
              <h2 className={`${mode == 'business' && 'inactive' }`}>Software Developers</h2>
              <hr className={`${mode !== "business" && "active"}`} />
            </div>
          </div>
          <div className="mode-sm">
            <div className="icon" onClick={()=>{
                setMode('business')
            }}><i className={`fa-solid fa-chevron-left ${mode == 'business' && 'inactive' }`}></i></div>
            <div className="mode-text">
                {`${mode == 'business' ? 'Business Owner' : 'Softare Developers'}`}
                <hr />
            </div>
            <div className="icon" onClick={()=>{
                setMode('developers')
            }}><i className={`fa-solid fa-chevron-right ${mode !== 'business' && 'inactive' }`}></i></div>
          </div>
          {mode == "business" && (
            <div
              className='input-one-container'
              onClick={() => thirdInput.current.focus()}
            >
              <input
                type='text'
                placeholder='Business Name'
                ref={thirdInput}
                className='input-box'
              />
            </div>
          )}
          <div
            className='input-one-container'
            onClick={() => firstInput.current.focus()}
          >
            <div className='at'>@</div>
            <input
              type='text'
              placeholder={`${
                mode == "business" ? "Work email address" : "Email Address"
              }`}
              ref={firstInput}
              className='input-box'
            />
          </div>
          <div
            className='input-two-container create'
            onClick={() => secondInput.current.focus()}
          >
            <i className='fa-solid fa-lock lock'></i>
            <input
              type={`${textMode ? "text" : "password"}`}
              placeholder='Enter password'
              ref={secondInput}
              className='input-box'
            />
            {!textMode && (
              <i
                className='fa-solid fa-eye-slash eye-icon'
                onClick={() => setTextMode(true)}
              ></i>
            )}
            {textMode && (
              <i
                className='fa-solid fa-eye eye-icon'
                onClick={() => setTextMode(false)}
              ></i>
            )}
          </div>
          <div className='indicators'>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
          <div className='links'>
            <div className='checkbox'>
              <input type='checkbox' name='' id='checkbox' />
              <div className='remember-text'>
                I agree to the Terms & Conditions of payloade payments
              </div>
            </div>
          </div>
          <a href='' className='link-btn'>
            <div className=''>Create my account</div>
          </a>
          <div className='new-account'>
            Already have an account? <span>Sign In </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
