import React from "react";
import { Outlet } from "react-router-dom";
import User from "../../components/user/User";
import User1 from "../../components/user/User1";

function UserPage1() {
  return (
    <>
      <User />
      <User1 />
      <Outlet />
    </>
  );
}

export default UserPage1;
