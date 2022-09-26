import React from "react";

const FormTitle = ({ step }) => {
  return (
    <div className='title' id='form'>
      <h2>{step == 1 ? "Create account" : "One more thing please.."}</h2>
      <div className='sub-title'>Create an account to continue!</div>
    </div>
  );
};

export default FormTitle;
