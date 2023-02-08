import React from "react";
import { Navigate, Outlet } from "react-router";
import * as routerLink from "../../config/routersConfig";

function ProtectedRouter() {
  return 0 ? (
    <Outlet />
  ) : (
    <Navigate to={routerLink.error403.path} replace={true} />
  );
}

export default ProtectedRouter;
