import React from "react";
import DashboardHamburger from "../dashboard/DashboardHamburger";
import SideBar from "../dashboard/SideBar";
import MainContent from "../dashboard/MainContent";
import Notifications from "../dashboard/Notifications";
import { useEffect } from "react";

const Wallet = ({
  showNav,
  setShowNav,
  showNotifications,
  setShowNotifications,
  page,
  setPage,
}) => {
  useEffect(() => {
    document.title = "Wallet";
    setPage("wallet");
  });
  return (
    <div className={`${showNotifications && "overflow-hidden"}`}>
      <div className={`flex-row width-100 ${showNotifications && "hide-main"}`}>
        <SideBar page={page} setPage={setPage} />
        <MainContent
          showNav={showNav}
          setShowNav={setShowNav}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />
        <DashboardHamburger
          showNav={showNav}
          setShowNav={setShowNav}
          page={page}
          setPage={setPage}
        />
      </div>
      <Notifications
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
    </div>
  );
};

export default Wallet;
