import React from "react";
import TopFlex from "./TopFlex";
import TransferRightFlex from "./TransferRightFlex";
import TransferTable from "./TransferTable";

const TransferMainContent = () => {
  return (
    <div className='main-content flex-column gap-30 transfers-grid padding-100'>
      <div className=''>
        <TopFlex />
        <TransferTable />
      </div>

      <TransferRightFlex />
    </div>
  );
};

export default TransferMainContent;
