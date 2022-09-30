import React from "react";
import CustomersTable from "./CustomersTable";
import { useState } from "react";

const CustomersMain = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className='main-content flex-column gap-30 padding-100'>
      <div className='payments-top-flex'>
        <div className='payments-search'>
          <div className=''>
            <i class='fa-solid fa-magnifying-glass'></i>
          </div>
          <input type='text' placeholder='Search' />
        </div>
        <div className='flex-row gap-30'>
          <div className='payments-btn'>Add New Customer</div>
          <div className='payments-btn brown'>Export CSV</div>
        </div>
      </div>
      <CustomersTable
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  );
};

export default CustomersMain;
