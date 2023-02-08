import React from "react";
import { Outlet } from "react-router-dom";
import User from "../../components/user/User";
import User1 from "../../components/user/User1";

function UserPage() {
  console.log("User Router Successful");
  return (
    <>
      <User />
      <User1 />
      <Outlet />
    </>
  );
}

export default UserPage;
