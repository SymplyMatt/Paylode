import React from "react";
import Hero from "./Hero/Hero";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "PayloadWeb";
  });
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
