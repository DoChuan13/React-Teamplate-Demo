import React from "react";
import Admin from "../../components/admin/Admin";
import { Outlet } from "react-router";

function AdminPage() {
  console.log("Admin Router Successful");
  return (
    <>
      <Admin />
      <Outlet />
    </>
  );
}

export default AdminPage;
