import React from "react";

const Notifications = ({showNotifications, setShowNotifications}) => {
    return(
        <>
        <div className={`black-overlay ${!showNotifications && 'hide-nav'}`}></div>
        <div className={`flex-column notifications-overlay overflow-hidden ${!showNotifications && 'hide-nav'}`}>
        <div className="notifications-title">
            <i class="fa-solid fa-arrow-left" onClick={() => setShowNotifications(false)}></i>
            Notifications
        </div>
        <div className="flex-column gap-30">
            <div className="flex-row margin-10 gap-20">
                <div className="bell-notification-icon"><i class="fa-solid fa-bell"></i></div>
                <div className="flex-column gap-10">
                    <div className="notification-text">Description of notification in one line, not more that, and authorized signed dectated</div>
                    <div className="flex-row gap-10 notification-text align-center sm-12">
                        <div className="">Today</div>
                        <div className="period-sm"></div>
                        <div className="">2 mins ago</div>
                    </div>
                </div>  
            </div>
            <div className="flex-row margin-10 gap-20">
                <div className="bell-notification-icon"><i class="fa-solid fa-bell"></i></div>
                <div className="flex-column gap-10">
                    <div className="notification-text">Description of notification in one line, not more that, and authorized signed dectated</div>
                    <div className="flex-row gap-10 notification-text align-center sm-12">
                        <div className="">Today</div>
                        <div className="period-sm"></div>
                        <div className="">2 mins ago</div>
                    </div>
                </div>  
            </div>
            <div className="flex-row margin-10 gap-20">
                <div className="bell-notification-icon"><i class="fa-solid fa-bell"></i></div>
                <div className="flex-column gap-10">
                    <div className="notification-text">Description of notification in one line, not more that, and authorized signed dectated</div>
                    <div className="flex-row gap-10 notification-text align-center sm-12">
                        <div className="">Today</div>
                        <div className="period-sm"></div>
                        <div className="">2 mins ago</div>
                    </div>
                </div>  
            </div>
        </div>
        </div>
        </>
    
    )
};

export default Notifications;
