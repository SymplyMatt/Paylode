import React from "react";

const InvoicingTable = ({ showOverlay, setShowOverlay }) => {
  return (
    <div className='dashboard-analytics-container flex-column-center gap-20'>
      <div className={`payments-menu-overlay ${!showOverlay && "hide-nav"}`}>
        <div className='payment-icon pointer'>
          <i class='fa-solid fa-eye'></i> <div className=''>View Details</div>
        </div>
        <div className='payment-icon pointer'>
          <i class='fa-solid fa-file-arrow-down'></i>
          <div className=''>Preview Page</div>
        </div>
        <div className='payment-icon pointer delete'>
          <i class='fa-solid fa-square-xmark'></i>
          <div className=''>Delete Page</div>
        </div>
      </div>
      <div className='dashboard-graph dashboard-table payments-grid-table'>
        <div className='dashboard-grid dashboard-grid-heading customers-grid'>
          <div className=''>Full Name</div>
          <div className=''>Email Address</div>
          <div className=''>Phone Number</div>
          <div className=''>Date Registered</div>
          <div className=''>Actions</div>
        </div>
        <div className='dashboard-grid dashboard-grid-item customers-grid'>
          <div className='amount'>Jerry Ibeawuchi</div>
          <div className='amount'>jerrysonibe@gmail.com</div>
          <div className='amount'> +23490922554201 </div>
          <div className='amount'> June 10, 2021</div>
          <div className='view-invoice'>
            <i class='fa-solid fa-eye pointer'></i> View Invoice
          </div>
        </div>
        <div className='dashboard-grid dashboard-grid-item customers-grid'>
          <div className='amount'>Andrew Wams </div>
          <div className='amount'>andrewams@gmail.com </div>
          <div className='amount'> +23490379242432</div>
          <div className='amount'> June 10, 2021</div>
          <div className='view-invoice'>
            <i class='fa-solid fa-eye pointer'></i> View Invoice
          </div>
        </div>
        <div className='dashboard-grid dashboard-grid-item customers-grid'>
          <div className='amount'>Lois Genesis Oghale </div>
          <div className='amount'>loisgenesis18@gmail.com </div>
          <div className='amount'> +23490379242432 </div>
          <div className='amount'> June 10, 2021</div>
          <div className='view-invoice'>
            <i class='fa-solid fa-eye pointer'></i> View Invoice
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicingTable;
