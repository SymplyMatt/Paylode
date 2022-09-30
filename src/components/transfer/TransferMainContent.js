import React from "react";

const TransferMainContent = () => {
  return (
    <div className='main-content flex-column gap-30 transfers-grid'>
      <div className=''>
        <div className='flex-row transfer-top-flex'>
          <div className='flex-row gap-20 transfer-btns'>
            <div className='payments-btn'>New Transfer</div>
            <div className='payments-btn brown'>Export CSV</div>
          </div>
          <div className="flex-row gap-15 filter-transfer">
            <div className=""><i class="fa-solid fa-filter"></i></div>
            <div className="">Filter Transactions</div>
          </div>
        </div>
        <div className='dashboard-analytics-container flex-column-center gap-20 transfers'>
          <div className='dashboard-graph dashboard-table transfers-table transfers'>
            <div className='dashboard-grid dashboard-grid-heading transfer-grid'>
              <div className=''>Recipient</div>
              <div className=''>Amount</div>
              <div className=''>Reference</div>
              <div className=''>Status</div>
            </div>
            <div className='dashboard-grid dashboard-grid-item transfer-grid'>
              <div className='flex-row gap-10'>
                <div className='dashboard-item-icon'>
                  <img src='images/inflow-icon.svg' alt='' />
                </div>
                <div className='flex-column'>
                  <div className='transaction-reference-text'>
                    Jerry Ikenna Ibeawuchi 
                  </div>
                </div>
              </div>
              <div className='amount'>N10,000.00</div>
              <div className='amount'>91utd4csg4</div>
              <div className='status completed'>Completed</div>
            </div>
            <div className='dashboard-grid dashboard-grid-item transfer-grid'>
              <div className='flex-row gap-10'>
                <div className='dashboard-item-icon'>
                  <img src='images/outflow-icon.svg' alt='' />
                </div>
                <div className='flex-column'>
                  <div className='transaction-reference-text'>
                    Andrew Wams
                  </div>
                </div>
              </div>
              <div className='amount'>N10,000.00</div>
              <div className='amount'>91utd4csg4</div>
              <div className='status declined'>Not Completed</div>
            </div>
            <div className="pagination-transfers flex-row-center gap-30">
              <div className="flex-row-center gap-10 pointer pagination-icon">
                <div className=""><i class="fa-solid fa-angle-left"></i></div>
                <div className="">Previous</div>
              </div>
              <div className="flex-row-center gap-15 pagination-number">
                <div className="pointer">1</div>
                <div className="pointer">2</div>
                <div className="pointer">3</div>
                <div className="pointer">4</div>
              </div>
              <div className="flex-row-center gap-10 pointer pagination-icon">
                <div className="">Next</div>
                <div className=""><i class="fa-solid fa-angle-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='transfers-right gap-30'>
        <div className="">
          <div className="title">WALLET BALANCE</div>
          <div className="amount">N10,000.00</div>
          <div className="desc m-40">Available</div>
          <div><hr /></div>
        </div>
        <div className="">
          <div className="title">TRANSFERS</div>
          <div className="amount">100</div>
          <div className="desc">Sent</div>
          <div className="btn-view m-40">View Recipients</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default TransferMainContent;
