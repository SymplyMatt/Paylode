import React from "react";
import BankAccount from "./BankAccount";
import BusinessInfo from "./BusinessInfo";
import CompanyRegistration from "./CompanyRegistration";
import Verify from "./Verify";

const Main = ({ mode, setMode }) => {
  return (
    <div className='flex-2'>
      {mode == "verify" && <Verify mode={mode} setMode={setMode} />}
      {mode == "registration" && (
        <CompanyRegistration mode={mode} setMode={setMode} />
      )}
      {mode == "bank-account" && <BankAccount mode={mode} setMode={setMode} />}
      {mode == "business-info" && (
        <BusinessInfo mode={mode} setMode={setMode} />
      )}
    </div>
  );
};

export default Main;
