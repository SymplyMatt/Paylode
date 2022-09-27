import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = ({ page, setPage }) => {
  const navigate = useNavigate();
  const [textMode, setTextMode] = useState(false);
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    document.title = "Login || PayloadWeb";
    setPage("login");
  });
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
      <div className='form-container'>
        <form action=''>
          <div className='title'>
            <h2>Login</h2>
            <div className='sub-title'>Welcome back we missed you</div>
          </div>
          <div
            className='input-one-container'
            onClick={() => firstInput.current.focus()}
          >
            <div className='at'>@</div>
            <input
              type='text'
              placeholder='Work email address'
              ref={firstInput}
              className='input-box'
            />
          </div>
          <div
            className='input-two-container'
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
                className='fa-solid fa-eye-slash eye-icon pointer'
                onClick={() => setTextMode(true)}
              ></i>
            )}
            {textMode && (
              <i
                className='fa-solid fa-eye eye-icon pointer'
                onClick={() => setTextMode(false)}
              ></i>
            )}
          </div>
          <div className='links'>
            <div className='checkbox'>
              <input type='checkbox' name='' id='checkbox' />
              <div className='remember-text'>Remember Me</div>
            </div>
            <a href=''>
              <div className='forgot-password'>Forgot your credentials?</div>
            </a>
          </div>
          <a
            href=''
            className='link-btn'
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
            <div className=''>Login to your Account</div>
          </a>
          <div className='new-account pointer'>
            Dont have an account?
            <span onClick={() => navigate("/signup")}> Create an account</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
