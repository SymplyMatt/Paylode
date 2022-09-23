import React from "react";
import BigText from "./mainhero/BigText";
import Buttons from "./mainhero/Buttons";
import SmallText from "./mainhero/SmallText";

const Main = () => {
  return(
    <div className="main-hero-container">
      <BigText />
      <SmallText />
      <Buttons />
    </div>
  )
};

export default Main;
