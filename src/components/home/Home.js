import React from "react";
import Hero from "./Hero/Hero";
import { useEffect } from "react";
import ImageBg from "./ImageBg";
import About from "./About";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
const Home = () => {
  useEffect(() => {
    document.title = "Home || PayloadWeb";
  });
  return (
    <>
      <Hero />
      <ImageBg />
      <div className="scroll"><img src="images/scroll-icon.png" alt="" /></div>
      <About />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Home;
