import React from "react";
import DashboardHamburger from "./DashboardHamburger";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import Notifications from "./Notifications";

const Dashboard = ({showNav,setShowNav,showNotifications,setShowNotifications}) => {
    return (
        <div className={`${showNotifications && 'overflow-hidden'}`}>
        <div className={`flex-row width-100 ${showNotifications && 'hide-main'}`}>
            <SideBar />
            <MainContent showNav={showNav} setShowNav={setShowNav} showNotifications={showNotifications} setShowNotifications={setShowNotifications}/>
            <DashboardHamburger showNav={showNav} setShowNav={setShowNav}/>
        </div>
        <Notifications showNotifications={showNotifications} setShowNotifications={setShowNotifications}/>
    </div>
    )
};

export default Dashboard;
