import React from "react";
import { useState } from "react";
import LanguageMode from "../signup/LanguageMode";

const AccountSettings = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className='step-four-container'>
      <LanguageMode showOverlay={showOverlay} setShowOverlay={ setShowOverlay} />
      <div className="container">
      <div className='flex-1'>
        <div className='greeting'>
          <div className='icon'>
            <img src="images/smile.png" alt="" />
          </div>
          <div className='welcome-text'>Welcome Matthew</div>
        </div>
        <div className='step-nav'>
          <div className="item">
            <div className="number active">1</div>
            <div className="title active">Email verification</div>
          </div>
          <div className="item">
            <div className="number">2</div>
            <div className="title">Company registration</div>
          </div>
          <div className="item">
            <div className="number">3</div>
            <div className="title">Co-operate Bank account</div>
          </div>
          <div className="item">
            <div className="number">4</div>
            <div className="title">Business Information</div>
          </div>
        </div>
        <div className='mode-text'>You have selected the Registered business, Switch to <span   className="thick-underline">Starter business</span></div>
        <div className='quote'>
          <div className="quote-text">A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.</div>
          <div className="thick-underline"><span>- Suzie Orman</span></div>
        </div>
      </div>

      <div className='flex-2'>
        <div className='header'>
          <div className="icon"><i class="fa-solid fa-envelope"></i></div>
          <div className="title">Email verification</div>
          <div className="desc">We have sent you an email verification , please check your email to verify before you proceed</div>
        </div>
        <div className='input-container'>
          <form method="">
            <div className="input"><input type="text" name="" id="" /></div>
            <div className="input"><input type="text" name="" id="" /></div>
            <div className="input"><input type="text" name="" id="" /></div>
            <div className="input"><input type="text" name="" id="" /></div>
            <div className="input"><input type="text" name="" id="" /></div>
            <div className="input"><input type="text" name="" id="" /></div>
          </form>
        </div>
        <div className='resend-desc'>Didn't get the email ? <span>Resend now</span></div>
      </div>
      </div>
    </div>
  );
};

export default AccountSettings;
