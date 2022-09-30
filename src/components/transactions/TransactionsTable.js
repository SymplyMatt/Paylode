import React from "react";

const TransactionsTable = () => {
  return (
    <div className='dashboard-graph dashboard-table'>
      <div className='dashboard-grid dashboard-grid-heading'>
        <div className=''>Transaction Reference</div>
        <div className=''>Amount</div>
        <div className=''>Payment Method</div>
        <div className=''>Status</div>
      </div>
      <div className='dashboard-grid dashboard-grid-item'>
        <div className='flex-row gap-10'>
          <div className='dashboard-item-icon'>
            <img src='images/inflow-icon.svg' alt='' />
          </div>
          <div className='flex-column'>
            <div className='transaction-reference-text'>
              Payment from <span> #10023</span>
            </div>
            <div className='transaction-reference-text-sm'>Today, 10:30 AM</div>
          </div>
        </div>
        <div className='amount'>+ $650.00</div>
        <div className='amount'>Card Payment</div>
        <div className='status completed'>Completed</div>
      </div>
      <div className='dashboard-grid dashboard-grid-item'>
        <div className='flex-row gap-10'>
          <div className='dashboard-item-icon'>
            <img src='images/outflow-icon.svg' alt='' />
          </div>
          <div className='flex-column'>
            <div className='transaction-reference-text'>
              Payment from <span> #10023</span>
            </div>
            <div className='transaction-reference-text-sm'>Today, 10:30 AM</div>
          </div>
        </div>
        <div className='amount'>+ $650.00</div>
        <div className='amount'>Card Payment</div>
        <div className='status completed'>Completed</div>
      </div>
      <div className='dashboard-grid dashboard-grid-item'>
        <div className='flex-row gap-10'>
          <div className='dashboard-item-icon'>
            <img src='images/failed-icon.svg' alt='' />
          </div>
          <div className='flex-column'>
            <div className='transaction-reference-text'>
              Payment from <span> #10023</span>
            </div>
            <div className='transaction-reference-text-sm'>Today, 10:30 AM</div>
          </div>
        </div>
        <div className='amount'>- $650.00</div>
        <div className='amount'>Card Payment</div>
        <div className='status declined'>Declined</div>
      </div>
      <div className='dashboard-grid dashboard-grid-item'>
        <div className='flex-row gap-10'>
          <div className='dashboard-item-icon'>
            <img src='images/inflow-icon.svg' alt='' />
          </div>
          <div className='flex-column'>
            <div className='transaction-reference-text'>
              Payment from <span> #10023</span>
            </div>
            <div className='transaction-reference-text-sm'>Today, 10:30 AM</div>
          </div>
        </div>
        <div className='amount'>+ $650.00</div>
        <div className='amount'>Card Payment</div>
        <div className='status completed'>Completed</div>
      </div>
      <div className='dashboard-grid dashboard-grid-item'>
        <div className='flex-row gap-10'>
          <div className='dashboard-item-icon'>
            <img src='images/outflow-icon.svg' alt='' />
          </div>
          <div className='flex-column'>
            <div className='transaction-reference-text'>
              Payment from <span> #10023</span>
            </div>
            <div className='transaction-reference-text-sm'>Today, 10:30 AM</div>
          </div>
        </div>
        <div className='amount'>+ $650.00</div>
        <div className='amount'>Card Payment</div>
        <div className='status completed'>Completed</div>
      </div>
      <div className='dashboard-grid dashboard-grid-item'>
        <div className='flex-row gap-10'>
          <div className='dashboard-item-icon'>
            <img src='images/failed-icon.svg' alt='' />
          </div>
          <div className='flex-column'>
            <div className='transaction-reference-text'>
              Payment from <span> #10023</span>
            </div>
            <div className='transaction-reference-text-sm'>Today, 10:30 AM</div>
          </div>
        </div>
        <div className='amount'>- $650.00</div>
        <div className='amount'>Card Payment</div>
        <div className='status declined'>Declined</div>
      </div>
    </div>
  );
};

export default TransactionsTable;
