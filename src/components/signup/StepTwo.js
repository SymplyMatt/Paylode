import React from "react";

const StepTwo = ({
  step,
  mode,
  setMode,
  setStep,
  fourthInput,
  fifthInput,
  sixthInput,
  textMode,
  setTextMode,
  businessType,
  setBusinessType,
}) => {
  return (
    <>
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
      <div className='step-2-flex'>
        <div className='step-2-flex-title '>What is your type of business</div>

        <div className='type-container' onClick={() => setBusinessType("one")}>
          <div
            className={`circle-container ${businessType == "one" && "active"}`}
          >
            <div className='circle'>
              {businessType !== "one" && (
                <div className='icon'>
                  <i class='fa-regular fa-circle'></i>
                </div>
              )}
              {businessType == "one" && (
                <div className='icon'>
                  <i class='fa-solid fa-circle-check'></i>
                </div>
              )}
            </div>
          </div>
          <div className='business-item'>
            <div className='title'>Registered Business</div>
            <div className='desc'>
              For Businesses that are registered with verification number
            </div>
          </div>
        </div>

        <div className='type-container' onClick={() => setBusinessType("two")}>
          <div
            className={`circle-container ${businessType == "two" && "active"}`}
          >
            <div className='circle'>
              {businessType !== "two" && (
                <div className='icon'>
                  <i class='fa-regular fa-circle'></i>
                </div>
              )}
              {businessType == "two" && (
                <div className='icon'>
                  <i class='fa-solid fa-circle-check'></i>
                </div>
              )}
            </div>
          </div>
          <div className='business-item'>
            <div className='title'>Starter Business</div>
            <div className='desc'>
              For Solopreneurs, freelancers and other unregistered businesses
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
