import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [textMode, setTextMode] = useState(false);
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [mode, setMode] = useState("business");
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("one");
  useEffect(() => {
    document.title = "SignUp || PayloadWeb";
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

      <div className='form-container create-account'>
        <form action=''>
          <div className='title'>
            <h2>{step == 1 ? "Create account" : "One more thing please.."}</h2>
            <div className='sub-title'>Create an account to continue!</div>
          </div>
          {step == 1 && (
            <StepOne
              mode={mode}
              setMode={setMode}
              setStep={setStep}
              step={step}
              firstInput={firstInput}
              secondInput={secondInput}
              thirdInput={thirdInput}
              textMode={setTextMode}
            />
          )}
          {step == 2 && (
            <StepTwo
              mode={mode}
              setMode={setMode}
              setStep={setStep}
              step={step}
              fourthInput={fourthInput}
              fifthInput={fifthInput}
              sixthInput={sixthInput}
              textMode={setTextMode}
              businessType={businessType}
              setBusinessType={setBusinessType}
            />
          )}
          <a href='' className='link-btn'>
            <div
              className=''
              onClick={(e) => {
                e.preventDefault();
                setStep(2);
              }}
            >
              {step == 1 ? "Create my account" : "Proceed"}
            </div>
          </a>
          {step == 1 && (
            <div className='new-account'>
              Already have an account?
              <span onClick={() => navigate("/login")}>Sign In </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
