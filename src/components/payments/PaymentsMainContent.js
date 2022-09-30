import React from "react";
import { useState } from "react";
import PaymentsTable from "./PaymentsTable";
const PaymentsMainContent = () => {
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
        <div className='payments-btn'>Add New Page</div>
      </div>
      <PaymentsTable
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  );
};

export default PaymentsMainContent;
