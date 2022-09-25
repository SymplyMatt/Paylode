import React from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const navigate = useNavigate();
  return (
    <div className='buttons'>
      <a
        href=''
        className='btn btn-1'
        onClick={(e) => {
          e.preventDefault();
          navigate("/auth/login");
        }}
      >
        Merchant Login
      </a>
      <a
        href=''
        className='btn btn-2'
        onClick={(e) => {
          e.preventDefault();
          navigate("/auth/signup");
        }}
      >
        Create Free Account
      </a>
    </div>
  );
};

export default NavButtons;
