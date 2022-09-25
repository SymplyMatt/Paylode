import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
  const [businessType,setBusinessType]= useState('one')
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
            <>
              <div className='mode account-mode'>
                <div
                  className='item'
                  onClick={() => {
                    setMode("business");
                  }}
                >
                  <h2 className={`${mode !== "business" && "inactive"}`}>
                    Business Owner
                  </h2>
                  <hr className={`${mode == "business" && "active"}`} />
                </div>
                <div
                  className='item'
                  onClick={() => {
                    setMode("developers");
                  }}
                >
                  <h2 className={`${mode == "business" && "inactive"}`}>
                    Software Developers
                  </h2>
                  <hr className={`${mode !== "business" && "active"}`} />
                </div>
              </div>
              <div className='mode-sm'>
                <div
                  className='icon'
                  onClick={() => {
                    setMode("business");
                  }}
                >
                  <i
                    className={`fa-solid fa-chevron-left ${
                      mode == "business" && "inactive"
                    }`}
                  ></i>
                </div>
                <div className='mode-text'>
                  {`${
                    mode == "business" ? "Business Owner" : "Softare Developers"
                  }`}
                  <hr />
                </div>
                <div
                  className='icon'
                  onClick={() => {
                    setMode("developers");
                  }}
                >
                  <i
                    className={`fa-solid fa-chevron-right ${
                      mode !== "business" && "inactive"
                    }`}
                  ></i>
                </div>
              </div>
            </>
          )}
          {mode == "business" && step == 1 && (
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
          {step == 1 && (
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
          )}
          {step == 1 && (
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
          )}
          {step == 2 && (
            <div
              className='input-one-container'
              onClick={() => fourthInput.current.focus()}
            >
              <i class='fa-solid fa-user lock'></i>
              <input
                type='text'
                placeholder='First Name'
                ref={fourthInput}
                className='input-box'
              />
            </div>
          )}
          {step == 2 && (
            <div
              className='input-one-container'
              onClick={() => fifthInput.current.focus()}
            >
              <i class='fa-solid fa-user lock'></i>
              <input
                type='text'
                placeholder='Last Name'
                ref={fifthInput}
                className='input-box'
              />
            </div>
          )}
          {step == 2 && (
            <div
              className='input-one-container'
              onClick={() => sixthInput.current.focus()}
            >
              <i class='fa-solid fa-phone lock'></i>
              <input
                type='text'
                placeholder='Phone Number'
                ref={sixthInput}
                className='input-box'
              />
            </div>
          )}
          {step == 1 && (
            <div className='indicators'>
              <div className='item'></div>
              <div className='item'></div>
              <div className='item'></div>
              <div className='item'></div>
              <div className='item'></div>
              <div className='item'></div>
            </div>
          )}
          {step == 1 && (
            <div className='links'>
              <div className='checkbox'>
                <input type='checkbox' name='' id='checkbox' />
                <div className='remember-text'>
                  I agree to the Terms & Conditions of payloade payments
                </div>
              </div>
            </div>
          )}
          {step == 2 && <div className="step-2-flex">
            <div className="step-2-flex-title ">What is your type of business</div>

            <div className="type-container" onClick={() => setBusinessType('one')}>
              <div className={`circle-container ${businessType == 'one' && 'active'}`}>
                <div className="circle">
                  {businessType !== 'one' && <div className="icon"><i class="fa-regular fa-circle"></i></div>}
                  {businessType == 'one' && <div className="icon"><i class="fa-solid fa-circle-check"></i></div>}
                </div>
              </div>
              <div className="business-item">
                <div className="title">Registered Business</div>
                <div className="desc">For Businesses that are registered with verification number</div>
              </div>
            </div>

            <div className="type-container" onClick={() => setBusinessType('two')}>
              <div className={`circle-container ${businessType == 'two' && 'active'}`}>
                <div className="circle">
                  {businessType !== 'two' && <div className="icon"><i class="fa-regular fa-circle"></i></div>}
                  {businessType == 'two' && <div className="icon"><i class="fa-solid fa-circle-check"></i></div>}
                </div>
              </div>
              <div className="business-item">
                <div className="title">Starter Business</div>
                <div className="desc">For Solopreneurs, freelancers and other unregistered businesses</div>
              </div>
            </div>
          </div>}
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
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Sign In </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
