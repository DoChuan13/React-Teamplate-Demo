import React from "react";
import { Outlet } from "react-router-dom";

import Index from "../../components/index/Index";
import Index1 from "../../components/index/Index1";

function IndexPage() {
  return (
    <>
      <Index />
      <Index1 />
      <Outlet />
    </>
  );
}

export default IndexPage;
