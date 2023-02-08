import React from "react";
import { Outlet } from "react-router";
import About from "../../components/about/About";
import About1 from "../../components/about/About1";

function AboutPage() {
  return (
    <>
      <About />
      <About1 />
      <Outlet />
    </>
  );
}

export default AboutPage;
