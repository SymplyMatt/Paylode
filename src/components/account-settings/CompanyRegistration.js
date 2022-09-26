import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanyRegistration = ({mode, setMode}) => {
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

  return (
    <>
      <div className='header'>
        <div className='title'>Company Registration</div>
        <div className="input-one-container">
            <select name="" id="" className="input-box full">
                <option value="">Select Company Document</option>
            </select>
        </div>
        <div
            className='input-one-container'
            onClick={() => firstInput.current.focus()}
          >
            <input
              type='text'
              placeholder='Enter ID Number'
              ref={firstInput}
              className='input-box full'
            />
          </div>
          <div className="upload-document">
            <input type="file" name="" id="" />
          </div>
            <div className="btn-flex registration">
                  <a href='' className='btn-step lg brown' onClick={(e) => {
                      e.preventDefault();
                      setMode('verify')
                }}>Back</a>
                <a href='' className='btn-step lg' onClick={(e) => {
                      e.preventDefault();
                      setMode('bank-account');
                }}>Update & Save</a>
            </div>  
        </div>
    </>
  );
};

export default CompanyRegistration;
