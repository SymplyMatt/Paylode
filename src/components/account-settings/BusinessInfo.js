import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BusinessInfo = ({ mode, setMode }) => {
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
      <div className='header business-info-container'>
        <div className='title'>Business Information</div>
        <div className='flex upload'>
          <div className='upload-icon'>
            <input type='file' name='' id='' />
          </div>
          <div className=''>
            <div className='desc'>Company Logo</div>
            <div className='desc sm'>
              Upload a logo as your company identity, must be of size (512px x
              512px) and less than 500KB
            </div>
          </div>
        </div>
        <div className='input-one-container'>
          <select name='' id='' className='input-box full'>
            <option value=''>Select business category</option>
          </select>
        </div>
        <div
          className='input-one-container text-area'
          onClick={() => firstInput.current.focus()}
        >
          <textarea
            type='text'
            placeholder='Tell us about your business'
            ref={firstInput}
            className='input-box full'
          ></textarea>
        </div>
        <div
          className='input-one-container'
          onClick={() => firstInput.current.focus()}
        >
          <input
            type='text'
            placeholder='Support Email'
            ref={firstInput}
            className='input-box full'
          />
        </div>
        <div
          className='input-one-container'
          onClick={() => firstInput.current.focus()}
        >
          <input
            type='text'
            placeholder='ChangeBack Email'
            ref={firstInput}
            className='input-box full'
          />
        </div>
        <div className='desc'>Company Address</div>
        <div className=''>
          <div className='flex'>
            <div className='input-one-container'>
              <select name='' id='' className='input-box full'>
                <option value=''>Country</option>
              </select>
            </div>
            <div className='input-one-container'>
              <select name='' id='' className='input-box full'>
                <option value=''>State</option>
              </select>
            </div>
          </div>
          <div className='flex'>
            <div className='input-one-container'>
              <select name='' id='' className='input-box full'>
                <option value=''>L.G.A</option>
              </select>
            </div>
            <div className='input-one-container'>
              <select name='' id='' className='input-box full'>
                <option value=''>Address Line</option>
              </select>
            </div>
          </div>
        </div>
        <div className='btn-flex registration'>
          <a
            href=''
            className='btn-step lg brown'
            onClick={(e) => {
              e.preventDefault();
              setMode("bank-account");
            }}
          >
            Back
          </a>
          <a
            href=''
            className='btn-step lg'
            onClick={(e) => {
              e.preventDefault();
              // setMode("businesss-info");
            }}
          >
            Update & Save
          </a>
        </div>
      </div>
    </>
  );
};

export default BusinessInfo;
