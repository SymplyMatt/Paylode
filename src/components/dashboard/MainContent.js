import React from "react";
import StickyHeader from "./StickyHeader";

const MainContent = ({
  showNav,
  setShowNav,
  showNotifications,
  setShowNotifications,
}) => {
  return (
    <div className='main-section hide-scrollbar height-100'>
      <StickyHeader
        showNav={showNav}
        setShowNav={setShowNav}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      <div className='main-content'></div>
    </div>
  );
};

export default MainContent;
