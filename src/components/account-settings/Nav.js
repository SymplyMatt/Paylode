import React from "react";

const Nav = ({ mode, setMode }) => {
  return (
    <div className='flex-1'>
      <div className='greeting'>
        <div className='icon'>
          <img src='images/smile.png' alt='' />
        </div>
        <div className='welcome-text'>Welcome Matthew</div>
      </div>
      <div className='step-nav'>
        <div className='item' onClick={() => setMode("verify")}>
          <div className={`number ${mode == "verify" && "active"}`}>1</div>
          <div className={`title ${mode == "verify" && "active"}`}>
            Email verification
          </div>
        </div>
        <div className='item' onClick={() => setMode("registration")}>
          <div className={`number ${mode == "registration" && "active"}`}>
            2
          </div>
          <div className={`title ${mode == "registration" && "active"}`}>
            Company registration
          </div>
        </div>
        <div className='item' onClick={() => setMode("bank-account")}>
          <div className={`number ${mode == "bank-account" && "active"}`}>
            3
          </div>
          <div className={`title ${mode == "bank-account" && "active"}`}>
            Co-operate Bank account
          </div>
        </div>
        <div className='item' onClick={() => setMode("business-info")}>
          <div className={`number ${mode == "business-info" && "active"}`}>
            4
          </div>
          <div className={`title ${mode == "business-info" && "active"}`}>
            Business Information
          </div>
        </div>
      </div>
      <div className='mode-text'>
        You have selected the Registered business, Switch to{" "}
        <span className='thick-underline'>Starter business</span>
      </div>
      <div className='quote'>
        <div className='quote-text'>
          A big part of financial freedom is having your heart and mind free
          from worry about the what-ifs of life.
        </div>
        <div className='thick-underline'>
          <span>- Suzie Orman</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
