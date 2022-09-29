import React from "react";
import InvoicingTable from "./InvoicingTable";
import { useState } from "react";

const InvoicingMainContent = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className='main-content flex-column gap-30'>
      <div className='payments-top-flex'>
        <div className='payments-search'>
          <div className=''>
            <i class='fa-solid fa-magnifying-glass'></i>
          </div>
          <input type='text' placeholder='Search' />
        </div>
        <div className='flex-row gap-30'>
          <div className='payments-btn'>Generate New Invoice</div>
          <div className='payments-btn brown'>Export CSV</div>
        </div>
      </div>
      <InvoicingTable
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  );
};

export default InvoicingMainContent;
