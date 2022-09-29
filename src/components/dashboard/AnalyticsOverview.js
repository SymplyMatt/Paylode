import React from "react";

const AnalyticsOverview = () => {
  return (
    <div className='flex-column-center dashboard-analytics-container gap-20'>
      <div className='analytics-text'>Analytics Overview</div>
      <div className='flex-row-center gap-15 analytics-overview-items'>
        <div className='flex-column-center dashnoard-analytics-item gap-15'>
          <div className='dashnoard-analytics-item-header'>TOTAL REVENUE</div>
          <div className='flex-column-center'>
            <div className='dashnoard-analytics-item-amount'>$21.2K</div>
            <div className='dashnoard-analytics-item-amount-sm'>
              ($15.8k last year)
            </div>
          </div>
          <div className='dashnoard-analytics-item-percent success'>
            <i class='fa-solid fa-arrow-up'></i> 105.23 %
          </div>
        </div>
        <div className='flex-column-center dashnoard-analytics-item gap-15'>
          <div className='dashnoard-analytics-item-header'>TRANSACTIONS</div>
          <div className='flex-column-center'>
            <div className='dashnoard-analytics-item-amount'>$16.0K</div>
            <div className='dashnoard-analytics-item-amount-sm'>
              ($20.3k last year)
            </div>
          </div>
          <div className='dashnoard-analytics-item-percent failure'>
            <i class='fa-solid fa-arrow-down'></i> 20.5 %
          </div>
        </div>
        <div className='flex-column-center dashnoard-analytics-item gap-15'>
          <div className='dashnoard-analytics-item-header'>
            PENDING SETTLEMENT
          </div>
          <div className='flex-column-center'>
            <div className='dashnoard-analytics-item-amount'>$29.2K</div>
            <div className='dashnoard-analytics-item-amount-sm'>
              ($90.8k last year)
            </div>
          </div>
          <div className='dashnoard-analytics-item-percent success'>
            <i class='fa-solid fa-arrow-up'></i> 105.23 %
          </div>
        </div>
        <div className='flex-column-center dashnoard-analytics-item gap-15'>
          <div className='dashnoard-analytics-item-header'>MARKETING</div>
          <div className='flex-column-center'>
            <div className='dashnoard-analytics-item-amount'>$81.2K</div>
            <div className='dashnoard-analytics-item-amount-sm'>
              ($95.8k last year)
            </div>
          </div>
          <div className='dashnoard-analytics-item-percent success'>
            <i class='fa-solid fa-arrow-up'></i> 105.23 %
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
