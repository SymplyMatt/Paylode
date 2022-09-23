import React from "react";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <div className='links'>
      <NavLinks />
      <NavButtons />
    </div>
  );
};

export default Nav;
