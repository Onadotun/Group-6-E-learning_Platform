import React, { Fragment } from "react";
import Header from "../component/Header/Header";
import HeroSection from "../component/Hero-Section/HeroSection";
import AboutUs from "../component/About-us/About-us";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
