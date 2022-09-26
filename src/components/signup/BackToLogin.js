import React from "react";
import { useNavigate } from "react-router-dom";
const BackToLogin = () => {
  const navigate = useNavigate();
  return (
    <div className='new-account pointer'>
      Already have an account?
      <span onClick={() => navigate("/login")}> Sign In </span>
    </div>
  );
};

export default BackToLogin;
