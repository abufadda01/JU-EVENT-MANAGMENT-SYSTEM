import React from "react";
import Navbar from "./Navbar";
import BlogGallery from "./BlogGallery";
import BlogAbout from "./BlogAbout";
import BackgroundPages from "./BackgroundPages";
import BlogContact from "./BlogContact";
import Footer from "./Footer"
import { useLayoutEffect } from "react";

const BlogPage = () => {

  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <>
      <Navbar />

      <BackgroundPages title="Public Relations Unit " />
      <BlogGallery />
      <BlogAbout />
      <BlogContact />
      <Footer/>
    </>
  );
};

export default BlogPage;
