import React, { Fragment } from "react";
import Header from "../component/Header/Header";
import HeroSection from "../component/Hero-Section/HeroSection";
import AboutUs from "../component/About-us/About-us";
import Courses from "../component/Courses/Courses"; // Make sure this path is correct
import Footer from "../component/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Courses />
      <Footer />
    </Fragment>
  );
};

export default Home;
