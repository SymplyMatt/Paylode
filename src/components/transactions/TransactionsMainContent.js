import React from "react";
import TransactionsTable from "./TransactionsTable";

const TransactionsMainContent = () => {
  return (
    <div className='main-content flex-column gap-30 padding-100'>
      <div className='dashboard-analytics-container flex-column-center gap-20'>
        <div className='transaction-history-flex'>
          <div className='analytics-text'>Transaction History</div>
          <div className='flex-column align-flex-end transaction-menu-container'>
            <div className='transaction-menu-icon'>
              <i class='fa-solid fa-ellipsis'></i>
            </div>
            <div className='transaction-menu-overlay'>
              <i class='fa-solid fa-download'></i>&nbsp; Export Transactions
            </div>
          </div>
        </div>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default TransactionsMainContent;
