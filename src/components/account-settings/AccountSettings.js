import React from "react";

const AccountSettings = () => {
  return (
    <div className='step-four-container'>
      <div className='flex-1'>
        <div className='greeting'>
          <div className='icon'>
            <i class='fa-regular fa-face-smile'></i>
          </div>
          <div className='welcome-text'>Welcome </div>
        </div>
        <div className=''>
          <div className="">
            <div className="">1</div>
            <div className="">Email verification</div>
          </div>
          <div className="">
            <div className="">2</div>
            <div className="">Company registration</div>
          </div>
          <div className="">
            <div className="">3</div>
            <div className="">Co-operate Bank account</div>
          </div>
          <div className="">
            <div className="">4</div>
            <div className="">Business Information</div>
          </div>
        </div>
        <div className=''>You have selected the Registered business, Switch to Starter business</div>
        <div className=''>
          <div className="">A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.</div>
          <div className="">- Suzie Orman</div>
        </div>
      </div>
      <div className='flex-2'>
        <div className=''>
          <div className=""><i class="fa-solid fa-envelope"></i></div>
          <div className="">Email verification</div>
          <div className="">We have sent you an email verification , please check your email to verify before you proceed</div>
        </div>
        <div className=''>
          <form method="">
            <div className=""><input type="text" name="" id="" /></div>
            <div className=""><input type="text" name="" id="" /></div>
            <div className=""><input type="text" name="" id="" /></div>
            <div className=""><input type="text" name="" id="" /></div>
            <div className=""><input type="text" name="" id="" /></div>
            <div className=""><input type="text" name="" id="" /></div>
          </form>
        </div>
        <div className=''>Didn’t get the email ? Resend now</div>
      </div>
    </div>
  );
};

export default AccountSettings;
