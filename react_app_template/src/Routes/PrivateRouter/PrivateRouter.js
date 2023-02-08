import React from "react";
import { Navigate, Outlet } from "react-router";
import * as routerLink from "../../config/routersConfig";

function PrivateRouter() {
  return 1 ? (
    <Outlet />
  ) : (
    <Navigate to={routerLink.error403.path} replace={true} />
  );
}

export default PrivateRouter;
