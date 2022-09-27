import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();
  return (
    <div className='main-hero-buttons'>
      <a
        href=''
        className='btn-hero'
        onClick={(e) => {
          e.preventDefault();
          navigate("/signup");
        }}
      >
        Create Free Account
      </a>
      <div className='play-icon'>
        <i className='fa-solid fa-play'></i>
      </div>
    </div>
  );
};

export default Buttons;
