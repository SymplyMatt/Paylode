import React from "react";
import { useState } from "react";
const NavLinks = () => {
  const [overlay, setOverlay] = useState(false);
  return (
    <div className='nav-links-container'>
      <a href=''>Why Paylode</a>
      <a href=''>Pricing</a>
      <a href=''>For Developers</a>
      <div className="hover" onMouseEnter={()=>setOverlay(true)}>
        <i class='fa-solid fa-circle-chevron-down'></i>
        <div className={`overlay ${!overlay && 'hide'}`} onMouseEnter={()=>setOverlay(true)} onMouseLeave={()=>setOverlay(false)}>
          <a href=""> Overview</a>
          <a href="">API Documentation</a>
        </div>
      </div>
      <a href=''>Support</a>
    </div>
  );
};

export default NavLinks;
