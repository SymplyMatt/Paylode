import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verify = ({ mode, setMode }) => {
  const [verifyMode, setVerifyMode] = useState(1);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);
  useEffect(() => {
    if (input1 && input2 && input3 && input3 && input4 && input5 && input6) {
      setVerifyMode(2);
    } else {
      setVerifyMode(1);
    }
  });

  return (
    <>
      <div className='header'>
        <div className='icon'>
          <i className='fa-solid fa-envelope'></i>
        </div>
        <div className='title'>{`${
          verifyMode == 1 ? "Email verification" : "Email Verified"
        } `}</div>
        <div className='desc'>
          {`${
            verifyMode == 1
              ? "We have sent you an email verification , please check your email to verify before you proceed"
              : "You have sucessfully verfied your email address"
          }`}
        </div>
      </div>
      {verifyMode == 1 && (
        <div className='input-container'>
          <form method=''>
            <div className='input'>
              <input
                type='text'
                ref={firstInput}
                value={input1}
                onChange={(e) => {
                  setInput1(
                    e.currentTarget.value[e.currentTarget.value.length - 1]
                  );
                  secondInput.current.focus();
                }}
              />
            </div>
            <div className='input'>
              <input
                type='text'
                ref={secondInput}
                value={input2}
                onChange={(e) => {
                  setInput2(
                    e.currentTarget.value[e.currentTarget.value.length - 1]
                  );
                  thirdInput.current.focus();
                }}
              />
            </div>
            <div className='input'>
              <input
                type='text'
                ref={thirdInput}
                value={input3}
                onChange={(e) => {
                  setInput3(
                    e.currentTarget.value[e.currentTarget.value.length - 1]
                  );
                  fourthInput.current.focus();
                }}
              />
            </div>
            <div className='input'>
              <input
                type='text'
                ref={fourthInput}
                value={input4}
                onChange={(e) => {
                  setInput4(
                    e.currentTarget.value[e.currentTarget.value.length - 1]
                  );
                  fifthInput.current.focus();
                }}
              />
            </div>
            <div className='input'>
              <input
                type='text'
                ref={fifthInput}
                value={input5}
                onChange={(e) => {
                  setInput5(
                    e.currentTarget.value[e.currentTarget.value.length - 1]
                  );
                  sixthInput.current.focus();
                }}
              />
            </div>
            <div className='input'>
              <input
                type='text'
                ref={sixthInput}
                value={input6}
                onChange={(e) => {
                  setInput6(
                    e.currentTarget.value[e.currentTarget.value.length - 1]
                  );
                  sixthInput.current.blur();
                }}
              />
            </div>
          </form>
        </div>
      )}
      {verifyMode == 1 && (
        <div className='resend-desc'>
          Didn't get the email ?{" "}
          <span
            onClick={() => {
              toast.success("Success!");
            }}
            className='pointer'
          >
            Resend now
          </span>
        </div>
      )}
      {verifyMode == 2 && (
        <a
          href=''
          className='btn-step'
          onClick={(e) => {
            e.preventDefault();
            setMode("registration");
          }}
        >
          Next Step
        </a>
      )}
      <ToastContainer />
    </>
  );
};

export default Verify;
