import React from "react";
import AnalyticsOverview from "./AnalyticsOverview";
import { Line } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { useEffect } from "react";
import Chart from "./Chart";

const DashboardContent = () => {
   
  return (
    <div className='main-content flex-column gap-30'>
        <div className='flex-column show-overlay-container'>
            <div className='show-menu flex-row-center'>
            <span className='light-black'>Show : </span>
            <span className='font-700'>
                &nbsp; This Year &nbsp;<i class='fa-solid fa-caret-down'></i>
            </span>
            </div>
            <div className='show-overlay flex-row-center'>Last Year</div>
        </div>
        <AnalyticsOverview />
      <Chart />
      <div className='dashboard-analytics-container flex-column-center gap-20'>
        <div className='analytics-text'>Transaction History</div>
        <div className='dashboard-graph'>
          <div className="dashboard-grid dashboard-grid-heading">
            <div className="">Transaction Reference</div>
            <div className="">Amount</div>
            <div className="">Payment Method</div>
            <div className="">Status</div>
          </div>
          <div className="dashboard-grid dashboard-grid-item">
            <div className="flex-row gap-10">
              <div className="dashboard-item-icon"><img src="images/inflow-icon.svg" alt="" /></div>
              <div className="flex-column">
                <div className="transaction-reference-text">Payment from <span> #10023</span></div>
                <div className="transaction-reference-text-sm">Today, 10:30 AM</div>
              </div>
            </div>
            <div className="amount">+ $650.00</div>
            <div className="amount">Card Payment</div>
            <div className="status completed">Completed</div>
          </div>
          <div className="dashboard-grid dashboard-grid-item">
            <div className="flex-row gap-10">
              <div className="dashboard-item-icon"><img src="images/outflow-icon.svg" alt="" /></div>
              <div className="flex-column">
                <div className="transaction-reference-text">Payment from <span> #10023</span></div>
                <div className="transaction-reference-text-sm">Today, 10:30 AM</div>
              </div>
            </div>
            <div className="amount">+ $650.00</div>
            <div className="amount">Card Payment</div>
            <div className="status completed">Completed</div>
          </div>
          <div className="dashboard-grid dashboard-grid-item">
            <div className="flex-row gap-10">
              <div className="dashboard-item-icon"><img src="images/failed-icon.svg" alt="" /></div>
              <div className="flex-column">
                <div className="transaction-reference-text">Payment from <span> #10023</span></div>
                <div className="transaction-reference-text-sm">Today, 10:30 AM</div>
              </div>
            </div>
            <div className="amount">- $650.00</div>
            <div className="amount">Card Payment</div>
            <div className="status declined">Declined</div>
          </div>
          
          <div className="view-all">View All Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
