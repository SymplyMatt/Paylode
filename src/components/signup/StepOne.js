import React from "react";

const StepOne = ({
  step,
  mode,
  setMode,
  setStep,
  firstInput,
  secondInput,
  thirdInput,
  textMode,
  setTextMode,
}) => {
  return (
    <>
      <>
        <div className='mode account-mode'>
          <div
            className='item pointer'
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
            className='item pointer'
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
          <div className='mode-text pointer'>
            {`${mode == "business" ? "Business Owner" : "Softare Developers"}`}
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
    </>
  );
};

export default StepOne;
