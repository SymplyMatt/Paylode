import React from "react";

const TransferRightFlex = () => {
  return (
    <div className='transfers-right gap-30 m-100'>
      <div className=''>
        <div className='title'>WALLET BALANCE</div>
        <div className='amount'>N10,000.00</div>
        <div className='desc m-40'>Available</div>
        <div>
          <hr />
        </div>
      </div>
      <div className=''>
        <div className='title'>TRANSFERS</div>
        <div className='amount'>100</div>
        <div className='desc'>Sent</div>
        <div className='btn-view m-40'>View Recipients</div>
        <hr />
      </div>
    </div>
  );
};

export default TransferRightFlex;
