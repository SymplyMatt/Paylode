import React from "react";
import DashboardContent from "./DashboardContent";
import StickyHeader from "./StickyHeader";

const MainContent = ({
  showNav,
  setShowNav,
  showNotifications,
  setShowNotifications,page, setPage
}) => {
  return (
    <div className='main-section hide-scrollbar height-100'>
      <StickyHeader
        showNav={showNav}
        setShowNav={setShowNav}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      {page == 'dashboard' && <DashboardContent />}
    </div>
  );
};

export default MainContent;
