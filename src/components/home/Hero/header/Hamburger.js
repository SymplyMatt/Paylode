import React from "react";
import {useEffect, useState} from "react";
const Hamburger = () => {
    const [showNav, setShowNav] = useState(true);
  return (
    <div className={`sticky-nav ${!showNav && 'hide-nav'}`}>
        <div className="logo-sticky">
            <img src="images/paylode-logo.png" alt="" />
        </div>
        
        <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div className="line"></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li><a href="#">Why Paylode</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li className="white-sm"><a href="#">For Developers</a></li>
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">API Documentation</a></li>
                            <li><a href="#">Support</a></li>
                            <li className="btn-1"><a href="#">Merchant Login</a></li>
                            <li className="btn-2"><a href="#">Create Free Account</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>      
    </div>
  );
};

export default Hamburger;
