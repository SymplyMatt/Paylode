import React from "react";
import WalletTransactionHistory from "./WalletTransactionHistory";

const WalletMainContent = () => {
  return (
    <div className='main-content flex-column gap-30'>
        <div className="flex-column-center wallet-main-grid">
            <div className="wallet-grid wallet-grid-top">
                <div className="flex-column">
                    <div className="grid-title-wallet">AMOUNT IN WALLET</div>
                    <div className="grid-wallet-amount">₦5,000,000,000.00</div>
                </div>
                <div className="flex-column">
                    <div className="grid-title-wallet">AVAILABLE BALANCE</div>
                    <div className="grid-wallet-amount">₦5,000,000,000.00</div>
                </div>
            </div>
            
            <div className="wallet-grid wallet-grid-bottom">
                <div className="flex-column">
                    <div className="grid-title-wallet">WALLET ACCOUNT NUMBER</div>
                    <div className="wallet-grid-account-number">1815453546</div>
                </div>
                <div className="">
                    <div className="grid-wallet-description">You can top up your wallet by doing a transfer from your mobile/internet banking app or USSD to the account number: 8731877134 (Paylode Test Bank)</div>
                </div>
            </div>
        </div> 
        <WalletTransactionHistory />
    </div>
  );
};

export default WalletMainContent;
