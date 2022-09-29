import React from "react";
import DashboardContent from "./DashboardContent";
import StickyHeader from "./StickyHeader";
import TransferMainContent from "../transfer/TransferMainContent";
import WalletMainContent from "../wallet/WalletMainContent";
import TransactionsMainContent from "../transactions/TransactionsMainContent";
import PaymentsMainContent from "../payments/PaymentsMainContent";
import CustomersMainContent from "../customers/CustomersMainContent";
import InvoicingMainContent from "../invoicing/InvoicingMainContent";

const MainContent = ({
  showNav,
  setShowNav,
  showNotifications,
  setShowNotifications,
  page,
  setPage,
}) => {
  return (
    <div className='main-section hide-scrollbar height-100'>
      <StickyHeader
        showNav={showNav}
        setShowNav={setShowNav}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        page={page}
        setPage={setPage}
      />
      {page == "dashboard" && <DashboardContent />}
      {page == "transfer" && <TransferMainContent />}
      {page == "wallet" && <WalletMainContent />}
      {page == "transactions" && <TransactionsMainContent />}
      {page == "payments" && <PaymentsMainContent />}
      {page == "customers" && <CustomersMainContent />}
      {page == "invoicing" && <InvoicingMainContent />}
    </div>
  );
};

export default MainContent;
