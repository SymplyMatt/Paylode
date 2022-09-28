import React from "react";
import { useNavigate } from "react-router-dom";

const StepButton = ({ step, setStep }) => {
  const navigate = useNavigate();
  return (
    <div
      className='link-btn'
      onClick={(e) => {
        e.preventDefault();
        if (step == 1) setStep(2);
        if (step == 2) navigate("/account-settings");
      }}
    >
      <div className=''>{step == 1 ? "Create my account" : "Proceed"}</div>
    </div>
  );
};

export default StepButton;
