import React from "react";
import DashboardHamburger from "./DashboardHamburger";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import Notifications from "./Notifications";
import { useEffect } from "react";

const Dashboard = ({
  showNav,
  setShowNav,
  showNotifications,
  setShowNotifications,
  page,
  setPage,
}) => {
  useEffect(() => {
    document.title = "Dashboard";
    setPage("dashboard");
  });
  useEffect(() => {
    setShowNav(false);
  }, []);
  return (
    <div className={`${showNotifications && "overflow-hidden"}`}>
      <div className={`flex-row width-100 ${showNotifications && "hide-main"}`}>
        <SideBar page={page} setPage={setPage} />
        <MainContent
          showNav={showNav}
          setShowNav={setShowNav}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          page={page}
          setPage={setPage}
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

export default Dashboard;
