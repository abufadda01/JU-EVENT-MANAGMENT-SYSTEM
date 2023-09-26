import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import BlogHomePage from "./BlogHomepage";
import Features from "./Features";
import EventsHomePage from "./EventsHomePage";
import Footer from "./Footer";
import { useLayoutEffect } from "react";

const HomePage = () => {

  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Navbar />

      <Carousel />

      <BlogHomePage />

      <h2>Services</h2>

      <Features />

      <h2>UP-COMING EVENTS</h2>

      <EventsHomePage />
      
      <Footer />
    </>
  );
};

export default HomePage;
