import React from "react";
import CompanyRegistration from "./CompanyRegistration";
import Verify from "./Verify";

const Main = ({ mode, setMode }) => {
  return (
    <div className='flex-2'>
      {mode == "verify" && <Verify mode={mode} setMode={setMode} />}
      {mode == "registration" && (
        <CompanyRegistration mode={mode} setMode={setMode} />
      )}
    </div>
  );
};

export default Main;
