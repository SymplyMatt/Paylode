import React from "react";
import AnalyticsOverview from "./AnalyticsOverview";
import { Line } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { useEffect } from "react";
import Chart from "./Chart";
import TransactionHistory from "./TransactionHistory";

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
      <TransactionHistory />
    </div>
  );
};

export default DashboardContent;
