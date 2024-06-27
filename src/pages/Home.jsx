import React, { Fragment } from "react";
import Header from "../component/Header/Header";
import HeroSection from "../component/Hero-Section/HeroSection";
import AboutUs from "../component/About-us/About-us";
import Courses from "../component/Courses/Courses"; // Make sure this path is correct

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Courses />
    </Fragment>
  );
};

export default Home;
