import React from "react";

const StepButton = ({ step, setStep }) => {
  return (
    <div
      className='link-btn'
      onClick={(e) => {
        e.preventDefault();
        if (step == 1) setStep(2);
        if (step == 2) setStep(3);
      }}
    >
      <div className=''>{step == 1 ? "Create my account" : "Proceed"}</div>
    </div>
  );
};

export default StepButton;
