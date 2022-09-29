import React from "react";

const PaymentsTable = ({ showOverlay, setShowOverlay }) => {
  return (
    <div className='dashboard-analytics-container flex-column-center gap-20'>
      <div className={`payments-menu-overlay ${!showOverlay && "hide-nav"}`}>
        <div className='payment-icon'>
          <i class='fa-solid fa-eye'></i> <div className=''>View Details</div>
        </div>
        <div className='payment-icon'>
          <i class='fa-solid fa-file-arrow-down'></i>{" "}
          <div className=''>Preview Page</div>
        </div>
        <div className='payment-icon delete'>
          <i class='fa-solid fa-square-xmark'></i>{" "}
          <div className=''>Delete Page</div>
        </div>
      </div>
      <div className='dashboard-graph dashboard-table payments-grid-table'>
        <div className='dashboard-grid dashboard-grid-heading payments-grid'>
          <div className=''>Name</div>
          <div className=''>Type</div>
          <div className=''>Amount</div>
          <div className=''>Date Created</div>
          <div className=''>Status</div>
          <div className=''>Url</div>
        </div>
        <div className='dashboard-grid dashboard-grid-item payments-grid'>
          <div className='amount'>Orphanage Funds</div>
          <div className='amount'>Payment</div>
          <div className='amount green'> NGN 10,000</div>
          <div className='amount'> June 10, 2021</div>
          <div className='status-active'>Active</div>
          <div
            className='transaction-menu-icon'
            onClick={() => setShowOverlay(!showOverlay)}
          >
            <i class='fa-solid fa-ellipsis'></i>
          </div>
        </div>
        <div className='dashboard-grid dashboard-grid-item payments-grid'>
          <div className='amount'>Orphanage Funds</div>
          <div className='amount'>Payment</div>
          <div className='amount green'> NGN 10,000</div>
          <div className='amount'> June 10, 2021</div>
          <div className='status-active'>Active</div>
          <div
            className='transaction-menu-icon'
            onClick={() => setShowOverlay(!showOverlay)}
          >
            <i class='fa-solid fa-ellipsis'></i>
          </div>
        </div>
        <div className='dashboard-grid dashboard-grid-item payments-grid'>
          <div className='amount'>Orphanage Funds</div>
          <div className='amount'>Payment</div>
          <div className='amount green'> NGN 10,000</div>
          <div className='amount'> June 10, 2021</div>
          <div className='status-inactive'>Inactive</div>
          <div
            className='transaction-menu-icon'
            onClick={() => setShowOverlay(!showOverlay)}
          >
            <i class='fa-solid fa-ellipsis'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTable;
