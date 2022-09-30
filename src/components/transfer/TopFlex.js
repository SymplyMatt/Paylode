import React from "react";

const TopFlex = () => {
  return (
    <div className='flex-row transfer-top-flex'>
      <div className='flex-row gap-20 transfer-btns'>
        <div className='payments-btn'>New Transfer</div>
        <div className='payments-btn brown'>Export CSV</div>
      </div>
      <div className='flex-row gap-15 filter-transfer'>
        <div className=''>
          <i class='fa-solid fa-filter'></i>
        </div>
        <div className=''>Filter Transactions</div>
      </div>
    </div>
  );
};

export default TopFlex;
