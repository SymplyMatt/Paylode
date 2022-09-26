import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useEffect } from "react";
import BackToLogin from "./BackToLogin";
import StepButton from "./StepButton";
import FormTitle from "./FormTitle";
import AccountSettings from "../account-settings/AccountSettings";
import LanguageMode from "./LanguageMode";

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
    <>
      <div className='login-container'>
        <LanguageMode
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
        <div className='form-container create-account'>
          <form action=''>
            {step < 3 && <FormTitle step={step} />}
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
            {step < 3 && <StepButton step={step} setStep={setStep} />}
            {step == 1 && <BackToLogin />}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
