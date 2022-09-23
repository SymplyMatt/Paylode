import React from "react";
import Logo from "./header/Logo";
import Nav from "./header/Nav";

const Header = () => {
    return <div className='header-container'>
        <Logo />
        <div className="line"></div>
        <Nav />
        
  </div>;
};

export default Header;
