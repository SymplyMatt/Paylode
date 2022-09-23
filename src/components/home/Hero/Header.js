import React from "react";

const Header = () => {
    return <div className='header-container'>
        <div className="logo-container"><img src="images/paylode-logo.png" alt="" /></div>
        <div className="line"></div>
        <div className="nav-links-container">
            <a href="">Why Paylode</a>
            <a href="">Pricing</a>
            <a href="">For Developers</a>
            <a href="">Support</a>
        </div>
  </div>;
};

export default Header;
