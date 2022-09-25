import React from "react";
import Hero from "./Hero/Hero";
import { useEffect } from "react";
import ImageBg from "./ImageBg";
import About from "./About";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Footer from "./Footer";
import SectionFour from "./SectionFour";
import Hamburger from "./Hero/header/Hamburger";
const Home = () => {
  useEffect(() => {
    document.title = "Home || PayloadWeb";
  });
  return (
    <>
      <Hamburger />
      <Hero />
      <ImageBg />
      <a href='#about'>
        <div className='scroll'>
          <img src='images/scroll-icon.png' alt='' />
        </div>
      </a>
      <About />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
};

export default Home;
